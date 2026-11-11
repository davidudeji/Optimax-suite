import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmodulesComponent } from './allmodules.component';

describe('AllmodulesComponent', () => {
  let component: AllmodulesComponent;
  let fixture: ComponentFixture<AllmodulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllmodulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
