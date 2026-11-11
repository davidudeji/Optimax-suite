import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMcoreComponent } from './crmcore.component';

describe('CRMcoreComponent', () => {
  let component: CRMcoreComponent;
  let fixture: ComponentFixture<CRMcoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CRMcoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CRMcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
