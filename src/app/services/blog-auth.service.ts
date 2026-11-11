import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthUser {
  username: string;
  fullname: string;
  email: string;
  token: string;
  roles: string[];
  profileImage?: string;
}

const STORAGE_KEY = 'optimax_blog_auth';
const BASE_URL = 'https://be.optimaxsuites.com';

@Injectable({ providedIn: 'root' })
export class BlogAuthService {
  private currentUser: AuthUser | null = null;

  constructor(private http: HttpClient) {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed: AuthUser = JSON.parse(stored);
        // Clear stale sessions where fullname was never resolved (fell back to username)
        if (parsed.fullname && parsed.fullname !== parsed.username) {
          this.currentUser = parsed;
        } else {
          sessionStorage.removeItem(STORAGE_KEY);
        }
      } catch { this.currentUser = null; }
    }
  }

  isAuthenticated(): boolean { return this.currentUser !== null; }

  isAdmin(): boolean {
    return this.currentUser?.roles?.includes('ROLE_ADMIN') ?? false;
  }

  getCurrentUser(): AuthUser | null { return this.currentUser; }

  login(credentials: LoginCredentials): Observable<{ success: boolean; error?: string }> {
    const payload = {
      username: credentials.username,
      password: credentials.password,
      project: 'ERP',
      clientId: 'optimax-erp-web',
      appVersion: '2026.05.30',
    };

    return this.http
      .post<any>(`${BASE_URL}/x/api/v2/auth/signin`, payload, {
        headers: new HttpHeaders({ 'X-Tenant-ID': 'optimax' }),
        withCredentials: true,
      })
      .pipe(
        switchMap((res) => {
          const token = res.accessToken || res.token || '';
          const username = res.username || credentials.username;
          const email = res.email || '';
          const userId = res.id;

          return this.fetchProfile(userId, username, token).pipe(
            map((profile) => {
              const user: AuthUser = {
                username,
                fullname: profile.fullname,
                profileImage: profile.profileImage,
                email,
                token,
                roles: Array.isArray(res.roles) ? res.roles : [],
              };
              this.currentUser = user;
              sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
              return { success: true };
            })
          );
        }),
        catchError((err) => {
          const status = err?.status;
          let msg = 'Login failed. Please try again.';
          if (status === 400 || status === 401 || status === 500) msg = 'Invalid username or password.';
          else if (status === 0) msg = 'Cannot reach the server. Check your internet connection.';
          else if (err?.error?.message) msg = err.error.message;
          return of({ success: false, error: msg });
        })
      );
  }

  private fetchProfile(userId: number, username: string, token: string): Observable<{ fullname: string; profileImage?: string }> {
    const headers = new HttpHeaders({ 'X-Tenant-ID': 'optimax', Authorization: `Bearer ${token}` });

    // 1. Try UPI by userId (has fullname + profileImage)
    return this.http
      .get<any>(`${BASE_URL}/x/api/v2/us/ur/get/user/primary/info/${userId}`, { headers })
      .pipe(
        map((res) => {
          const upi = res?.value ?? res;
          const image = upi?.profilePic?.url || upi?.profileImage || undefined;
          return upi?.fullname ? { fullname: upi.fullname, profileImage: image } : null;
        }),
        catchError(() => of(null)),
        switchMap((profile) => {
          if (profile) return of(profile);

          // 2. Fall back to UserInformation (firstname + lastname + profileImage)
          return this.http
            .get<any>(`${BASE_URL}/x/api/v2/us/ur/get/user/info/${userId}`, { headers })
            .pipe(
              map((res) => {
                const info = res?.value ?? res;
                const name = ((info?.firstname || '') + ' ' + (info?.lastname || '')).trim();
                const image = info?.profilePic?.url || info?.profileImage || undefined;
                return name ? { fullname: name, profileImage: image } : null;
              }),
              catchError(() => of(null))
            );
        }),
        map((profile) => profile ?? { fullname: username })
      );
  }

  logout(): void {
    this.currentUser = null;
    sessionStorage.removeItem(STORAGE_KEY);
  }
}
