import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminStepComponent } from './super-admin-step.component';

describe('SuperAdminStepComponent', () => {
  let component: SuperAdminStepComponent;
  let fixture: ComponentFixture<SuperAdminStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperAdminStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperAdminStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
