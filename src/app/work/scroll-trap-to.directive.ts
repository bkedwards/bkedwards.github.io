import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[scrollTrapTo]',
  standalone: true,
})
export class ScrollTrapToDirective implements AfterViewInit, OnDestroy {
  @Input('scrollTrapTo') target!: HTMLElement; // the inner scroller (panels-container)
  @Input() trapThreshold = 0.90; // “fully in view” tuning

  private active = false;
  private io?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>, private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.io = new IntersectionObserver(
        ([entry]) =>
          {
            this.active = entry.intersectionRatio >= this.trapThreshold;
          },
        { threshold: [0.80,0.85,0.90, 0.95, 1] }
      );
      this.io.observe(this.host.nativeElement);

      // wheel (desktop / trackpad)
      window.addEventListener('wheel', this.onWheel, { passive: false });
      this.target?.addEventListener('wheel', this.onWheel, { passive: false });

      // touch (mobile)
      window.addEventListener('touchstart', this.onTouchStart, {
        passive: true,
      });
      window.addEventListener('touchmove', this.onTouchMove, {
        passive: false,
      });
    });
  }

  ngOnDestroy() {
    this.io?.disconnect();
    window.removeEventListener('wheel', this.onWheel as any);
    this.target?.removeEventListener('wheel', this.onWheel as any);
    window.removeEventListener('touchstart', this.onTouchStart as any);
    window.removeEventListener('touchmove', this.onTouchMove as any);
  }

  private onWheel = (e: WheelEvent) => {
    if (!this.active || !this.target) return;

    const dy = e.deltaY;
    if (dy === 0) return;

    const el = this.target;
    const atTop = el.scrollTop <= 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    // If the inner scroller can consume the scroll in this direction, trap it.
    if ((dy > 0 && !atBottom) || (dy < 0 && !atTop)) {
      e.preventDefault();
      el.scrollTop += dy;
    }
    // Else: don't preventDefault -> page scroll continues (unlock)
  };

  private lastY = 0;
  private onTouchStart = (e: TouchEvent) => {
    this.lastY = e.touches[0]?.clientY ?? 0;
  };
  private onTouchMove = (e: TouchEvent) => {
    if (!this.active || !this.target) return;

    const y = e.touches[0]?.clientY ?? 0;
    const dy = this.lastY - y;
    this.lastY = y;

    const el = this.target;
    const atTop = el.scrollTop <= 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    if ((dy > 0 && !atBottom) || (dy < 0 && !atTop)) {
      e.preventDefault();
      el.scrollTop += dy;
    }
  };
}
