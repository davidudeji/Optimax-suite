import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent {
  logos = [
    { src: 'assets/images/logo.png', alt: 'Logo 1' },
    { src: 'assets/images/CAC.png', alt: 'Logo 2' },
    { src: 'assets/images/logo_two.png', alt: 'Logo 3' },
    { src: 'assets/images/logo_three.png', alt: 'Logo 1' },
    { src: 'assets/images/logo_four.png', alt: 'Logo 2' },
    { src: 'assets/images/logo.png', alt: 'Logo 1' },
    { src: 'assets/images/CAC.png', alt: 'Logo 2' },
    { src: 'assets/images/logo_two.png', alt: 'Logo 3' },
    // { src: 'assets/images/logo_five.jpg', alt: 'Logo 3' },
  ];
}
