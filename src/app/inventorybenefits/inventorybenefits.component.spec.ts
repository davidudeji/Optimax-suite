import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorybenefitsComponent } from './inventorybenefits.component';

describe('InventorybenefitsComponent', () => {
  let component: InventorybenefitsComponent;
  let fixture: ComponentFixture<InventorybenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventorybenefitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventorybenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
