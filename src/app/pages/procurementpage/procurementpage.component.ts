import { Component } from '@angular/core';
import { ProductPageMotionDirective } from '../../product-page-motion.directive';

@Component({
  selector: 'app-procurementpage',
  templateUrl: './procurementpage.component.html',
  hostDirectives: [ProductPageMotionDirective],
})
export class ProcurementpageComponent {}
