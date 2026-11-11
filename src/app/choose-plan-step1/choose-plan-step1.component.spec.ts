import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlanStep1Component } from './choose-plan-step1.component';

describe('ChoosePlanStep1Component', () => {
  let component: ChoosePlanStep1Component;
  let fixture: ComponentFixture<ChoosePlanStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoosePlanStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosePlanStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
