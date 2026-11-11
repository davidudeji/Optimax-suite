import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService, ForumCategory } from '../../services/forum.service';
import { ForumAuthService } from '../../services/forum-auth.service';

@Component({
  selector: 'app-forum-new-thread',
  standalone: false,
  templateUrl: './forum-new-thread.component.html',
})
export class ForumNewThreadComponent implements OnInit {
  categories: ForumCategory[] = [];
  title = '';
  content = '';
  categoryId: number | null = null;
  loading = false;
  error = '';

  constructor(
    private forumService: ForumService,
    private forumAuthService: ForumAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.forumAuthService.isLoggedIn()) {
      this.router.navigate(['/community']);
      return;
    }
    this.forumService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
      },
      error: () => {},
    });
  }

  submit(): void {
    if (!this.title.trim() || !this.content.trim() || this.categoryId === null) {
      this.error = 'Please fill in all fields before submitting.';
      return;
    }
    this.error = '';
    this.loading = true;
    this.forumService.createThread(this.title.trim(), this.content.trim(), this.categoryId).subscribe({
      next: (thread) => {
        this.loading = false;
        this.router.navigate(['/community/thread', thread.slug]);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || 'Could not create thread. Please try again.';
      },
    });
  }

  getCategoryColor(categoryId: number | null): string {
    if (categoryId === null) return '#6b7280';
    const cat = this.categories.find((c) => c.id === categoryId);
    return cat?.color || '#2e6276';
  }

  onCategoryChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.categoryId = value ? Number(value) : null;
  }
}
