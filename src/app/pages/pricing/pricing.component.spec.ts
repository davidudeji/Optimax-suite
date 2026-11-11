import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { PricingComponent } from './pricing.component';

describe('PricingComponent', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingComponent],
      imports: [CommonModule, FormsModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculates custom pricing with module and additional-user charges', () => {
    component.toggleModule('POS');
    component.updateCustomUsers(7);

    expect(component.getSelectedModuleTotal()).toBe(35000);
    expect(component.getAdditionalUserCharge()).toBe(10000);
    expect(component.getCustomMonthlyTotal()).toBe(95000);
    expect(component.getCustomAnnualTotal()).toBe(1140000);
  });

  it('enforces a positive whole-number user count', () => {
    component.updateCustomUsers(0);
    expect(component.customUsers).toBe(1);
    expect(component.getAdditionalUserCharge()).toBe(0);

    component.updateCustomUsers(6.8);
    expect(component.customUsers).toBe(6);
    expect(component.getAdditionalUserCharge()).toBe(5000);
  });

  it('uses the authoritative subscription prices for both billing cycles', () => {
    const starterPlan = component.plans.find((plan) => plan.id === 'starter')!;
    const growthPlan = component.plans.find((plan) => plan.id === 'growth')!;

    expect(component.getPlanPrice(starterPlan)).toBe('204,000');
    expect(component.getPlanPrice(growthPlan)).toBe('516,000');
    component.billingCycle = 'annual';
    expect(component.getPlanPrice(starterPlan)).toBe('170,000');
    expect(component.getPlanPrice(growthPlan)).toBe('430,000');
  });
});
