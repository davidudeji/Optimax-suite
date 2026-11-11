import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlanStep2Component } from './choose-plan-step2.component';

describe('ChoosePlanStep2Component', () => {
  let component: ChoosePlanStep2Component;
  let fixture: ComponentFixture<ChoosePlanStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoosePlanStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosePlanStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
