import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpPriceComponent } from './erp-price.component';

describe('ErpPriceComponent', () => {
  let component: ErpPriceComponent;
  let fixture: ComponentFixture<ErpPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErpPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
