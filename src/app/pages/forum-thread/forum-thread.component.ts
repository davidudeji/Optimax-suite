import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForumService, ForumThreadDetail, ForumComment } from '../../services/forum.service';
import { ForumAuthService, ForumUser } from '../../services/forum-auth.service';

@Component({
  selector: 'app-forum-thread',
  standalone: false,
  templateUrl: './forum-thread.component.html',
})
export class ForumThreadComponent implements OnInit, OnDestroy {
  detail: ForumThreadDetail | null = null;
  loading = true;
  newComment = '';
  submittingComment = false;
  togglingLike = false;
  showAuthModal = false;
  authModalMode: 'login' | 'signup' = 'login';
  replyingTo: ForumComment | null = null;
  replyContent = '';
  submittingReply = false;

  private subs: Subscription[] = [];

  constructor(
    private forumService: ForumService,
    public forumAuthService: ForumAuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const sub = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';
      this.loading = true;
      this.detail = null;
      this.newComment = '';
      this.loadThread(slug);
    });
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

  loadThread(slug?: string): void {
    const s = slug || this.route.snapshot.paramMap.get('slug') || '';
    this.forumService.getThread(s).subscribe({
      next: (detail) => {
        this.detail = detail;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  toggleLike(): void {
    if (!this.forumAuthService.isLoggedIn()) {
      this.authModalMode = 'login';
      this.showAuthModal = true;
      return;
    }
    if (this.togglingLike || !this.detail) return;
    this.togglingLike = true;
    this.forumService.toggleThreadLike(this.detail.thread.id).subscribe({
      next: (result) => {
        if (this.detail) {
          this.detail = {
            ...this.detail,
            thread: {
              ...this.detail.thread,
              liked: result.liked,
              likeCount: result.likeCount,
            },
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
    if (this.submittingComment || !this.newComment.trim() || !this.detail) return;
    this.submittingComment = true;
    this.forumService.addThreadComment(this.detail.thread.id, this.newComment.trim()).subscribe({
      next: (comment) => {
        if (this.detail) {
          this.detail = {
            ...this.detail,
            comments: [...this.detail.comments, comment],
            thread: {
              ...this.detail.thread,
              commentCount: this.detail.thread.commentCount + 1,
            },
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

  startReply(comment: ForumComment): void {
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
    if (!this.replyingTo || !this.detail) return;
    if (this.submittingReply || !this.replyContent.trim()) return;
    this.submittingReply = true;
    const parentId = this.replyingTo.id;
    this.forumService.addThreadComment(this.detail.thread.id, this.replyContent.trim(), parentId).subscribe({
      next: (reply) => {
        if (this.detail) {
          this.detail = {
            ...this.detail,
            comments: this.detail.comments.map((c) =>
              c.id === parentId ? { ...c, replies: [...(c.replies || []), reply] } : c
            ),
          };
        }
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
    if (!this.detail) return;
    this.forumService.deleteComment(this.detail.thread.id, commentId).subscribe({
      next: () => {
        if (this.detail) {
          this.detail = {
            ...this.detail,
            comments: this.detail.comments.filter((c) => c.id !== commentId),
            thread: {
              ...this.detail.thread,
              commentCount: Math.max(0, this.detail.thread.commentCount - 1),
            },
          };
        }
      },
      error: () => {},
    });
  }

  markSolution(commentId: number): void {
    if (!this.detail) return;
    this.forumService.markSolution(this.detail.thread.id, commentId).subscribe({
      next: () => {
        if (this.detail) {
          this.detail = {
            ...this.detail,
            comments: this.detail.comments.map((c) => ({
              ...c,
              isSolution: c.id === commentId,
            })),
          };
        }
      },
      error: () => {},
    });
  }

  deleteThread(): void {
    if (!this.detail) return;
    if (!confirm('Are you sure you want to delete this thread? This cannot be undone.')) return;
    const categorySlug = this.detail.thread.categorySlug;
    this.forumService.deleteThread(this.detail.thread.id).subscribe({
      next: () => {
        if (categorySlug) {
          this.router.navigate(['/community/category', categorySlug]);
        } else {
          this.router.navigate(['/community']);
        }
      },
      error: () => {},
    });
  }

  onAuthSuccess(user: ForumUser): void {
    this.showAuthModal = false;
    if (this.detail) {
      this.loadThread();
    }
  }

  formatDate(d: string): string {
    return new Date(d).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  isThreadOwner(): boolean {
    const user = this.forumAuthService.getUser();
    return user !== null && this.detail !== null && user.id === this.detail.thread.authorId;
  }
}
