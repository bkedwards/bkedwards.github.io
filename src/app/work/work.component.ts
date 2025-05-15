import { Component, ViewChild, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { NgClass } from '@angular/common';

export interface Experience {
  icon: string,
  date: string,
  position: string,
  company: string,
  description: string,
  skills: string,
  location: string,
  alignment: string
}

@Component({
  selector: 'app-work',
  imports: [NgClass],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent implements AfterViewInit {
  @ViewChildren('container') containers!: QueryList<ElementRef>;
  @ViewChildren('date') dates!: QueryList<ElementRef>;
  experiences: Experience[] = [
    {
      icon: 'assets/work/db.png',
      date: 'June 2025 - Present',
      position: 'Technology & Data Intern',
      company: 'Deutsche Bank',
      description:
        'Incoming TDI Investmen Banking intern at Deutsche Bank for Summer 2025.',
      skills: 'Java, JavaSpring, FastAPI',
      location: 'Cary, NC',
      alignment: 'right',
    },
    {
      icon: 'assets/work/unc.jpg',
      date: 'May 2024 - Present',
      position: 'Undergraduate Research Assistant',
      company: 'Experimental Engineering Lab (EEL)',
      description:
        'Under the direction of Dr. Roni Sengupta, developing an image processing pipeline to optimize COLMAP and photogrammetry software for the purpose of creating a photo-realistic model 3D of the input images.',
      skills: 'Python, CUDA, Bash, Unity, C#, HLSL',
      location: 'Chapel Hill, NC',
      alignment: 'left',
    },
    {
      icon: 'assets/work/unchockey.png',
      date: 'August 2022 - May 2025',
      position: 'President of Operations',
      company: 'UNC Ice Hockey',
      description:
        'Work directly with Student Government and UNC Club Sports to secure program funding. Coordinate hotels, ice time, transportation, and negotiate finances.',
      skills: 'Leadership, Fundraising, Financial Planning',
      location: 'Chapel Hill, NC',

      alignment: 'right',
    },
    {
      icon: 'assets/work/corvid.png',
      date: 'May 2024 - August 2024',
      position: 'Extended Reality Intern',
      company: 'Corvid Technologies',
      description:
        'Created a Mixed Reality application using Unreal Engine and C++ for the Hololens 2 to visualize simulated physics of internal detonations inside of and around a stiffened steel structure.',
      skills: 'Python, C++, VR/AR, Unreal Engine',
      location: 'Mooresville, NC',
      alignment: 'left',
    },
  ];
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('in-view');
            observer.unobserve(el); // animate only once
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    this.containers.forEach((container) => {
      observer.observe(container.nativeElement);
    });
    this.dates.forEach((date) => {
      observer.observe(date.nativeElement);
    });
  }
}
