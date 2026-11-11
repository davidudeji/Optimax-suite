import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogAuthService } from '../../services/blog-auth.service';

@Component({
  selector: 'app-blog-login',
  standalone: false,
  templateUrl: './blog-login.component.html',
})
export class BlogLoginComponent {
  username = '';
  password = '';
  loading = false;
  error = '';
  showPassword = false;

  constructor(private auth: BlogAuthService, private router: Router) {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/blog/admin/new']);
    }
  }

  login(): void {
    if (!this.username || !this.password) {
      this.error = 'Please enter your username and password.';
      return;
    }
    this.error = '';
    this.loading = true;
    this.auth.login({ username: this.username, password: this.password }).subscribe((res) => {
      this.loading = false;
      if (res.success) {
        this.router.navigate(['/blog/admin/new']);
      } else {
        this.error = res.error || 'Login failed. Please try again.';
      }
    });
  }
}
