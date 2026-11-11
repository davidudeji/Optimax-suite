import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseitemsComponent } from './expenseitems.component';

describe('ExpenseitemsComponent', () => {
  let component: ExpenseitemsComponent;
  let fixture: ComponentFixture<ExpenseitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
