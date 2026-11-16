import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './pages/home/hero/hero.component';
import { FeaturesComponent } from './pages/home/features/features.component';
import { CommonModule } from '@angular/common';
import { TawkService } from './tawk.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet, HeroComponent, FeaturesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent {
  title = 'landingpageOpti';
  private wasOnCloudPage = false;

  constructor(
    tawkService: TawkService,
    router: Router,
    titleService: Title,
    metaService: Meta,
    @Inject(DOCUMENT) document: Document
  ) {
    tawkService.initialize();
    router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const path = event.urlAfterRedirects.split(/[?#]/)[0].replace(/\/+$/, '');
        const isCloudPage = path === '/optima-xcloud' || path.startsWith('/optima-xcloud/');
        if (this.wasOnCloudPage && !isCloudPage) {
          const title = 'Optimax ERP | One platform for your business';
          const description =
            'Manage finance, people, sales, procurement and operations with Optimax ERP. Explore one business platform built to support clearer visibility and coordinated work.';
          titleService.setTitle(title);
          metaService.updateTag({ name: 'description', content: description });
          metaService.updateTag({ property: 'og:title', content: title });
          metaService.updateTag({
            property: 'og:description',
            content:
              'Manage finance, people, sales, procurement and operations with Optimax ERP.',
          });
          metaService.updateTag({
            property: 'og:url',
            content: 'https://optimaxsuites.com/',
          });
          const canonical = document.querySelector<HTMLLinkElement>(
            'link[rel="canonical"]'
          );
          if (canonical) {
            canonical.href = 'https://optimaxsuites.com/';
          }
        }
        this.wasOnCloudPage = isCloudPage;
      });
  }
}
