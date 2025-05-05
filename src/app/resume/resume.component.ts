import { Component, AfterViewInit, OnDestroy, AfterViewChecked, ViewChildren, ViewChild, QueryList, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent
  implements AfterViewInit, AfterViewChecked, OnDestroy
{
  // Query for all section titles in the template
  @ViewChildren('sectionTitle') sectionTitles!: QueryList<ElementRef>;

  // Reference to the timeline element (add #timeline to your vertical-timeline element)
  @ViewChild('timeline') timeline!: ElementRef;

  // Store listeners so we can remove them on destroy
  private listeners: (() => void)[] = [];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Wait for view to be fully initialized then create dots
    setTimeout(() => {
      this.createTimelineDots();
    });

    // Listen for when the QueryList changes (if dynamic content is added)
    this.sectionTitles.changes.subscribe(() => {
      this.createTimelineDots();
    });
  }

  // To prevent constant recalculation in ngAfterViewChecked
  private lastUpdateTime = 0;
  private updateInterval = 500; // milliseconds

  ngAfterViewChecked(): void {
    const now = Date.now();
    if (now - this.lastUpdateTime > this.updateInterval) {
      this.lastUpdateTime = now;
      // Use requestAnimationFrame to avoid ExpressionChangedAfterItHasBeenCheckedError
      requestAnimationFrame(() => {
        this.createTimelineDots();
      });
    }
  }

  ngOnDestroy(): void {
    // Clean up event listeners
    this.listeners.forEach((unlisten) => unlisten());
  }

  @HostListener('window:resize')
  onResize(): void {
    // Update dots on window resize
    this.createTimelineDots();
  }

  private createTimelineDots(): void {
    if (!this.timeline || !this.timeline.nativeElement || !this.sectionTitles) {
      return;
    }

    const timelineElement = this.timeline.nativeElement;

    // Clear existing dots
    const existingDots = timelineElement.querySelectorAll('.timeline-dot');
    existingDots.forEach((dot: Element) => {
      this.renderer.removeChild(timelineElement, dot);
    });

    // Clean up old listeners
    this.listeners.forEach((unlisten) => unlisten());
    this.listeners = [];

    // Create new dots for each section title
    this.sectionTitles.forEach((titleRef, index) => {

      const titleElement = titleRef.nativeElement;
      const titleSpan: HTMLElement = titleElement.querySelector('.section-title')!;

      // Get positions relative to the document
      const titleRect = titleElement.getBoundingClientRect();
      const timelineRect = timelineElement.getBoundingClientRect();

      // Calculate the exact vertical center of the section title
      const titleCenter = titleRect.top;

      // Calculate position relative to timeline
      // We need to add window.scrollY to both to account for page scrolling
      const topPosition =
        titleCenter + window.scrollY - (timelineRect.top + window.scrollY);

      // Create dot element
      const dot = this.renderer.createElement('div');
      this.renderer.addClass(dot, 'timeline-dot');
      this.renderer.setStyle(dot, 'top', `${topPosition}px`);

      const mouseEnterListener = this.renderer.listen(dot, 'mouseenter', () => {
        this.renderer.setStyle(titleSpan, 'color', '#f7cd83');
      });

      const mouseLeaveListener = this.renderer.listen(dot, 'mouseleave', () => {
        this.renderer.removeStyle(titleSpan, 'color');
      });

      // Add click event for scrolling
      const clickListener = this.renderer.listen(dot, 'click', () => {
        titleElement.scrollIntoView({ behavior: 'smooth' });
      });

      // Store listeners for cleanup
      this.listeners.push(
        mouseEnterListener,
        mouseLeaveListener,
        clickListener
      );

      // Add dot to timeline
      this.renderer.appendChild(timelineElement, dot);
    });
  }
}