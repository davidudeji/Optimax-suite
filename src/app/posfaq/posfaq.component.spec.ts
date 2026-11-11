import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosfaqComponent } from './posfaq.component';

describe('PosfaqComponent', () => {
  let component: PosfaqComponent;
  let fixture: ComponentFixture<PosfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PosfaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
