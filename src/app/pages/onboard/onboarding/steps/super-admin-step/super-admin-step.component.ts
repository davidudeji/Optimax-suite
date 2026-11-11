import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessInfo, DomainInfo, OnboardingService } from '../../onboarding.service';

@Component({
  selector: 'app-super-admin-step',
  templateUrl: './super-admin-step.component.html',
  styleUrl: './super-admin-step.component.scss'
})
export class SuperAdminStepComponent {
  @Output() completed = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
  authForm!: FormGroup;
  errorMessage = '';
  isLoading = false;
  showPassword = false;

  message = '';

  passwordValidation = {
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumbers: false,
    hasSpecialChar: false
  };

  business: BusinessInfo | null = {} as BusinessInfo
  domain: any =""

  constructor(private fb: FormBuilder, private http: HttpClient, private onboardingService: OnboardingService){
     this.authForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
          username: ['', [
            Validators.required,
            Validators.pattern('^[a-z0-9-]+$'),
            Validators.minLength(3)
          ]],
          confirmPassword: ['', [Validators.required]],

          password: [null, [Validators.required, this.strongPasswordValidator]],

        },
        { validators: this.passwordMatchValidator });

      this.authForm.get('password')?.valueChanges.subscribe(password => {
      this.updatePasswordValidation(password || '');
    });

    this.business = this.onboardingService.business();
    this.domain = this.onboardingService.domain();


    console.log(this.business, this.domain)
  }

  passwordMatchValidator(form: FormGroup) {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
}


   private updatePasswordValidation(password: string) {
    this.passwordValidation.minLength = password.length >= 8;
    this.passwordValidation.hasUpperCase = /[A-Z]/.test(password);
    this.passwordValidation.hasLowerCase = /[a-z]/.test(password);
    this.passwordValidation.hasNumbers = /[0-9]/.test(password);
    this.passwordValidation.hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  }

strongPasswordValidator(control: any) {
  const value = control.value || '';

  const valid =
    value.length >= 8 &&
    /[A-Z]/.test(value) &&
    /[a-z]/.test(value) &&
    /[0-9]/.test(value) &&
    /[^A-Za-z0-9]/.test(value);

  return valid ? null : { weakPassword: true };
}

  submit(){
     this.onboardingService.superAdmin.set(this.authForm.value as any);
    this.isLoading = true
     const headers = new HttpHeaders({
    'X-Tenant-ID': this.domain?.toLowerCase() || ''
    });
    const body = {
        username: this.authForm.value.username,
        email: this.authForm.value.email,
        password: this.authForm.value.password,
        apiKey: 'ApiKey 644667b7c973660f0d1e8dd3dcf20de1',
        project: 'ERP',
        upi: {
          fullname: this.business?.fullName,
          email: this.business?.email,
          phoneNumber: this.business?.phoneNumber,
          username: this.authForm.value.username,
          city: this.business?.city,
          state: this.business?.state,
          country: this.business?.country,
          profileImage: this.business?.profileImage || '',
          address: this.business?.address,
          clientType: this.business?.clientType,
          companyName: this.business?.companyName,
          industry: this.business?.industry,
          bio: this.business?.bio,
          postalCode: this.business?.postalCode,
          currency: this.business?.currency,
          language: this.business?.language,
          timeZone: this.business?.timeZone,
          domain: this.domain?.toLowerCase() || ''
        }
      }

    this.http
      .post('https://prod.optimaxsuites.com/x/api/v2/auth/signup', body, {headers})
      .subscribe({
        next: (response: any) => {
          this.isLoading = false; 
          // this.message = `Successfully signed up as ${this.contact.Username}`;
          this.onboardingService.isSuccessful();
        },
        error: (error) => {
          this.isLoading = false;
          this.message = `Sign Up failed: ${
            error.error.message || error.message
          }`;
        },
      });

    // console.log(body)
    //       this.onboardingService.isSuccessful();

  }

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword
  }

   goBack(){
    this.back.emit();
  }

  get allPasswordConditionsMet() {
  const v = this.passwordValidation;
  return (
    v.minLength &&
    v.hasUpperCase &&
    v.hasLowerCase &&
    v.hasNumbers &&
    v.hasSpecialChar
  );
}

}

