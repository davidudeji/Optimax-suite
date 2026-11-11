import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryfaqComponent } from './inventoryfaq.component';

describe('InventoryfaqComponent', () => {
  let component: InventoryfaqComponent;
  let fixture: ComponentFixture<InventoryfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryfaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
