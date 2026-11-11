import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogAuthService, AuthUser } from '../../services/blog-auth.service';
import { BlogService } from '../../services/blog.service';

const CATEGORY_COLORS: Record<string, string> = {
  ERP: '#2e6276',
  Finance: '#2e6276',
  'HR & Payroll': '#7c3aed',
  Technology: '#2EB270',
  Procurement: '#f97316',
  CRM: '#2EB270',
};

@Component({
  selector: 'app-blog-create',
  standalone: false,
  templateUrl: './blog-create.component.html',
})
export class BlogCreateComponent implements OnInit, AfterViewInit {
  @ViewChild('editorContent') editorEl!: ElementRef<HTMLDivElement>;
  @ViewChild('coverFileInput') coverFileInput!: ElementRef<HTMLInputElement>;

  user: AuthUser | null = null;

  title = '';
  excerpt = '';
  content = '';
  category = 'ERP';
  author = '';
  authorImage = '';
  imageUrl = '';
  imagePreview = '';
  imageAlt = '';
  readTime = '';
  imageError = '';

  categories = ['ERP', 'Finance', 'HR & Payroll', 'Technology', 'Procurement', 'CRM'];
  activeFormats: Record<string, boolean> = {};

  submitting = false;
  submitted = false;
  newSlug = '';
  previewMode = false;

  constructor(
    private auth: BlogAuthService,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser();
    if (this.user) {
      this.author = this.user.fullname;
      this.authorImage = this.user.profileImage || '';
    }
  }

  ngAfterViewInit(): void {
    document.addEventListener('selectionchange', () => this.refreshFormats());
  }

  get authorInitial(): string {
    return this.author ? this.author.charAt(0).toUpperCase() : '?';
  }

  // ── Rich text editor ──────────────────────────────────────────────────────

  format(command: string, value?: string): void {
    this.editorEl.nativeElement.focus();
    document.execCommand(command, false, value ?? undefined);
    this.syncContent();
    this.refreshFormats();
  }

  insertHeading(tag: 'H2' | 'H3'): void {
    this.editorEl.nativeElement.focus();
    document.execCommand('formatBlock', false, tag);
    this.syncContent();
    this.refreshFormats();
  }

  insertLink(): void {
    const url = prompt('Enter URL:');
    if (url) this.format('createLink', url);
  }

  insertImage(): void {
    const url = prompt('Enter image URL:');
    if (url) this.format('insertImage', url);
  }

  syncContent(): void {
    this.content = this.editorEl.nativeElement.innerHTML;
  }

  refreshFormats(): void {
    this.activeFormats = {
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      insertUnorderedList: document.queryCommandState('insertUnorderedList'),
      insertOrderedList: document.queryCommandState('insertOrderedList'),
    };
  }

  onEditorPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain') || '';
    document.execCommand('insertText', false, text);
    this.syncContent();
  }

  // ── Cover image ───────────────────────────────────────────────────────────

  triggerFilePicker(): void {
    this.coverFileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.imageError = '';

    if (!file.type.startsWith('image/')) {
      this.imageError = 'Please select an image file.';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.imageError = 'Image must be under 5 MB.';
      return;
    }

    this.compressImage(file, 1200, 0.82).then((dataUrl) => {
      this.imagePreview = dataUrl;
      this.imageUrl = dataUrl;
    });
  }

  clearImage(): void {
    this.imagePreview = '';
    this.imageUrl = '';
    this.coverFileInput.nativeElement.value = '';
  }

  private compressImage(file: File, maxWidth: number, quality: number): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const ratio = Math.min(maxWidth / img.width, 1);
          const canvas = document.createElement('canvas');
          canvas.width = Math.round(img.width * ratio);
          canvas.height = Math.round(img.height * ratio);
          canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  }

  // ── Preview ───────────────────────────────────────────────────────────────

  togglePreview(): void {
    this.syncContent();
    this.previewMode = !this.previewMode;
    if (!this.previewMode) {
      // Restore editor innerHTML after returning to edit mode
      setTimeout(() => {
        if (this.editorEl) this.editorEl.nativeElement.innerHTML = this.content;
      });
    }
  }

  get previewImage(): string {
    const fallback = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80';
    return this.imagePreview || this.imageUrl || fallback;
  }

  get previewDate(): string {
    return new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  get previewReadTime(): string {
    return this.readTime.trim() || this.estimateReadTime(this.content);
  }

  get previewCategoryColor(): string {
    return CATEGORY_COLORS[this.category] || '#2e6276';
  }

  // ── Submit ────────────────────────────────────────────────────────────────

  submit(): void {
    this.syncContent();
    if (!this.title.trim() || !this.excerpt.trim() || !this.content.trim()) return;

    this.submitting = true;
    const slug = this.blogService.slugify(this.title);
    const fallbackImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80';

    const token = this.auth.getCurrentUser()?.token || '';
    this.blogService.createPost({
      slug,
      title: this.title.trim(),
      excerpt: this.excerpt.trim(),
      content: this.content.trim(),
      category: this.category,
      categoryColor: CATEGORY_COLORS[this.category] || '#2e6276',
      author: this.author.trim() || 'OptimaX Team',
      authorInitial: this.authorInitial,
      authorColor: CATEGORY_COLORS[this.category] || '#2e6276',
      authorImage: this.authorImage || undefined,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: this.readTime.trim() || this.estimateReadTime(this.content),
      image: this.imageUrl.trim() || fallbackImage,
      imageAlt: this.imageAlt.trim() || this.title,
    }, token).subscribe((post) => {
      this.submitting = false;
      this.submitted = true;
      this.newSlug = post.slug;
    });
  }

  private estimateReadTime(html: string): string {
    const words = html.replace(/<[^>]+>/g, '').split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 200))} min read`;
  }

  viewPost(): void {
    this.router.navigate(['/blog', this.newSlug]);
  }

  goAdmin(): void {
    this.router.navigate(['/blog/admin']);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/blog']);
  }

  writeAnother(): void {
    this.title = '';
    this.excerpt = '';
    this.content = '';
    this.category = 'ERP';
    this.imageUrl = '';
    this.imagePreview = '';
    this.imageAlt = '';
    this.readTime = '';
    this.submitted = false;
    this.newSlug = '';
    setTimeout(() => {
      if (this.editorEl) this.editorEl.nativeElement.innerHTML = '';
    });
  }
}
