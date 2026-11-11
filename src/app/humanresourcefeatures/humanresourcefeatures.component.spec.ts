import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresourcefeaturesComponent } from './humanresourcefeatures.component';

describe('HumanresourcefeaturesComponent', () => {
  let component: HumanresourcefeaturesComponent;
  let fixture: ComponentFixture<HumanresourcefeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HumanresourcefeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumanresourcefeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
