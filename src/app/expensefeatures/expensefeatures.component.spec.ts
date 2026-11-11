import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensefeaturesComponent } from './expensefeatures.component';

describe('ExpensefeaturesComponent', () => {
  let component: ExpensefeaturesComponent;
  let fixture: ComponentFixture<ExpensefeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensefeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpensefeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
