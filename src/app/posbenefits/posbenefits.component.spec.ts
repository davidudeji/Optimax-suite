import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosbenefitsComponent } from './posbenefits.component';

describe('PosbenefitsComponent', () => {
  let component: PosbenefitsComponent;
  let fixture: ComponentFixture<PosbenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosbenefitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosbenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
