import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainStepComponent } from './domain-step.component';

describe('DomainStepComponent', () => {
  let component: DomainStepComponent;
  let fixture: ComponentFixture<DomainStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomainStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomainStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
