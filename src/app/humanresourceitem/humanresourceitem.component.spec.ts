import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresourceitemComponent } from './humanresourceitem.component';

describe('HumanresourceitemComponent', () => {
  let component: HumanresourceitemComponent;
  let fixture: ComponentFixture<HumanresourceitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HumanresourceitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumanresourceitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
