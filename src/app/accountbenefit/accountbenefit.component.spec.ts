import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountbenefitComponent } from './accountbenefit.component';

describe('AccountbenefitComponent', () => {
  let component: AccountbenefitComponent;
  let fixture: ComponentFixture<AccountbenefitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountbenefitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountbenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
