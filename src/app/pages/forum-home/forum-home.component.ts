import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService, ForumCategory, ForumThread } from '../../services/forum.service';
import { ForumAuthService, ForumUser } from '../../services/forum-auth.service';

@Component({
  selector: 'app-forum-home',
  standalone: false,
  templateUrl: './forum-home.component.html',
})
export class ForumHomeComponent implements OnInit {
  categories: ForumCategory[] = [];
  recentThreads: ForumThread[] = [];
  loading = true;
  showAuthModal = false;
  authModalMode: 'login' | 'signup' = 'login';

  constructor(
    public forumAuthService: ForumAuthService,
    private forumService: ForumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.forumService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
      },
      error: () => {},
    });

    this.forumService.getThreads(undefined, 0, 10).subscribe({
      next: (page) => {
        this.recentThreads = page.content;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  getCategoryIcon(icon: string): string {
    const map: { [key: string]: string } = {
      lightbulb: '💡',
      bug: '🐛',
      sparkles: '✨',
      megaphone: '📢',
      'chat-bubble': '💬',
    };
    return map[icon] || '💬';
  }

  goToNewThread(): void {
    if (!this.forumAuthService.isLoggedIn()) {
      this.authModalMode = 'signup';
      this.showAuthModal = true;
      return;
    }
    this.router.navigate(['/community/new']);
  }

  openLogin(): void {
    this.authModalMode = 'login';
    this.showAuthModal = true;
  }

  openSignup(): void {
    this.authModalMode = 'signup';
    this.showAuthModal = true;
  }

  logout(): void {
    this.forumAuthService.logout();
  }

  onAuthSuccess(user: ForumUser): void {
    this.showAuthModal = false;
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
}
