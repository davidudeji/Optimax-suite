import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogPost, BlogService } from '../../services/blog.service';
import { BlogAuthService } from '../../services/blog-auth.service';
import { ForumService } from '../../services/forum.service';
import { SocialShareService } from '../../services/social-share.service';

const PAGE_SIZE = 6;

@Component({
  selector: 'app-blogpage',
  standalone: false,
  templateUrl: './blogpage.component.html',
})
export class BlogpageComponent implements OnInit, OnDestroy {
  allPosts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  displayedPosts: BlogPost[] = [];
  engagementMap: { [id: string]: { likeCount: number; commentCount: number } } = {};

  engagement(postId: string): { likeCount: number; commentCount: number } {
    return this.engagementMap[postId] ?? { likeCount: 0, commentCount: 0 };
  }

  activeCategory = 'All';
  categories = ['All', 'ERP', 'Finance', 'HR & Payroll', 'Technology'];
  page = 1;

  private sub?: Subscription;

  /** postId currently showing an "Image saved / Opening share..." toast, if any */
  shareToastPostId: string | null = null;
  shareToastMessage = '';

  constructor(
    public auth: BlogAuthService,
    private blogService: BlogService,
    private forumService: ForumService,
    public share: SocialShareService
  ) {}

  ngOnInit(): void {
    this.sub = this.blogService.posts$.subscribe((posts) => {
      this.allPosts = posts;
      this.applyFilter(this.activeCategory);
    });
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  applyFilter(category: string): void {
    this.activeCategory = category;
    this.page = 1;
    this.filteredPosts = category === 'All'
      ? this.allPosts
      : this.allPosts.filter((p) => p.category === category);
    this.displayedPosts = this.filteredPosts.slice(0, PAGE_SIZE);
    this.fetchEngagement(this.displayedPosts);
  }

  loadMore(): void {
    this.page++;
    const next = this.filteredPosts.slice(0, this.page * PAGE_SIZE);
    const newPosts = next.filter(p => !this.engagementMap[p.id]);
    this.displayedPosts = next;
    this.fetchEngagement(newPosts);
  }

  private fetchEngagement(posts: BlogPost[]): void {
    posts.forEach(post => {
      this.forumService.getBlogEngagement(post.id).subscribe({
        next: (eng) => { this.engagementMap[post.id] = eng; },
        error: () => { this.engagementMap[post.id] = { likeCount: 0, commentCount: 0 }; }
      });
    });
  }

  get hasMore(): boolean {
    return this.displayedPosts.length < this.filteredPosts.length;
  }

  async shareOnInstagram(post: BlogPost): Promise<void> {
    const result = await this.share.shareToInstagram(post);
    this.shareToastMessage = result === 'shared'
      ? 'Opening share sheet…'
      : 'Caption copied — open Instagram and paste it in';
    this.shareToastPostId = post.id;
    setTimeout(() => {
      if (this.shareToastPostId === post.id) this.shareToastPostId = null;
    }, 4500);
  }
}
