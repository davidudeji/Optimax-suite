import { Component } from '@angular/core';
import { ProductPageMotionDirective } from '../../product-page-motion.directive';

@Component({
  selector: 'app-pospage',
  templateUrl: './pospage.component.html',
  styleUrl: './pospage.component.css',
  hostDirectives: [ProductPageMotionDirective],
})
export class PospageComponent {
}
