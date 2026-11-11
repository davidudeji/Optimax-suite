import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorybackComponent } from './inventoryback.component';

describe('InventorybackComponent', () => {
  let component: InventorybackComponent;
  let fixture: ComponentFixture<InventorybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventorybackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventorybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
