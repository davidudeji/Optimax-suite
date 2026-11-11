import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesitemComponent } from './resourcesitem.component';

describe('ResourcesitemComponent', () => {
  let component: ResourcesitemComponent;
  let fixture: ComponentFixture<ResourcesitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResourcesitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourcesitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
