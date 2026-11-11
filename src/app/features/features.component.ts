import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  videoSource: SafeResourceUrl;
  isPlaying = false;
  currentTime = 0;
  videoUrl: string = 'https://www.w3schools.com/html/mov_bbb.mp4';

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
}
