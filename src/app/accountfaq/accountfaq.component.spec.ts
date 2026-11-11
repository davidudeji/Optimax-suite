import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountfaqComponent } from './accountfaq.component';

describe('AccountfaqComponent', () => {
  let component: AccountfaqComponent;
  let fixture: ComponentFixture<AccountfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountfaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
