import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForumService, ForumCategory, ForumThread } from '../../services/forum.service';
import { ForumAuthService } from '../../services/forum-auth.service';

@Component({
  selector: 'app-forum-category',
  standalone: false,
  templateUrl: './forum-category.component.html',
})
export class ForumCategoryComponent implements OnInit, OnDestroy {
  category: ForumCategory | null = null;
  threads: ForumThread[] = [];
  loading = true;
  page = 0;
  totalPages = 1;

  private subs: Subscription[] = [];

  constructor(
    private forumService: ForumService,
    private forumAuthService: ForumAuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const sub = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';
      this.loading = true;
      this.category = null;
      this.threads = [];
      this.page = 0;

      this.forumService.getCategories().subscribe({
        next: (cats) => {
          this.category = cats.find((c) => c.slug === slug) || null;
          if (this.category) {
            this.loadThreads();
          } else {
            this.loading = false;
          }
        },
        error: () => {
          this.loading = false;
        },
      });
    });
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

  loadThreads(): void {
    if (!this.category) return;
    this.loading = true;
    this.forumService.getThreads(this.category.id, this.page, 20).subscribe({
      next: (result) => {
        this.threads = result.content;
        this.totalPages = result.totalPages;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  goToPage(p: number): void {
    this.page = p;
    this.loadThreads();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToNewThread(): void {
    this.router.navigate(['/community/new']);
  }

  formatRelativeTime(dateStr: string): string {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }
}
