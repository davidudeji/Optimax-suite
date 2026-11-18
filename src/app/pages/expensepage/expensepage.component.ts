import { Component } from '@angular/core';
import { ProductPageMotionDirective } from '../../product-page-motion.directive';

@Component({
  selector: 'app-expensepage',
  templateUrl: './expensepage.component.html',
  hostDirectives: [ProductPageMotionDirective],
})
export class ExpensepageComponent {}
