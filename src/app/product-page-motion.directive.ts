import { AfterViewInit, Directive, ElementRef, HostBinding, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appProductPageMotion]',
  standalone: true,
})
export class ProductPageMotionDirective implements AfterViewInit, OnDestroy {
  @HostBinding('class.product-page') productPageClass = true;

  private motionContext?: ReturnType<typeof gsap.context>;
  private reducedMotionQuery?: MediaQueryList;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    this.reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.reducedMotionQuery.addEventListener('change', this.handleMotionPreferenceChange);
    this.initializeMotion();
  }

  ngOnDestroy(): void {
    this.reducedMotionQuery?.removeEventListener('change', this.handleMotionPreferenceChange);
    this.motionContext?.revert();
  }

  private readonly handleMotionPreferenceChange = (): void => {
    this.motionContext?.revert();
    this.motionContext = undefined;
    this.initializeMotion();
  };

  private initializeMotion(): void {
    if (this.reducedMotionQuery?.matches) return;

    const page = this.elementRef.nativeElement;
    const context = gsap.context(() => {}, page);
    this.motionContext = context;
    context.add(() => {
      const hero = page.querySelector<HTMLElement>('.product-hero');
      if (hero) {
        const intro = hero.querySelectorAll<HTMLElement>('h1, h1 ~ p, h1 ~ div a');
        gsap.fromTo(
          intro,
          { autoAlpha: 0.85, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.07,
            ease: 'power2.out',
            clearProps: 'opacity,visibility,transform',
          }
        );

        const image = hero.querySelector<HTMLElement>('img');
        if (image) {
          gsap.fromTo(
            image,
            { autoAlpha: 0.85, scale: 0.985 },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.75,
              ease: 'power2.out',
              clearProps: 'opacity,visibility,transform',
            }
          );
        }
      }

      page.querySelectorAll<HTMLElement>('section:not(.product-hero)').forEach((section) => {
        const targets = section.querySelectorAll<HTMLElement>('h2, .grid > *');
        if (targets.length === 0) return;

        ScrollTrigger.create({
          trigger: section,
          start: 'top 82%',
          once: true,
          onEnter: () => context.add(() => {
            gsap.fromTo(
              targets,
              { autoAlpha: 0.8, y: 12 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.045,
                ease: 'power2.out',
                clearProps: 'opacity,visibility,transform',
              }
            );
          }),
        });
      });
    });
  }
}
