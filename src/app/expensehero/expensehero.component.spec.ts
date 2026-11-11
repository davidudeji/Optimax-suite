import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseheroComponent } from './expensehero.component';

describe('ExpenseheroComponent', () => {
  let component: ExpenseheroComponent;
  let fixture: ComponentFixture<ExpenseheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseheroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
