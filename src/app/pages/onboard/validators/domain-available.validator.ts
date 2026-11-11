import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ApiService } from '../core/api.service';

export function domainAvailableValidator(api: ApiService, baseDomain = 'erp.example.com'): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const sub = String(control.value || '').toLowerCase().replace(/[^a-z0-9-]/g, '');
    if (!sub) return Promise.resolve(null);
    const full = `${sub}.${baseDomain}`;
    return api.checkDomainAvailable(full).pipe(
      map(res => (res.available ? null : { domainTaken: true }))
    ).toPromise();
  };
}