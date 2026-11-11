import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresourcesheroComponent } from './humanresourceshero.component';

describe('HumanresourcesheroComponent', () => {
  let component: HumanresourcesheroComponent;
  let fixture: ComponentFixture<HumanresourcesheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HumanresourcesheroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumanresourcesheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
