import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlanStep4Component } from './choose-plan-step4.component';

describe('ChoosePlanStep4Component', () => {
  let component: ChoosePlanStep4Component;
  let fixture: ComponentFixture<ChoosePlanStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoosePlanStep4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosePlanStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
