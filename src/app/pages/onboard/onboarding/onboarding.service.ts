import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

export interface BusinessInfo {
  fullName: string;
  username: string;
  profileImage?: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode?: string;
  industry: string;
  companyName: string;
  clientType: string;
  bio: string;
  currency: string;
  language: string;
  timeZone: string;

}

export interface DomainInfo { domain: string }

export interface SuperAdminInfo { firstName: string; lastName: string; email: string; password: string; }

@Injectable({ providedIn: 'root' })
export class OnboardingService {
  business = signal<BusinessInfo | null>(null);
  domain = signal<DomainInfo | null>(null);
  superAdmin = signal<SuperAdminInfo | null>(null);
  tenantId = signal<string | null>(null);
  success = signal<boolean>(false);

  isComplete = computed(() => !!(this.business() && this.domain() && this.superAdmin() && this.tenantId()));
  constructor(private http: HttpClient) {}
  reset() {
    this.business.set(null);
    this.domain.set(null);
    this.superAdmin.set(null);
    this.tenantId.set(null);
  }

  checkAvailability(domain: string): Observable<boolean> {
    const url = `https://prod.optimaxsuites.com/x/api/v2/us/ur/get/tenant/domain/${domain}`;

     if (domain && domain.trim() === 'optimax') {
       return of(false);
     }

    return this.http.get<any>(url).pipe(
      map(res => {
        return res && res.id!==null ? false : true;
      }),
      catchError(() => of(true))
    );
  }



  isSuccessful() {
     this.success.set(true)
  }
}

