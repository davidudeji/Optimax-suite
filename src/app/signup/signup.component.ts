import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  isSignUp = true; // Toggle between Sign Up and Sign In
  contact = {
    Username: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
  };
  message = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }

  toggleMode(): void {
    this.isSignUp = !this.isSignUp;
    this.message = ''; // Clear any existing messages
  }

  handleSubmit(): void {
    if (this.isSignUp) {
      this.signUp();
    } else {
      this.signIn();
    }
  }

  private signUp(): void {
    if (this.contact.Password !== this.contact.ConfirmPassword) {
      this.message = 'Passwords do not match.';
      return;
    }

     const headers = new HttpHeaders({
    'X-Tenant-ID': 'ApiKey fefb4b28df82025b62362bce051d41a2',
    });
    this.http
      .post('https://prod.optimaxsuites.com/x/api/v2/auth/signup', {
        username: this.contact.Username,
        email: this.contact.Email,
        password: this.contact.Password,
        apiKey: 'ApiKey 644667b7c973660f0d1e8dd3dcf20de1',
        project: 'ERP',
      })
      .subscribe({
        next: (response: any) => {
          this.message = `Successfully signed up as ${this.contact.Username}`;
        },
        error: (error) => {
          this.message = `Sign Up failed: ${
            error.error.message || error.message
          }`;
        },
      });
  }

  private signIn(): void {
    this.http
      .post('https://prod.optimaxsuites.com/x/api/v2/auth/signin', {
        username: this.contact.Username,
        password: this.contact.Password,
        apiKey: 'ApiKey 644667b7c973660f0d1e8dd3dcf20de1',
        project: 'ERP',
      })
      .subscribe({
        next: (response: any) => {
          this.message = `Welcome back, ${this.contact.Username}`;
        },
        error: (error) => {
          this.message = `Sign In failed: ${
            error.error.message || error.message
          }`;
        },
      });
  }
}
