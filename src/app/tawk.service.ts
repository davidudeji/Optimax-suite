import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const TAWK_SCRIPT_ID = 'tawk-messenger-script';
const HUMAN_REQUEST_PATTERN =
  /\b(?:speak|talk|chat|connect)\b.{0,40}\b(?:human|person|staff|representative|agent)\b|\b(?:human|person|staff|representative|agent)\b.{0,30}\b(?:please|available|join|help|support)\b/i;

interface TawkApi {
  addEvent?: (eventName: string) => void;
  addTags?: (tags: string[]) => void;
  hideWidget?: () => void;
  onChatMessageVisitor?: (message: string) => void;
  showWidget?: () => void;
}

declare global {
  interface Window {
    Tawk_API?: TawkApi;
    Tawk_LoadStart?: Date;
  }
}

@Injectable({
  providedIn: 'root',
})
export class TawkService {
  private initialized = false;
  private humanRequestMarked = false;
  private scriptLoadFailed = false;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly router: Router
  ) {}

  initialize(): void {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.syncRoute(event.urlAfterRedirects));
  }

  private syncRoute(url: string): void {
    if (!this.isPublicRoute(url)) {
      this.document.defaultView?.Tawk_API?.hideWidget?.();
      return;
    }

    const config = this.readConfiguration();
    if (!config) {
      return;
    }

    if (this.document.getElementById(TAWK_SCRIPT_ID)) {
      this.document.defaultView?.Tawk_API?.showWidget?.();
      return;
    }

    if (this.scriptLoadFailed) {
      return;
    }

    this.loadWidget(config.propertyId, config.widgetId);
  }

  private isPublicRoute(url: string): boolean {
    const path = url.split(/[?#]/, 1)[0].replace(/\/+$/, '') || '/';
    return !/^\/blog\/admin(?:\/|$)/i.test(path);
  }

  private readConfiguration(): { propertyId: string; widgetId: string } | null {
    const propertyId = this.document
      .querySelector<HTMLMetaElement>('meta[name="tawk-property-id"]')
      ?.content.trim();
    const widgetId = this.document
      .querySelector<HTMLMetaElement>('meta[name="tawk-widget-id"]')
      ?.content.trim();

    return propertyId && widgetId ? { propertyId, widgetId } : null;
  }

  private loadWidget(propertyId: string, widgetId: string): void {
    const view = this.document.defaultView;
    if (!view) {
      console.error('Tawk.to chat could not initialize because the browser window is unavailable.');
      return;
    }

    view.Tawk_API = view.Tawk_API || {};
    view.Tawk_LoadStart = new Date();
    view.Tawk_API.onChatMessageVisitor = (message: string) => {
      if (HUMAN_REQUEST_PATTERN.test(message)) {
        this.markHumanRequest(view.Tawk_API);
      }
    };

    const script = this.document.createElement('script');
    script.id = TAWK_SCRIPT_ID;
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    script.src = `https://embed.tawk.to/${encodeURIComponent(propertyId)}/${encodeURIComponent(widgetId)}`;
    script.onerror = () => {
      this.scriptLoadFailed = true;
      console.error('Tawk.to chat failed to load. Check network access and widget configuration.');
      script.remove();
    };
    this.document.head.appendChild(script);
  }

  private markHumanRequest(api: TawkApi | undefined): void {
    if (this.humanRequestMarked) {
      return;
    }

    if (!api?.addTags || !api.addEvent) {
      console.error('Tawk.to chat does not expose the APIs needed to mark a human-agent request.');
      return;
    }

    this.humanRequestMarked = true;
    api.addTags(['human-request']);
    api.addEvent('human-agent-requested');
  }
}
