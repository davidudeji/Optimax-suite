import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, switchMap, of, distinctUntilChanged } from 'rxjs';
import { OnboardingService } from '../../onboarding.service';

@Component({
  selector: 'app-domain-step',
  templateUrl: './domain-step.component.html',
  styleUrl: './domain-step.component.scss'
})
export class DomainStepComponent implements OnInit {
  @Input() plan: 'saas' | 'dedicated' | 'self-hosted' = 'saas';
  @Output() completed = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();


// @Output() domainSelected = new EventEmitter<string>();
  domainForm: FormGroup;
  domainAvailable: boolean | null = null;
  loading = false;

  constructor(private fb: FormBuilder, private onboardingService: OnboardingService) {
this.loading = true;
    this.domainForm = this.fb.group({
      domain: ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9-]+$'),
        Validators.minLength(3)
      ]]
    });

      const business = this.onboardingService.business();
      const domain = this.onboardingService.domain()
      console.log(domain)
       if (business && !domain ) {
          const sanitized = business.companyName
            .split(' ')[0]
            .toLowerCase()
            .replace(/[^a-z0-9-]/g, '');
          this.domainForm.patchValue({ domain: sanitized });
        }else {
          this.domainForm.patchValue({ domain: domain });
        }

    this.domainForm.get('domain')?.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(value => {
          if (this.domainForm.get('domain')?.valid) {
            this.loading = true;
            return this.onboardingService.checkAvailability(value);
          }
          return of(null);
        })
      )
      .subscribe(res => {
        this.loading = false;
        this.domainAvailable = res;
      });

    // const domainValue = this.domainForm.get('domain')?.value;

    //   if (!domainValue) {
    //     this.loading = false 
    //     return
    //   }

    //   if (this.domainForm.get('domain')?.valid) {
    //     this.onboardingService.checkAvailability(domainValue)
    //       .subscribe(res => {
    //         this.loading = false;
    //         this.domainAvailable = res;
    //       });

    //   }
  
  }

  // submit() {
  //   if (this.domainForm.valid && this.domainAvailable) {
  //     this.domainSelected.emit(this.domainForm.value.domain);
  //   }
  // }

  ngOnInit() {
    if (this.plan === 'self-hosted') {
      // Self-hosted: accept any domain/IP format, field is optional
      this.domainForm.get('domain')?.setValidators([
        Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9.\\-]*$|^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$')
      ]);
      this.domainForm.get('domain')?.updateValueAndValidity();
      this.domainAvailable = true;
      this.loading = false;
      return;
    }

    this.loading = true;
    const domainValue = this.domainForm.get('domain')?.value;

    if (!domainValue) {
      this.loading = false;
      return;
    }

    if (this.domainForm.get('domain')?.valid) {
      this.onboardingService.checkAvailability(domainValue).subscribe(res => {
        this.loading = false;
        this.domainAvailable = res;
      });
    }
  }

  onChange(e: any) {
    this.onboardingService.domain.set(e.target.value as any);
  }

  skip() {
    this.completed.emit();
  }

  submit() {
    if (this.plan === 'self-hosted') {
      this.onboardingService.domain.set(this.domainForm.value.domain as any);
      this.completed.emit();
      return;
    }
    if (this.domainForm.valid && this.domainAvailable) {
      this.onboardingService.domain.set(this.domainForm.value.domain as any);
      this.completed.emit();
    }
  }

  goBack(){
    this.back.emit();
  }

  get domain() {
    return this.domainForm.get('domain');
  }

}
