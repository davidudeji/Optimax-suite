import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumAuthService } from '../../services/forum-auth.service';

@Component({
  selector: 'app-forum-verify',
  standalone: false,
  templateUrl: './forum-verify.component.html',
})
export class ForumVerifyComponent implements OnInit {
  state: 'verifying' | 'success' | 'error' = 'verifying';
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forumAuthService: ForumAuthService
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (!token) {
      this.state = 'error';
      this.errorMessage = 'No verification token found in the link.';
      return;
    }
    this.forumAuthService.verifyEmail(token).subscribe({
      next: () => {
        this.state = 'success';
      },
      error: (err) => {
        this.state = 'error';
        this.errorMessage = err.error?.message || 'Verification failed. The link may have expired.';
      },
    });
  }

  goToCommunity(): void {
    this.router.navigate(['/community']);
  }
}
