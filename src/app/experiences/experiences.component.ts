import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css',
})
export class ExperiencesComponent implements AfterViewInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;

  animateCards() {
    this.cards.forEach((cardRef, index) => {
      setTimeout(() => {
        cardRef.nativeElement.classList.add('slide-in');
      }, index * 200); // stagger
    });
  }

  ngAfterViewInit(): void {
    this.animateCards();
  }
}
