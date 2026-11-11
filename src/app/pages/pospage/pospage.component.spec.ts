import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PospageComponent } from './pospage.component';

describe('PospageComponent', () => {
  let component: PospageComponent;
  let fixture: ComponentFixture<PospageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PospageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PospageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
