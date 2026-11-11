import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementheroComponent } from './procurementhero.component';

describe('ProcurementheroComponent', () => {
  let component: ProcurementheroComponent;
  let fixture: ComponentFixture<ProcurementheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcurementheroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcurementheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
