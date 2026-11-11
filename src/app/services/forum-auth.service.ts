import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface ForumUser {
  id: number;
  email: string;
  name: string;
  avatarUrl?: string;
  token?: string;
  isVerified?: boolean;
}

const API = 'https://be.optimaxsuites.com/x/api/v2/ai';
const STORAGE_KEY = 'optimax_forum_user';

@Injectable({ providedIn: 'root' })
export class ForumAuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<ForumUser> {
    return this.http
      .post<ForumUser>(`${API}/community/auth/login`, { email, password }, { headers: this.publicHeaders() })
      .pipe(tap((user) => this.saveUser(user)));
  }

  signup(email: string, name: string, password: string): Observable<ForumUser> {
    return this.http
      .post<ForumUser>(`${API}/community/auth/signup`, { email, name, password, captchaToken: '' }, { headers: this.publicHeaders() })
      .pipe(tap((user) => this.saveUser(user)));
  }

  verifyEmail(token: string): Observable<ForumUser> {
    return this.http
      .get<ForumUser>(`${API}/community/auth/verify`, {
        params: { token },
        headers: this.publicHeaders(),
      })
      .pipe(tap((user) => this.saveUser(user)));
  }

  resendVerification(email: string): Observable<void> {
    return this.http.post<void>(`${API}/community/auth/resend-verification`, { email }, {
      headers: this.publicHeaders(),
    });
  }

  googleAuth(credential: string): Observable<ForumUser> {
    return this.http
      .post<ForumUser>(`${API}/community/auth/google`, { credential }, { headers: this.publicHeaders() })
      .pipe(tap((user) => this.saveUser(user)));
  }

  logout(): void {
    const token = this.getToken();
    if (token) {
      this.http
        .post<void>(`${API}/community/auth/logout`, {}, { headers: this.forumHeaders() })
        .subscribe({ error: () => {} });
    }
    localStorage.removeItem(STORAGE_KEY);
  }

  getUser(): ForumUser | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  getToken(): string | null {
    return this.getUser()?.token ?? null;
  }

  forumHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-Tenant-ID': 'optimax',
      'X-Forum-Token': this.getToken() || '',
    });
  }

  publicHeaders(): HttpHeaders {
    return new HttpHeaders({ 'X-Tenant-ID': 'optimax' });
  }

  private saveUser(user: ForumUser): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }
}
