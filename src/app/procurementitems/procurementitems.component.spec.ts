import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementitemsComponent } from './procurementitems.component';

describe('ProcurementitemsComponent', () => {
  let component: ProcurementitemsComponent;
  let fixture: ComponentFixture<ProcurementitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcurementitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcurementitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
