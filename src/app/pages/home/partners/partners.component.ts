import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: false,
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
})
export class PartnersComponent {
  readonly partners = [
    'Dangote Group',
    'MTN Nigeria',
    'Zenith Bank',
    'Access Bank',
    'Flour Mills',
    'BUA Group',
    'Guinness Nigeria',
    'Indomie',
    'First Bank',
    'GT Bank',
    'Shoprite',
    'Chicken Republic',
    'Tantalizers',
    'Sundry Foods',
    'PZ Cussons',
    'Honeywell',
    'Oando',
    'Seplat',
    'Julius Berger',
    'ARM Holdings',
  ];
}
