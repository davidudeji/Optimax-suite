import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TawkService } from './tawk.service';

function setMetaContent(name: string, value: string): void {
  let meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = value;
}

describe('TawkService', () => {
  let service: TawkService;
  let router: Router;

  beforeEach(() => {
    document.getElementById('tawk-messenger-script')?.remove();
    setMetaContent('tawk-property-id', '');
    setMetaContent('tawk-widget-id', '');
    delete window.Tawk_API;
    delete window.Tawk_LoadStart;

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'pricing', children: [] },
          { path: 'contact', children: [] },
          { path: 'blog/admin/login', children: [] },
        ]),
      ],
    });

    service = TestBed.inject(TawkService);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    document.getElementById('tawk-messenger-script')?.remove();
    document.querySelector('meta[name="tawk-property-id"]')?.remove();
    document.querySelector('meta[name="tawk-widget-id"]')?.remove();
    delete window.Tawk_API;
    delete window.Tawk_LoadStart;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('does not append the vendor script when either ID is missing', async () => {
    setMetaContent('tawk-property-id', 'property');
    service.initialize();

    await router.navigateByUrl('/pricing');

    expect(document.getElementById('tawk-messenger-script')).toBeNull();
  });

  it('loads one asynchronous script on public routes', async () => {
    setMetaContent('tawk-property-id', ' property-id ');
    setMetaContent('tawk-widget-id', ' widget-id ');
    service.initialize();

    await router.navigateByUrl('/pricing');
    await router.navigateByUrl('/contact');

    const scripts = document.querySelectorAll('#tawk-messenger-script');
    expect(scripts.length).toBe(1);
    expect((scripts[0] as HTMLScriptElement).async).toBeTrue();
    expect((scripts[0] as HTMLScriptElement).src).toBe('https://embed.tawk.to/property-id/widget-id');
  });

  it('does not load chat on admin routes', async () => {
    setMetaContent('tawk-property-id', 'property-id');
    setMetaContent('tawk-widget-id', 'widget-id');
    service.initialize();

    await router.navigateByUrl('/blog/admin/login');

    expect(document.getElementById('tawk-messenger-script')).toBeNull();
  });

  it('removes a failed script and logs an operational error', async () => {
    setMetaContent('tawk-property-id', 'property-id');
    setMetaContent('tawk-widget-id', 'widget-id');
    const error = spyOn(console, 'error');
    service.initialize();

    await router.navigateByUrl('/pricing');
    document.getElementById('tawk-messenger-script')!.dispatchEvent(new Event('error'));

    expect(document.getElementById('tawk-messenger-script')).toBeNull();
    expect(error).toHaveBeenCalled();

    await router.navigateByUrl('/contact');

    expect(document.getElementById('tawk-messenger-script')).toBeNull();
  });

  it('marks a human-agent request without forwarding the visitor message', async () => {
    setMetaContent('tawk-property-id', 'property-id');
    setMetaContent('tawk-widget-id', 'widget-id');
    const addTags = jasmine.createSpy('addTags');
    const addEvent = jasmine.createSpy('addEvent');
    window.Tawk_API = { addTags, addEvent };
    service.initialize();

    await router.navigateByUrl('/pricing');
    window.Tawk_API.onChatMessageVisitor?.('Can I speak to a human, please?');

    expect(addTags).toHaveBeenCalledOnceWith(['human-request']);
    expect(addEvent).toHaveBeenCalledOnceWith('human-agent-requested');
  });
});
