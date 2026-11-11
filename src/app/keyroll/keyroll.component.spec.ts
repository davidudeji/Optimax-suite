import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyrollComponent } from './keyroll.component';

describe('KeyrollComponent', () => {
  let component: KeyrollComponent;
  let fixture: ComponentFixture<KeyrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
