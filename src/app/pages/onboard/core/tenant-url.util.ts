export function makeTenantHost(subdomain: string, baseDomain = 'erp.example.com') {
  const slug = subdomain.toLowerCase().replace(/[^a-z0-9-]/g, '').replace(/^-+|-+$/g, '');
  return `${slug}.${baseDomain}`;
}