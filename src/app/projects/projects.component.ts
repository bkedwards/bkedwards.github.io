import {
  Component, ViewChildren, QueryList, ElementRef, AfterViewInit, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser'
import { Subscription } from 'rxjs';

export interface Project {
  title: string,
  image: string,
  description: string,
  link: string
  skills: string,
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HammerModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      image: 'assets/projects/portfolio.png',
      description: `Developed this very website to showcase my software development 
                    skills! Implemented component-based Angular architecture and 
                    THREE.js rendering with lazy loading. Deployed as a static web 
                    application using GitHub Pages.`,
      link: 'https://github.com/bkedwards/bkedwards.github.io',
      skills: 'Angular, HTML, CSS',
    },
    {
      title: 'Mixed Reality Simulations of Internal Detonation',
      image: '/assets/projects/detonation.png',
      description: `Created a Mixed Reality application using Unreal Engine and 
                    C++ for the Hololens 2 to visualize simulated physics of 
                    internal detonations.`,
      link: 'https://docs.google.com/presentation/d/1HnIzL86wSxwg6z3ommjDDJ8uL28oPE1M/edit?usp=sharing&ouid=117641056441104918980&rtpof=true&sd=true',
      skills: 'Unreal Engine, C++',
    },
    {
      title: 'ASL Detection Model',
      image: 'assets/projects/asl.png',
      description: `Created a real-time detector for letters of the ASL alphabet. 
                    Used OpenCV to capture and process data, MediaPipe to draw hand 
                    landmarks, and a Random Forest Classifier to train a model to 
                    predict hand gestures with 99.2% accuracy on test set.`,
      link: 'https://github.com/bkedwards/asl_detector',
      skills: 'Python, OpenCV',
    },
    {
      title: 'UNC Landmark Classifier',
      image: 'assets/projects/old-well.jpg',
      description: `Created an image classifier for five of UNC-CH’s most famous 
                    landmarks. Trained a convolutional neural network with twelve 
                    layers and achieved an 85% accuracy on the test set`,
      link: 'https://github.com/bkedwards/unc_landmark_classifier',
      skills: 'Python, TensorFlow',
    },
    {
      title: 'Hierarchical Splat Renderer',
      image: 'assets/projects/gaussians.png',
      description: `Built a package in Unity to render real-time Hierarchical 3D 
                    Gaussians. The package is based on the 2024 paper by 
                    Kerbl et. al and combines Aras-P's 3DGS package for Unity with 
                    the hierarchy selection-cut algorithm.`,
      link: 'https://github.com/bkedwards/hierarchical-splats-unity',
      skills: 'Unity, C#, CUDA',
    },
    {
      title: 'Study Buddy AI',
      image: 'assets/projects/studybuddy.png',
      description: `Developed a GPT-4 powered Study Buddy for the UNC CSXL Website. 
                    Able to analyze a student's notes and generate practice quizzes,
                    providing detailed feedback and quiz submission statistics for 
                    users.`,
      link: 'https://github.com/unc-csxl/csxl.unc.edu',
      skills: 'Angular, PostgreSQL',
    },
  ];

  selectedIndex = 0;
  isTransitioning = false;

  @ViewChildren('fadeItem') fadeItems!: QueryList<ElementRef>;

  private fadeObserver!: IntersectionObserver;
  private fadeItemsSub?: Subscription;

  ngAfterViewInit(): void {
    this.fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.fadeObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    this.observeFadeItems();

    this.fadeItemsSub = this.fadeItems.changes.subscribe(() => {
      this.observeFadeItems();
    });
  }

  private observeFadeItems(): void {
    this.fadeItems.forEach((item) => {
      const el = item.nativeElement;

      if (!el.classList.contains('visible')) {
        this.fadeObserver.observe(el);
      }
    });
  }

  ngOnDestroy(): void {
    this.fadeObserver?.disconnect();
  }

  getIndex(i: number): number {
    const total = this.projects.length;
    const rawOffset = i - this.currentIndex;
    const half = Math.floor(total / 2);

    if (rawOffset > half) return rawOffset - total;
    if (rawOffset < -half) return rawOffset + total;
    return rawOffset;
  }

  get currentIndex(): number {
    return (
      ((this.selectedIndex % this.projects.length) + this.projects.length) %
      this.projects.length
    );
  }

  showPrev(i: number) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.selectedIndex--;

    setTimeout(() => (this.isTransitioning = false), 250);
  }

  showNext(i: number) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.selectedIndex++;
    setTimeout(() => (this.isTransitioning = false), 250);
  }

  goTo(index: number): void {
    this.selectedIndex = index;
  }
}
