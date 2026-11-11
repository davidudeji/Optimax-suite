import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-features',
  standalone: false,
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent implements OnInit {
  private readonly EMAIL_WEBHOOK =
    'https://automation.optimaxsuites.com/webhook/735f4d81-3f63-4390-9b03-098be2a31469';

  // TODO: swap to your boss's email once you've confirmed it works
  private readonly RECEIVER_EMAIL = 'davidkindness10@gmail.com';

  readonly currentYear = new Date().getFullYear();
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = 'Something went wrong. Please try again or email us directly.';
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      businessName: [''],
      industry: [''],
      employeeCount: [''],
      branchCount: [''],
      interestedPos: [false],
      interestedHr: [false],
      interestedAccounting: [false],
      interestedFullErp: [false],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) return;

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const v = this.contactForm.value;

    // Collect ticked products into a readable string
    const products =
      [
        v.interestedPos ? 'OptimaXPOS' : '',
        v.interestedHr ? 'OptimaX HR' : '',
        v.interestedAccounting ? 'Accounting' : '',
        v.interestedFullErp ? 'Full ERP Suite' : '',
      ]
        .filter(Boolean)
        .join(', ') || 'Not specified';

    const emailBody = `
      <div style="font-family:sans-serif;font-size:14px;color:#333;line-height:1.7;max-width:560px">
        <h2 style="color:#2e6276;margin:0 0 4px">New Inquiry — OptimaX Website</h2>
        <hr style="border:none;border-top:1px solid #e0e0e0;margin:0 0 20px"/>

        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <tr><td style="padding:6px 0;color:#888;width:140px">Name</td>
              <td style="padding:6px 0;font-weight:600">${v.firstName} ${v.lastName}</td></tr>
          <tr><td style="padding:6px 0;color:#888">Email</td>
              <td style="padding:6px 0">${v.email}</td></tr>
          <tr><td style="padding:6px 0;color:#888">Phone</td>
              <td style="padding:6px 0">${v.phone || '—'}</td></tr>
          <tr><td style="padding:6px 0;color:#888">Business</td>
              <td style="padding:6px 0">${v.businessName || '—'}</td></tr>
          <tr><td style="padding:6px 0;color:#888">Industry</td>
              <td style="padding:6px 0">${v.industry || '—'}</td></tr>
          <tr><td style="padding:6px 0;color:#888">Employees</td>
              <td style="padding:6px 0">${v.employeeCount || '—'}</td></tr>
          <tr><td style="padding:6px 0;color:#888">Branches</td>
              <td style="padding:6px 0">${v.branchCount || '—'}</td></tr>
          <tr><td style="padding:6px 0;color:#888">Interested in</td>
              <td style="padding:6px 0">${products}</td></tr>
        </table>

        <hr style="border:none;border-top:1px solid #e0e0e0;margin:20px 0"/>
        <p style="margin:0 0 8px;color:#888;font-size:13px">Message</p>
        <p style="margin:0;background:#f7f7f7;padding:14px 16px;border-radius:8px;font-size:13px">${v.message}</p>
      </div>
    `;

    const payload = {
      name: `${v.firstName} ${v.lastName}`,
      recieverEmail: this.RECEIVER_EMAIL,
      subject: `New Inquiry: ${v.firstName} ${v.lastName} — OptimaX`,
      body: emailBody,
    };

    this.http.post<any>(this.EMAIL_WEBHOOK, payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitError = true;
        this.errorMessage =
          err?.error?.message ||
          'Something went wrong. Please try again or email us directly.';
        console.error('Contact form webhook error:', err);
      },
    });
  }
}
