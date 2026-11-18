import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens dropdowns on hover and closes them on pointer leave', () => {
    component.onDropdownEnter('products');
    expect(component.activeDropdown).toBe('products');

    component.onDropdownLeave('products');
    expect(component.activeDropdown).toBeNull();
  });

  it('keeps a clicked dropdown open after pointer leave and toggles it closed on click', () => {
    component.toggleDropdown('cloud');
    component.onDropdownLeave('cloud');
    expect(component.activeDropdown).toBe('cloud');

    component.toggleDropdown('cloud');
    expect(component.activeDropdown).toBeNull();
  });

  it('switches to a newly clicked dropdown', () => {
    component.toggleDropdown('products');
    component.toggleDropdown('industries');

    expect(component.activeDropdown).toBe('industries');
  });
});
