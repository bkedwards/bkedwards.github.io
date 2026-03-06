import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  AfterViewInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[activePanelObserver]',
  standalone: true,
})
export class ScrollTrapToDirective implements AfterViewInit, OnDestroy {
  @Input('scrollTrapTo') panels!: HTMLElement[]; // pass in your panel elements
  @Output() activePanelIndex = new EventEmitter<number>();

  private io?: IntersectionObserver;

  constructor(
    private host: ElementRef<HTMLElement>,
    private zone: NgZone,
  ) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(
                (entry.target as HTMLElement).dataset['index'],
              );
              this.zone.run(() => this.activePanelIndex.emit(index));
            }
          });
        },
        {
          root: null, // use viewport
          rootMargin: '-40% 0px -40% 0px', // trigger when panel is in middle 20% of screen
          threshold: 0,
        },
      );

      this.panels?.forEach((panel) => this.io!.observe(panel));
    });
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }
}
