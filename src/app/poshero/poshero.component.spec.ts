import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosheroComponent } from './poshero.component';

describe('PosheroComponent', () => {
  let component: PosheroComponent;
  let fixture: ComponentFixture<PosheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosheroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
