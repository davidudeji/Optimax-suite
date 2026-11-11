import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogPost, BlogService } from '../../services/blog.service';
import { BlogAuthService, AuthUser } from '../../services/blog-auth.service';
import { ForumService, ForumCategory } from '../../services/forum.service';
import { ForumAuthService, ForumUser } from '../../services/forum-auth.service';

const ADMIN_API = 'https://be.optimaxsuites.com/x/api/v2/ai';

const PRESET_COLORS = [
  '#2e6276', '#2EB270', '#7c3aed', '#ef4444',
  '#f97316', '#0ea5e9', '#d97706', '#db2777',
];

@Component({
  selector: 'app-blog-admin',
  standalone: false,
  templateUrl: './blog-admin.component.html',
})
export class BlogAdminComponent implements OnInit, OnDestroy {
  user: AuthUser | null = null;
  posts: BlogPost[] = [];
  confirmDeleteId: string | null = null;
  deleting = false;

  searchQuery = '';
  filterCategory = 'All';
  categories = ['All', 'ERP', 'Finance', 'HR & Payroll', 'Technology', 'Procurement', 'CRM'];

  // Tabs
  activeTab: 'posts' | 'categories' = 'posts';

  // Forum category management
  forumCategories: ForumCategory[] = [];
  loadingCategories = false;
  savingCategory = false;
  deletingCategoryId: number | null = null;
  categoryError = '';
  showNewCatForm = false;
  newCat = { name: '', description: '', slug: '', color: '#2e6276', icon: 'chat-bubble', sortOrder: 10 };
  presetColors = PRESET_COLORS;
  showForumAuthModal = false;
  forumAuthMode: 'login' | 'signup' = 'login';

  private sub?: Subscription;

  constructor(
    private blogService: BlogService,
    public auth: BlogAuthService,
    public forumAuth: ForumAuthService,
    private router: Router,
    private http: HttpClient,
    private forumService: ForumService
  ) {}

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser();
    this.sub = this.blogService.posts$.subscribe((posts) => (this.posts = posts));
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  get filteredPosts(): BlogPost[] {
    return this.posts.filter((p) => {
      const matchCat = this.filterCategory === 'All' || p.category === this.filterCategory;
      const matchSearch =
        !this.searchQuery ||
        p.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.author.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }

  get totalPosts(): number { return this.posts.length; }
  get publishedPosts(): number { return this.posts.filter((p) => !this.blogService.isInitialPost(p.id)).length; }
  isDefault(id: string): boolean { return this.blogService.isInitialPost(id); }

  requestDelete(id: string): void { this.confirmDeleteId = id; }
  cancelDelete(): void { this.confirmDeleteId = null; }

  confirmDelete(): void {
    if (!this.confirmDeleteId) return;
    this.deleting = true;
    const token = this.user?.token || '';
    this.blogService.deletePost(this.confirmDeleteId, token).subscribe({
      next: () => {
        this.deleting = false;
        this.confirmDeleteId = null;
      },
      error: () => {
        this.deleting = false;
        this.confirmDeleteId = null;
      },
    });
  }

  copyLink(slug: string): void {
    const url = `${window.location.origin}/blog/${slug}`;
    navigator.clipboard.writeText(url);
  }

  viewPost(slug: string): void { this.router.navigate(['/blog', slug]); }
  writeNew(): void { this.router.navigate(['/blog/admin/new']); }
  logout(): void { this.auth.logout(); this.router.navigate(['/blog']); }

  getCategoryDot(category: string): string {
    const map: Record<string, string> = {
      ERP: '#2e6276', Finance: '#2e6276', 'HR & Payroll': '#7c3aed',
      Technology: '#2EB270', Procurement: '#f97316', CRM: '#2EB270',
    };
    return map[category] || '#9ca3af';
  }

  // ── Tab switching ──────────────────────────────────────────────────

  switchTab(tab: 'posts' | 'categories'): void {
    this.activeTab = tab;
    if (tab === 'categories' && this.forumCategories.length === 0) {
      this.loadForumCategories();
    }
  }

  // ── Forum category management ──────────────────────────────────────

  loadForumCategories(): void {
    this.loadingCategories = true;
    this.forumService.getCategories().subscribe({
      next: (cats) => {
        this.forumCategories = cats;
        this.loadingCategories = false;
      },
      error: () => { this.loadingCategories = false; },
    });
  }

  autoSlug(): void {
    this.newCat.slug = this.newCat.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private forumHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-Tenant-ID': 'optimax',
      'X-Forum-Token': this.forumAuth.getToken() || '',
    });
  }

  createForumCategory(): void {
    if (!this.forumAuth.isLoggedIn()) {
      this.forumAuthMode = 'login';
      this.showForumAuthModal = true;
      return;
    }
    this.categoryError = '';
    if (!this.newCat.name.trim()) { this.categoryError = 'Name is required.'; return; }
    if (!this.newCat.slug.trim()) { this.autoSlug(); }
    this.savingCategory = true;
    this.http.post<ForumCategory>(`${ADMIN_API}/community/admin/categories`, this.newCat, { headers: this.forumHeaders() }).subscribe({
      next: (cat) => {
        this.forumCategories = [...this.forumCategories, cat];
        this.newCat = { name: '', description: '', slug: '', color: '#2e6276', icon: 'chat-bubble', sortOrder: 10 };
        this.showNewCatForm = false;
        this.savingCategory = false;
      },
      error: (err) => {
        this.categoryError = err.error?.message || 'Failed to create category.';
        this.savingCategory = false;
      },
    });
  }

  deleteForumCategory(id: number): void {
    if (!this.forumAuth.isLoggedIn()) {
      this.forumAuthMode = 'login';
      this.showForumAuthModal = true;
      return;
    }
    if (!confirm('Delete this category? Threads inside it will remain but lose their category.')) return;
    this.deletingCategoryId = id;
    this.http.delete<void>(`${ADMIN_API}/community/admin/categories/${id}`, { headers: this.forumHeaders() }).subscribe({
      next: () => {
        this.forumCategories = this.forumCategories.filter((c) => c.id !== id);
        this.deletingCategoryId = null;
      },
      error: () => { this.deletingCategoryId = null; },
    });
  }

  onForumAuthSuccess(user: ForumUser): void {
    this.showForumAuthModal = false;
  }
}
