import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanNavigationComponent } from './plan-navigation.component';

describe('PlanNavigationComponent', () => {
  let component: PlanNavigationComponent;
  let fixture: ComponentFixture<PlanNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanNavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
