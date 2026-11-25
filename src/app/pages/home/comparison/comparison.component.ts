import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

type SupportLevel = 'supported' | 'partial' | 'unavailable';

interface ComparisonRow {
  feature: string;
  values: SupportLevel[];
}

@Component({
  selector: 'app-comparison',
  standalone: false,
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css'],
})
export class ComparisonComponent implements AfterViewInit, OnDestroy {
  @ViewChild('comparisonHeading') private comparisonHeading?: ElementRef<HTMLElement>;

  private headingObserver?: IntersectionObserver;

  readonly competitors = [
    'OptimaX',
    'SAP Business One',
    'Odoo',
    'QuickBooks',
    'Sage 200',
  ];

  readonly supportSymbols: Record<SupportLevel, string> = {
    supported: '✓',
    partial: '—',
    unavailable: '✕',
  };

  readonly supportDescriptions: Record<SupportLevel, string> = {
    supported: 'Fully supported',
    partial: 'Partial support or add-on',
    unavailable: 'Not available',
  };

  readonly comparisonRows: ComparisonRow[] = [
    { feature: 'Africa-first localisation', values: ['supported', 'partial', 'partial', 'unavailable', 'partial'] },
    { feature: 'Built-in POS + ERP', values: ['supported', 'partial', 'supported', 'unavailable', 'partial'] },
    { feature: 'Multi-currency (NGN, GHS, KES)', values: ['supported', 'supported', 'supported', 'unavailable', 'supported'] },
    { feature: 'Affordable SME pricing', values: ['supported', 'unavailable', 'supported', 'supported', 'partial'] },
    { feature: 'HR + Payroll included', values: ['supported', 'partial', 'supported', 'unavailable', 'supported'] },
    { feature: 'Full offline support', values: ['supported', 'partial', 'partial', 'partial', 'partial'] },
    { feature: '24/7 African time-zone support', values: ['supported', 'unavailable', 'unavailable', 'unavailable', 'unavailable'] },
    { feature: 'Fast 2-week implementation', values: ['supported', 'unavailable', 'partial', 'supported', 'partial'] },
    { feature: 'No per-module licensing', values: ['supported', 'unavailable', 'unavailable', 'supported', 'unavailable'] },
    { feature: 'Custom workflows', values: ['supported', 'supported', 'supported', 'unavailable', 'supported'] },
  ];

  ngAfterViewInit(): void {
    const heading = this.comparisonHeading?.nativeElement;
    if (!heading || typeof IntersectionObserver === 'undefined') {
      return;
    }

    heading.classList.add('comparison-heading--reveal');
    this.headingObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add('is-visible');
          this.headingObserver?.unobserve(heading);
        }
      },
      { threshold: 0.2 },
    );
    this.headingObserver.observe(heading);
  }

  ngOnDestroy(): void {
    this.headingObserver?.disconnect();
  }
}
