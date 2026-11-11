import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SubscribeComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  videoSource: SafeResourceUrl;
  isPlaying = false;
  duration = 0;
  currentTime = 0;
  email: string = '';
  videoUrl: string = 'https://www.w3schools.com/html/mov_bbb.mp4';

  // Newsletter subscription properties
  isSubscribing = false;
  subscriptionSuccess = false;
  subscriptionError = '';

  constructor(private sanitizer: DomSanitizer) {
    this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoUrl
    );
  }

  ngOnInit() {
    setInterval(() => {
      if (this.videoPlayer && this.videoPlayer.nativeElement) {
        this.currentTime = this.videoPlayer.nativeElement.currentTime;
      }
    }, 1000);
  }

  updateEmail(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
    // Reset subscription states when email is changed
    this.subscriptionSuccess = false;
    this.subscriptionError = '';
  }

  onSubmit() {
    if (!this.isValidEmail(this.email)) {
      this.subscriptionError = 'Please enter a valid email address.';
      return;
    }

    this.isSubscribing = true;
    this.subscriptionError = '';

    // Simulating an API call with setTimeout
    setTimeout(() => {
      // TODO: Replace this with actual API call to subscribe
      if (Math.random() > 0.5) {
        // Simulate success/failure randomly
        this.subscriptionSuccess = true;
        this.email = '';
      } else {
        this.subscriptionError = 'An error occurred. Please try again later.';
      }
      this.isSubscribing = false;
    }, 1500);
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
