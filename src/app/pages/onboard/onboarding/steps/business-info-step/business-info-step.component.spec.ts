import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInfoStepComponent } from './business-info-step.component';

describe('BusinessInfoStepComponent', () => {
  let component: BusinessInfoStepComponent;
  let fixture: ComponentFixture<BusinessInfoStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessInfoStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessInfoStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
