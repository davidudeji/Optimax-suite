import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountitemsComponent } from './accountitems.component';

describe('AccountitemsComponent', () => {
  let component: AccountitemsComponent;
  let fixture: ComponentFixture<AccountitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
