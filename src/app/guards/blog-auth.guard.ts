import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BlogAuthService } from '../services/blog-auth.service';

@Injectable({ providedIn: 'root' })
export class BlogAuthGuard implements CanActivate {
  constructor(private auth: BlogAuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) return true;
    this.router.navigate(['/blog/admin/login']);
    return false;
  }
}
