import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-marquee',
  templateUrl: './logo-marquee.component.html',
  styleUrls: ['./logo-marquee.component.css'],
})
export class LogoMarqueeComponent {
  logos = [
    { src: 'assets/images/logo.png', alt: 'Logo 1' },
    { src: 'assets/images/CAC.png', alt: 'Logo 2' },
    { src: 'assets/images/logo_two.png', alt: 'Logo 3' },
    { src: 'assets/images/logo_three.png', alt: 'Logo 1' },
    { src: 'assets/images/logo_four.png', alt: 'Logo 2' },
    { src: 'assets/images/logo.png', alt: 'Logo 1' },
    { src: 'assets/images/CAC.png', alt: 'Logo 2' },
    { src: 'assets/images/logo_two.png', alt: 'Logo 3' },
  ];
}
