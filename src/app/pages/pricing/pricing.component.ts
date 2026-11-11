import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  activeTab: 'pos' | 'hr' | 'accounting' = 'pos';
  isYearly = false;

  // ── Base monthly prices — ONLY edit these ──────────────────────────────────
  private readonly BASE = {
    pos:        { bronze: 15000,  silver: 25000,  gold: 45000,  platinum: 80000  },
    hr:         { bronze: 15000,  silver: 25000,  gold: 35000,  platinum: 60000  },
    accounting: { bronze: 10000,  silver: 20000,  gold: 35000,  platinum: 60000  },
  };

  private readonly YEARLY_DISCOUNT = 0.10; // 10% off when billed annually

  switchTab(tab: 'pos' | 'hr' | 'accounting') { this.activeTab = tab; }
  toggleBilling() { this.isYearly = !this.isYearly; }

  // ── Derived helpers ────────────────────────────────────────────────────────

  /** Effective display price per month */
  price(product: keyof typeof this.BASE, tier: 'bronze' | 'silver' | 'gold' | 'platinum'): string {
    const base = this.BASE[product][tier];
    const effective = this.isYearly ? Math.round(base * (1 - this.YEARLY_DISCOUNT)) : base;
    return effective.toLocaleString('en-NG');
  }

  /** Billing note below the price */
  note(product: keyof typeof this.BASE, tier: 'bronze' | 'silver' | 'gold' | 'platinum'): string {
    const base = this.BASE[product][tier];
    const annualFull  = (base * 12).toLocaleString('en-NG');
    const annualSaved = Math.round(base * 12 * (1 - this.YEARLY_DISCOUNT)).toLocaleString('en-NG');
    const savedAmt    = Math.round(base * 12 * this.YEARLY_DISCOUNT).toLocaleString('en-NG');
    return this.isYearly
      ? `Billed as ₦${annualSaved} / year — save ₦${savedAmt}`
      : `Or ₦${annualFull} billed annually`;
  }
}