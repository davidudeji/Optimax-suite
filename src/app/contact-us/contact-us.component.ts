import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  number: string[];
  message: string;
  service: string[]; // Accepting array for services
  company: string;
  industry: string[];
  phone: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  isLoading: boolean = false;

  contactInfo: ContactForm = {
    firstName: '',
    lastName: '',
    email: '',
    number: [],
    message: '',
    service: [], // Empty array for multiple services
    company: '',
    industry: [],
    phone: '',
  };

  errorMessage: string = '';
  successMessage: string = '';

  servicesOption = [
    { options: 'Sales' },
    { options: 'HRM' },
    { options: 'Procurement' },
    { options: 'Inventory' },
    { options: 'POS' },
    { options: 'CRM' },
    { options: 'Account' },
    { options: 'Expense' },
    { options: 'Total Package' },
  ];

  industryOption = [
    { option: 'Aerospace' },
    { option: 'Agriculture' },
    { option: 'Automotive' },
    { option: 'Automotive' },
    { option: 'Biotechnology' },
    { option: 'Chemical' },
    { option: 'Construction' },
    { option: 'Education' },
    { option: 'Energy' },
    { option: 'Entertainment' },
    { option: 'Financial Services' },
    { option: 'Healthcare' },
    { option: 'Hospitality' },
    { option: 'Information Technology (IT)' },
    { option: 'Logistic and Transportation' },
    { option: 'Manufacturing' },
    { option: 'Mining' },
    { option: 'Non-Profit Organization NGOs' },
    { option: 'Real Estate' },
    { option: 'Retail' },
    { option: 'Telecommunication' },
  ];

  numberOptions = [
    { option: '1-10' },
    { option: '11-50' },
    { option: '51-200' },
    { option: '200+' },
  ];

  ngOnInit(): void {
    // Initialize EmailJS safely
    if (!emailjs) {
      console.error('EmailJS not loaded.');
    } else {
      emailjs.init('Re2BpbVdhrQmZchl4'); // Your EmailJS user ID
    }
  }

  clearState(): void {
    this.contactInfo = {
      firstName: '',
      lastName: '',
      email: '',
      number: [],
      message: '',
      service: [], // Empty array for multiple services
      company: '',
      industry: [],
      phone: '',
    };
  }

  validateForm(): boolean {
    const {
      firstName,
      lastName,
      email,
      number,
      message,
      service,
      company,
      industry,
      phone,
    } = this.contactInfo;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Number:', number);
    console.log('Message:', message);
    console.log('Service:', service);
    console.log('Company:', company);
    console.log('Industry:', industry);
    console.log('Phone:', phone);

    // Trim all input fields to remove extra spaces
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      number.length == 0 ||
      !message.trim() ||
      service.length === 0 || // Check if at least one service is selected
      !company.trim() ||
      industry.length === 0 ||
      !phone.trim()
    ) {
      this.errorMessage = 'Please fill in all fields.';
      console.log('Please fill in all fields');
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return false;
    }

    return true;
  }

  handleSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.validateForm()) {
      return;
    }

    this.isLoading = true;

    // Define templateParams to map the form data to EmailJS template fields
    const templateParams = {
      firstName: this.contactInfo.firstName,
      lastName: this.contactInfo.lastName,
      email: this.contactInfo.email,
      number: this.contactInfo.number,
      message: this.contactInfo.message,
      service: this.contactInfo.service.join(', '), // Convert array to a comma-separated string
      company: this.contactInfo.company,
      industry: this.contactInfo.industry.join(', '),
      phone: this.contactInfo.phone,
    };

    emailjs
      .send('service_5ie1h8n', 'template_8cyu3zm', templateParams)
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('Success:', result.text);
          this.successMessage = 'Message sent successfully!';
          this.clearState();
        },
        (error: any) => {
          console.error('EmailJS error:', error);
          this.errorMessage = 'Failed to send message. Please try again.';
        }
      )
      .finally(() => {
        this.isLoading = false;
      });
  }
}
