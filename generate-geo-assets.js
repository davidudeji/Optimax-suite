// generate-geo-assets.js
// Run from your project root: node generate-geo-assets.js
//
// Outputs:
//   src/assets/geo-data.json        — all countries + states (~218 KB)
//   src/assets/cities/[ISO].json    — per-country city data (192 files)

const { Country, State, City } = require('country-state-city');
const fs   = require('fs');
const path = require('path');

const ASSETS_DIR      = path.join(__dirname, 'src', 'assets');
const CITIES_DIR      = path.join(ASSETS_DIR, 'cities');
const GEO_DATA_FILE   = path.join(ASSETS_DIR, 'geo-data.json');

// ── 1. Make sure output directories exist ────────────────────────────────────
fs.mkdirSync(CITIES_DIR, { recursive: true });

// ── 2. Build countries + stateMap ────────────────────────────────────────────
console.log('Building countries and states...');

const countries = Country.getAllCountries().map(c => ({
  name:    c.name,
  isoCode: c.isoCode,
}));

const stateMap = {};
countries.forEach(({ isoCode }) => {
  const states = State.getStatesOfCountry(isoCode).map(s => ({
    name:    s.name,
    isoCode: s.isoCode,
  }));
  if (states.length) stateMap[isoCode] = states;
});

fs.writeFileSync(GEO_DATA_FILE, JSON.stringify({ countries, stateMap }));
console.log(`✓ geo-data.json written (${(fs.statSync(GEO_DATA_FILE).size / 1024).toFixed(1)} KB)`);

// ── 3. Build per-country city files ─────────────────────────────────────────
console.log('Building city files...');

let written = 0;
let skipped = 0;

countries.forEach(({ isoCode }) => {
  const states = State.getStatesOfCountry(isoCode);
  const countryData = {};

  states.forEach(s => {
    const cities = City.getCitiesOfState(isoCode, s.isoCode).map(c => c.name);
    if (cities.length) countryData[s.isoCode] = cities;
  });

  if (Object.keys(countryData).length) {
    const filePath = path.join(CITIES_DIR, `${isoCode}.json`);
    fs.writeFileSync(filePath, JSON.stringify(countryData));
    written++;
  } else {
    skipped++;
  }
});

console.log(`✓ ${written} city files written to src/assets/cities/`);
console.log(`  ${skipped} countries skipped (no city data)`);
console.log('\nDone! All geo assets are ready.');
