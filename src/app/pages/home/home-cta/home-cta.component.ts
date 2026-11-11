import { Component } from '@angular/core';

@Component({
  selector: 'app-home-cta',
  standalone: false,
  templateUrl: './home-cta.component.html',
})
export class HomeCTAComponent {
  currentYear = new Date().getFullYear();
}
