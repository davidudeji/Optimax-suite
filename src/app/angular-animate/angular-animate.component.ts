import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-angular-animate',
  templateUrl: './angular-animate.component.html',
  styleUrls: ['./angular-animate.component.css']
})
export class AngularAnimateComponent implements AfterViewInit {
  @ViewChild('leftImage') leftImage!: ElementRef;
  @ViewChild('rightWriteup') rightWriteup!: ElementRef;

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const triggerPoint = window.innerHeight / 1.3;

    const leftImagePos = this.leftImage.nativeElement.getBoundingClientRect().top;
    const rightWriteupPos = this.rightWriteup.nativeElement.getBoundingClientRect().top;

    if (leftImagePos < triggerPoint) {
      this.leftImage.nativeElement.classList.add('slide-in-left');
    }

    if (rightWriteupPos < triggerPoint) {
      this.rightWriteup.nativeElement.classList.add('slide-in-right');
    }
  }
}
