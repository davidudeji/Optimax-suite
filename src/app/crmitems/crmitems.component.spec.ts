import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMitemsComponent } from './crmitems.component';

describe('CRMitemsComponent', () => {
  let component: CRMitemsComponent;
  let fixture: ComponentFixture<CRMitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CRMitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CRMitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
