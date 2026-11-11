import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateFeatureComponent } from './animate-feature.component';

describe('AnimateFeatureComponent', () => {
  let component: AnimateFeatureComponent;
  let fixture: ComponentFixture<AnimateFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimateFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimateFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
