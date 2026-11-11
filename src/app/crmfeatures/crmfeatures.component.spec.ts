import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMfeaturesComponent } from './crmfeatures.component';

describe('CRMfeaturesComponent', () => {
  let component: CRMfeaturesComponent;
  let fixture: ComponentFixture<CRMfeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CRMfeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CRMfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
