import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMheroComponent } from './crmhero.component';

describe('CRMheroComponent', () => {
  let component: CRMheroComponent;
  let fixture: ComponentFixture<CRMheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CRMheroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CRMheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
