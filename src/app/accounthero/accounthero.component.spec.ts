import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountheroComponent } from './accounthero.component';

describe('AccountheroComponent', () => {
  let component: AccountheroComponent;
  let fixture: ComponentFixture<AccountheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountheroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
