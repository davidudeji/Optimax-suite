import { Component } from '@angular/core';
import { ProductPageMotionDirective } from '../../product-page-motion.directive';

@Component({
  selector: 'app-accountingpage',
  templateUrl: './accountingpage.component.html',
  hostDirectives: [ProductPageMotionDirective],
})
export class AccountingpageComponent {}
