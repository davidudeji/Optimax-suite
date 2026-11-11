import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresourcefaqComponent } from './humanresourcefaq.component';

describe('HumanresourcefaqComponent', () => {
  let component: HumanresourcefaqComponent;
  let fixture: ComponentFixture<HumanresourcefaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HumanresourcefaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumanresourcefaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
