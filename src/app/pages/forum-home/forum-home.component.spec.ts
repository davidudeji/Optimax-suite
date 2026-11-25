import { Router } from '@angular/router';
import { ForumHomeComponent } from './forum-home.component';
import { ForumService } from '../../services/forum.service';
import { ForumAuthService } from '../../services/forum-auth.service';

describe('ForumHomeComponent', () => {
  it('shows a clear fallback for an invalid thread timestamp', () => {
    const authService = jasmine.createSpyObj<ForumAuthService>('ForumAuthService', ['isLoggedIn', 'logout']);
    const forumService = jasmine.createSpyObj<ForumService>('ForumService', ['getCategories', 'getThreads']);
    const router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    const component = new ForumHomeComponent(authService, forumService, router);

    expect(component.formatRelativeTime('not-a-date')).toBe('Date unavailable');
  });
});
