import { Component, AfterViewInit, ViewChildren, ElementRef, QueryList} from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorkComponent } from '../work/work.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    ProjectsComponent,
    SkillsComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  sections = [
    {
      name: 'About',
      active: false,
    },
    {
      name: 'Work',
      active: false,
    },
    {
      name: 'Projects',
      active: false,
    },
    {
      name: 'Skills',
      active: false,
    },
    {
      name: 'Contact',
      active: false,
    },
  ];

  @ViewChildren('section') sectionRefs!: QueryList<ElementRef>;

  scrollToSection(id: string) {
    id = id.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  updateActiveSection() {
    const offset = 100; // px from top to count as active
    const sectionsArray = this.sectionRefs.toArray();

    let closestIndex = -1;
    let minDistance = Number.MAX_VALUE;

    for (let i = 0; i < sectionsArray.length; i++) {
      const el = sectionsArray[i].nativeElement;
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top - offset);

      if (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        distance < minDistance
      ) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    this.sections.forEach((s, idx) => (s.active = idx === closestIndex));
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.updateActiveSection.bind(this));
    this.updateActiveSection();
  }
}
