import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositemsComponent } from './positems.component';

describe('PositemsComponent', () => {
  let component: PositemsComponent;
  let fixture: ComponentFixture<PositemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PositemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
