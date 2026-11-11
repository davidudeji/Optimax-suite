import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QComponent } from './q.component';

describe('QComponent', () => {
  let component: QComponent;
  let fixture: ComponentFixture<QComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
