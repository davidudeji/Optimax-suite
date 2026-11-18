import { Component } from '@angular/core';
import { ProductPageMotionDirective } from '../../product-page-motion.directive';

@Component({
  selector: 'app-crmpage',
  templateUrl: './crmpage.component.html',
  hostDirectives: [ProductPageMotionDirective],
})
export class CrmpageComponent {}
