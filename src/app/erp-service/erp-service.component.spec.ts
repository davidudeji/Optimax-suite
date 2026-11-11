import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERPServiceComponent } from './erp-service.component';

describe('ErpServiceComponent', () => {
  let component: ERPServiceComponent;
  let fixture: ComponentFixture<ERPServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERPServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERPServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
