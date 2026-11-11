import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, combineLatest } from 'rxjs';
import { BlogPost, BlogService } from '../../services/blog.service';
import { ForumService, BlogEngagement, BlogComment } from '../../services/forum.service';
import { ForumAuthService, ForumUser } from '../../services/forum-auth.service';
import { SocialShareService } from '../../services/social-share.service';


@Component({
  selector: 'app-blog-post',
  standalone: false,
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent implements OnInit, OnDestroy {
  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];
  loading = true;
  notFound = false;
  linkCopied = false;

  // Engagement
  engagement: BlogEngagement | null = null;
  comments: BlogComment[] = [];
  newComment = '';
  submittingComment = false;
  togglingLike = false;
  showAuthModal = false;
  authModalMode: 'login' | 'signup' = 'login';
  replyingTo: BlogComment | null = null;
  replyContent = '';
  submittingReply = false;
  shareToastMessage = '';

  private subs: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private forumService: ForumService,
    public forumAuthService: ForumAuthService,
    public share: SocialShareService
  ) {}

  ngOnInit(): void {
    const routeSub = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';

      this.loading = true;
      this.notFound = false;
      this.post = undefined;
      this.engagement = null;
      this.comments = [];
      this.newComment = '';

      const dataSub = combineLatest([
        this.blogService.posts$,
        this.blogService.ready$,
      ]).subscribe(([posts, ready]) => {
        this.post = posts.find((p) => p.slug === slug);

        if (this.post) {
          this.loading = false;
          this.notFound = false;
          this.relatedPosts = posts
            .filter((p) => p.category === this.post!.category && p.slug !== slug)
            .slice(0, 3);
          this.loadEngagement(this.post.id);
        } else if (ready) {
          this.loading = false;
          this.notFound = true;
        }
      });

      this.subs.push(dataSub);
    });
    this.subs.push(routeSub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href).then(() => {
      this.linkCopied = true;
      setTimeout(() => (this.linkCopied = false), 2500);
    });
  }

  async shareOnInstagram(): Promise<void> {
    if (!this.post) return;
    const result = await this.share.shareToInstagram(this.post);
    this.shareToastMessage = result === 'shared'
      ? 'Opening share sheet…'
      : 'Caption copied — open Instagram and paste it in';
    setTimeout(() => (this.shareToastMessage = ''), 4500);
  }

  loadEngagement(postId: string): void {
    this.forumService.getBlogEngagement(postId).subscribe({
      next: (eng) => (this.engagement = eng),
      error: () => {},
    });
    this.forumService.getBlogComments(postId).subscribe({
      next: (comments) => (this.comments = comments),
      error: () => {},
    });
  }

  toggleLike(): void {
    if (!this.forumAuthService.isLoggedIn()) {
      this.authModalMode = 'login';
      this.showAuthModal = true;
      return;
    }
    if (this.togglingLike || !this.post) return;
    this.togglingLike = true;
    this.forumService.toggleBlogLike(this.post.id).subscribe({
      next: (result) => {
        if (this.engagement) {
          this.engagement = {
            ...this.engagement,
            liked: result.liked,
            likeCount: result.likeCount,
          };
        }
        this.togglingLike = false;
      },
      error: () => {
        this.togglingLike = false;
      },
    });
  }

  submitComment(): void {
    if (!this.forumAuthService.isLoggedIn()) {
      this.authModalMode = 'login';
      this.showAuthModal = true;
      return;
    }
    if (this.submittingComment || !this.newComment.trim() || !this.post) return;
    this.submittingComment = true;
    this.forumService.addBlogComment(this.post.id, this.newComment.trim()).subscribe({
      next: (comment) => {
        this.comments = [...this.comments, comment];
        if (this.engagement) {
          this.engagement = {
            ...this.engagement,
            commentCount: this.engagement.commentCount + 1,
          };
        }
        this.newComment = '';
        this.submittingComment = false;
      },
      error: () => {
        this.submittingComment = false;
      },
    });
  }

  startReply(comment: BlogComment): void {
    if (!this.forumAuthService.isLoggedIn()) {
      this.authModalMode = 'login';
      this.showAuthModal = true;
      return;
    }
    this.replyingTo = comment;
    this.replyContent = '';
  }

  cancelReply(): void {
    this.replyingTo = null;
    this.replyContent = '';
  }

  submitReply(): void {
    if (!this.replyingTo || !this.post) return;
    if (this.submittingReply || !this.replyContent.trim()) return;
    this.submittingReply = true;
    const parentId = this.replyingTo.id;
    this.forumService.addBlogComment(this.post.id, this.replyContent.trim(), parentId).subscribe({
      next: (reply) => {
        this.comments = this.comments.map((c) =>
          c.id === parentId ? { ...c, replies: [...(c.replies || []), reply] } : c
        );
        this.replyingTo = null;
        this.replyContent = '';
        this.submittingReply = false;
      },
      error: () => {
        this.submittingReply = false;
      },
    });
  }

  deleteComment(commentId: number): void {
    if (!this.post) return;
    this.forumService.deleteBlogComment(this.post.id, commentId).subscribe({
      next: () => {
        this.comments = this.comments.filter((c) => c.id !== commentId);
        if (this.engagement) {
          this.engagement = {
            ...this.engagement,
            commentCount: Math.max(0, this.engagement.commentCount - 1),
          };
        }
      },
      error: () => {},
    });
  }

  onAuthSuccess(user: ForumUser): void {
    this.showAuthModal = false;
    if (this.post) {
      this.loadEngagement(this.post.id);
    }
  }
}
