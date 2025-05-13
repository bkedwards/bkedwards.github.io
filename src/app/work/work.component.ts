import { Component, ViewChild, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements AfterViewInit {
    @ViewChildren('card') cards!: QueryList<ElementRef>;
    @ViewChildren('timelineDot') dots!: QueryList<ElementRef>;
    @ViewChild('container', { static: false }) containerRef!: ElementRef;

    ngAfterViewInit(): void {
      Promise.resolve().then(() => this.initWork());
    }
  
    private initWork() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target); // optional: animate only once
            }
          });
        },
        {
          threshold: 0.2,
        }
      );
  
      this.cards.forEach((card) => {
        observer.observe(card.nativeElement);
      });
  
      setTimeout(() => {
        const cardEls = this.cards.toArray();
        const dotEls = this.dots.toArray();
  
        // Get container's position
        const container = document.querySelector('.container');
        if (!container) {
          console.error('Container element not found');
          return;
        }
  
        const containerRect = container.getBoundingClientRect();
  
        for (let i = 0; i < dotEls.length; i++) {
          if (i >= cardEls.length) break; // Safety check
  
          const card = cardEls[i].nativeElement;
          const dot = dotEls[i].nativeElement;
  
          // Get the card's position relative to the viewport
          const cardRect = card.getBoundingClientRect();
  
          // Calculate center of the card
          const cardCenter = cardRect.top + cardRect.height / 2;
  
          // Calculate dot position relative to container
          const dotPosition = cardCenter - containerRect.top;
  
          // Set dot position
          dot.style.top = `${dotPosition}px`;
  
          card.addEventListener('mouseenter', () => {
            dot.classList.add('enlarged');
          });
  
          // Add mouseleave event to shrink the dot back
          card.addEventListener('mouseleave', () => {
            dot.classList.remove('enlarged');
          });
        }
      }, 100);
    }

}
