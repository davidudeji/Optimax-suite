import { Component } from '@angular/core';
import { ProductPageMotionDirective } from '../../product-page-motion.directive';

@Component({
  selector: 'app-hrpage',
  templateUrl: './hrpage.component.html',
  styleUrl: './hrpage.component.css',
  hostDirectives: [ProductPageMotionDirective],
})
export class HrpageComponent {
}
