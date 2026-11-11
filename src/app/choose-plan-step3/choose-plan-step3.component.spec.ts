import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlanStep3Component } from './choose-plan-step3.component';

describe('ChoosePlanStep3Component', () => {
  let component: ChoosePlanStep3Component;
  let fixture: ComponentFixture<ChoosePlanStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoosePlanStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosePlanStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
