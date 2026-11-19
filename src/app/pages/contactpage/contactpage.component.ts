import { Component } from '@angular/core';

interface LeadForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  module: string;
  companySize: string;
  industry: string;
  message: string;
  website: string;
}

@Component({
  selector: 'app-contactpage',
  standalone: false,
  templateUrl: './contactpage.component.html',
})
export class ContactpageComponent {
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  lead: LeadForm = {
    name: '',
    email: '',
    company: '',
    phone: '',
    module: '',
    companySize: '',
    industry: '',
    message:
      'Hello, I would like to request a demo of OptimaX for our business.',
    website: '',
  };

  modules = [
    'Full ERP suite',
    'Accounting and finance',
    'HR and payroll',
    'Inventory',
    'Point of sale',
    'CRM',
    'Procurement',
    'Expense management',
    'Other',
  ];

  companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees',
  ];

  industries = [
    'Retail',
    'Hospitality',
    'Healthcare',
    'Manufacturing',
    'Logistics and transportation',
    'Financial services',
    'Education',
    'Real estate',
    'Agriculture',
    'Technology',
    'Other',
  ];

  validateForm(): boolean {
    if (!this.lead.name.trim() || !this.lead.email.trim() || !this.lead.company.trim()) {
      this.errorMessage = 'Please add your name, work email, and company.';
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.lead.email.trim())) {
      this.errorMessage = 'Please enter a valid work email address.';
      return false;
    }

    if (!this.lead.module || !this.lead.companySize || !this.lead.industry) {
      this.errorMessage =
        'Please select a module, company size, and industry.';
      return false;
    }

    if (!this.lead.message.trim()) {
      this.errorMessage = 'Please add a short message about your needs.';
      return false;
    }

    if (this.lead.phone.trim()) {
      const phonePattern = /^[+\d][\d\s().-]{7,20}$/;
      if (!phonePattern.test(this.lead.phone.trim())) {
        this.errorMessage = 'Please enter a valid Nigerian or international phone number.';
        return false;
      }
    }

    return true;
  }

  handleSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.lead.website) {
      this.successMessage = 'Thank you. Your request has been received.';
      return;
    }

    if (!this.validateForm()) {
      return;
    }

    this.isLoading = true;

    const formData = new FormData();
    formData.append('access_key', 'a83a9d54-4c0d-44d8-8bc0-93314b2b0e6c');
    formData.append('subject', 'New OptimaX demo request');
    formData.append('from_name', 'OptimaX website');
    formData.append('botcheck', this.lead.website);
    formData.append('name', this.lead.name);
    formData.append('email', this.lead.email);
    formData.append('company', this.lead.company);
    formData.append('phone', this.lead.phone || 'Not provided');
    formData.append('module', this.lead.module);
    formData.append('company_size', this.lead.companySize);
    formData.append('industry', this.lead.industry);
    formData.append('message', this.lead.message);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok || !result.success) {
          throw new Error(result.message || 'Submission failed');
        }

        this.successMessage =
          'Thank you. Our team has received your request and will respond within one business day.';
        this.resetForm();
      })
      .catch((error: unknown) => {
        console.error('Lead request failed:', error);
        this.errorMessage =
          'We could not send your request. Please email sales@optimaxerp.com or try again.';
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  private resetForm(): void {
    this.lead = {
      name: '',
      email: '',
      company: '',
      phone: '',
      module: '',
      companySize: '',
      industry: '',
      message:
        'Hello, I would like to request a demo of OptimaX for our business.',
      website: '',
    };
  }
}
