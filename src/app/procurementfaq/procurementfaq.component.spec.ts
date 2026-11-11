import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementfaqComponent } from './procurementfaq.component';

describe('ProcurementfaqComponent', () => {
  let component: ProcurementfaqComponent;
  let fixture: ComponentFixture<ProcurementfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcurementfaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcurementfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
