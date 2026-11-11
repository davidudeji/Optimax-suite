import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { OnboardingService } from '../../onboarding.service';

interface GeoData {
  countries: { name: string; isoCode: string }[];
  stateMap:  Record<string, { name: string; isoCode: string }[]>;
}

// cityData shape: { [stateIsoCode]: string[] }
type CityData = Record<string, string[]>;

@Component({
  selector: 'app-business-info-step',
  templateUrl: './business-info-step.component.html',
  styleUrl: './business-info-step.component.scss'
})
export class BusinessInfoStepComponent implements OnInit, OnDestroy {
  @Output() completed = new EventEmitter<void>();

  defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3jhpAFYpzxx39DRuXIYxNPXc0zI5F6IiMQ&s';

  countries: { name: string; isoCode: string }[]         = [];
  states:    { name: string; isoCode: string }[]         = [];
  cities:    string[]                                     = [];

  private stateMap:    Record<string, { name: string; isoCode: string }[]> = {};
  private cityData:    CityData  = {};   // cities for the currently selected country
  private cityCache:   Record<string, CityData> = {}; // cache so we don't re-fetch

  geoLoading  = true;
  cityLoading = false;

  industries: { id: number; name: string }[] = [
    { id: 1,  name: 'Retail' },
    { id: 2,  name: 'Food & Beverage' },
    { id: 3,  name: 'Pharmacy & Health' },
    { id: 4,  name: 'Hospitality' },
    { id: 5,  name: 'Beauty & Personal Care' },
    { id: 6,  name: 'Automotive' },
    { id: 7,  name: 'Groceries & Food Stores' },
    { id: 8,  name: 'Entertainment & Events' },
    { id: 9,  name: 'Health & Fitness' },
    { id: 10, name: 'Fashion' },
    { id: 11, name: 'Electronics & Gadgets' },
    { id: 12, name: 'Construction & Hardware' },
    { id: 13, name: 'Education' },
    { id: 14, name: 'Home & Garden' },
    { id: 15, name: 'Arts & Crafts' },
    { id: 16, name: 'Wholesale Distribution' },
  ];

  currencies: { code: string; label: string }[] = [
    { code: 'NGN', label: 'Naira (₦)' },
    { code: 'USD', label: 'US Dollar ($)' },
    { code: 'EUR', label: 'Euro (€)' },
    { code: 'GBP', label: 'Pound Sterling (£)' },
  ];

  languages: string[] = ['English', 'Yoruba', 'Igbo', 'Hausa', 'French'];

  timeZones: { value: string; label: string }[] = [
    { value: 'Africa/Lagos',     label: 'Africa/Lagos (GMT+1)' },
    { value: 'UTC',              label: 'UTC' },
    { value: 'Africa/Accra',     label: 'Africa/Accra (GMT+0)' },
    { value: 'America/New_York', label: 'New York (GMT-5)' },
  ];

  form = this.fb.group({
    fullName:     [''],
    username:     [''],
    profileImage: [''],
    email:        ['', [Validators.required, Validators.email]],
    phoneNumber:  ['', [Validators.required, Validators.pattern(/^(?:0\d{10}|\+?[1-9]\d{9,14})$/)]],
    address:      ['', Validators.required],
    country:      ['', Validators.required],
    state:        ['', Validators.required],
    city:         ['', Validators.required],
    postalCode:   [''],
    industry:     ['', Validators.required],
    companyName:  ['', Validators.required],
    clientType:   ['', Validators.required],
    bio:          ['', Validators.required],
    currency:     ['', Validators.required],
    language:     ['', Validators.required],
    timeZone:     ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private ob: OnboardingService
  ) {
    // Constructor stays lean — no library calls, just form init + patch.
    const business = this.ob.business();
    if (business) {
      this.form.patchValue({ ...business } as any);
    }
  }

  ngOnInit(): void {
    // Load countries + states from a 218 KB asset file via HttpClient.
    // This defers all JSON parsing to after Angular bootstraps, avoiding
    // the Safari "Maximum call stack exceeded" crash that occurs when the
    // 8 MB country-state-city bundle is parsed synchronously at startup.
    this.http.get<GeoData>('assets/geo-data.json').subscribe({
      next: (data) => {
        this.countries  = data.countries;
        this.stateMap   = data.stateMap;
        this.geoLoading = false;

        // Restore cascading dropdowns for previously saved data
        const business = this.ob.business();
        if (business?.country) {
          const country = this.countries.find(c => c.name === business.country);
          if (country) {
            this.states = this.stateMap[country.isoCode] ?? [];
            // Lazily load saved country's cities too
            this.loadCitiesForCountry(country.isoCode, () => {
              if (business.state) {
                const state = this.states.find(s => s.name === business.state);
                if (state) {
                  this.cities = this.cityData[state.isoCode] ?? [];
                }
              }
            });
          }
        }
      },
      error: (err) => {
        console.error('Failed to load geo-data.json', err);
        this.geoLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.ob.business.set(this.form.value as any);
  }

  get f() {
    return this.form.controls;
  }

  // ─── Lazy city loader ──────────────────────────────────────────────────────

  private loadCitiesForCountry(isoCode: string, callback?: () => void): void {
    // Return from cache if already fetched
    if (this.cityCache[isoCode]) {
      this.cityData = this.cityCache[isoCode];
      callback?.();
      return;
    }

    this.cityLoading = true;
    this.http.get<CityData>(`assets/cities/${isoCode}.json`).subscribe({
      next: (data) => {
        this.cityCache[isoCode] = data;
        this.cityData    = data;
        this.cityLoading = false;
        callback?.();
      },
      error: () => {
        // Country has no city data file — city dropdown stays empty
        this.cityData    = {};
        this.cityLoading = false;
        callback?.();
      }
    });
  }

  // ─── Country / State / City cascades ──────────────────────────────────────

  onCountrySelect(selected: { name: string; isoCode: string } | null): void {
    this.states = [];
    this.cities = [];
    this.cityData = {};
    this.form.patchValue({ state: '', city: '' });
    if (!selected) return;

    this.states = this.stateMap[selected.isoCode] ?? [];
    this.loadCitiesForCountry(selected.isoCode);
  }

  onStateSelect(selected: { name: string; isoCode: string } | null): void {
    this.cities = [];
    this.form.patchValue({ city: '' });
    if (!selected) return;

    this.cities = this.cityData[selected.isoCode] ?? [];
  }

  // ─── Image upload ───────────────────────────────────────────────────────────

  onImageUpload(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        this.form.patchValue({ profileImage: reader.result });
      }
    };
    reader.readAsDataURL(file);
  }

  // ─── Helpers ────────────────────────────────────────────────────────────────

  allowNumbersOnly(event: KeyboardEvent): void {
    if (!/[\d+]/.test(event.key)) {
      event.preventDefault();
    }
  }

  phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return /^\d+$/.test(control.value) ? null : { phoneNumber: true };
    };
  }

  // ─── Submit ─────────────────────────────────────────────────────────────────

  submit(): void {
    if (this.form.invalid) return;
    this.ob.business.set(this.form.value as any);
    this.completed.emit();
  }
}