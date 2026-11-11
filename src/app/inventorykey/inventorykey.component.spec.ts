import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorykeyComponent } from './inventorykey.component';

describe('InventorykeyComponent', () => {
  let component: InventorykeyComponent;
  let fixture: ComponentFixture<InventorykeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventorykeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventorykeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
