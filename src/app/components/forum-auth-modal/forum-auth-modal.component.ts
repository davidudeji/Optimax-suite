import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ForumAuthService, ForumUser } from '../../services/forum-auth.service';

@Component({
  selector: 'app-forum-auth-modal',
  standalone: false,
  templateUrl: './forum-auth-modal.component.html',
})
export class ForumAuthModalComponent implements OnInit {
  @Input() mode: 'login' | 'signup' = 'login';
  @Output() close = new EventEmitter<void>();
  @Output() authSuccess = new EventEmitter<ForumUser>();

  email = '';
  name = '';
  password = '';
  showPassword = false;
  loading = false;
  error = '';
  signupDone = false;
  resendLoading = false;
  resendSent = false;

  constructor(private forumAuthService: ForumAuthService) {}

  ngOnInit(): void {
    (window as any)['handleGoogleCredential'] = (response: any) => {
      this.onGoogleCredential(response.credential);
    };
    if (!document.getElementById('google-gsi-script')) {
      const script = document.createElement('script');
      script.id = 'google-gsi-script';
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  submit(): void {
    this.error = '';
    this.loading = true;
    if (this.mode === 'login') {
      this.forumAuthService.login(this.email, this.password).subscribe({
        next: (user) => {
          this.loading = false;
          this.authSuccess.emit(user);
        },
        error: (err) => {
          this.loading = false;
          this.error = err.error?.message || 'Invalid email or password';
        },
      });
    } else {
      this.forumAuthService.signup(this.email, this.name, this.password).subscribe({
        next: (user) => {
          this.loading = false;
          this.signupDone = true;
          this.authSuccess.emit(user);
        },
        error: (err) => {
          this.loading = false;
          this.error = err.error?.message || 'Could not create account';
        },
      });
    }
  }

  resendVerification(): void {
    if (this.resendLoading || this.resendSent) return;
    this.resendLoading = true;
    this.forumAuthService.resendVerification(this.email).subscribe({
      next: () => {
        this.resendLoading = false;
        this.resendSent = true;
      },
      error: () => {
        this.resendLoading = false;
        this.resendSent = true;
      },
    });
  }

  onGoogleCredential(credential: string): void {
    this.loading = true;
    this.error = '';
    this.forumAuthService.googleAuth(credential).subscribe({
      next: (user) => {
        this.loading = false;
        this.authSuccess.emit(user);
      },
      error: () => {
        this.loading = false;
        this.error = 'Google sign-in failed. Try again.';
      },
    });
  }

  switchMode(): void {
    this.mode = this.mode === 'login' ? 'signup' : 'login';
    this.error = '';
    this.signupDone = false;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
