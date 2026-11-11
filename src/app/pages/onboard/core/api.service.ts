import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { delay, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  // Mock: check if tenant domain is available
  checkDomainAvailable(domain: string) {
    // Replace with: return this.http.get(`/api/tenants/check-domain`, { params: { domain } });
    const taken = ['acme', 'demo', 'test'];
    const sub = domain.split('.')[0];
    const available = !taken.includes(sub);
    return of({ available }).pipe(delay(400));
  }

  // Mock: create tenant + bootstrap modules
  createTenant(payload: any) {
    // Replace with POST `/api/tenants`
    return of({ success: true, tenantId: 't_123', ...payload }).pipe(delay(600));
  }

  // Mock: create the first Super Admin user
  createSuperAdmin(tenantId: string, user: any) {
    // Replace with POST `/api/tenants/{id}/users/super-admin`
    return of({ success: true, userId: 'u_1', role: 'super-admin' }).pipe(delay(600));
  }
}