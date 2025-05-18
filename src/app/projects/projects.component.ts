import {
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser'

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
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Mixed Reality Simulations of Internal Detonation',
      image: '/assets/projects/detonation.png',
      description: `Created a Mixed Reality application using Unreal Engine and 
        C++ for the Hololens 2 to visualize simulated physics of internal detonations.`,
      link: 'https://github.com/bkedwards/asl_detector',
      skills: 'Unreal Engine, C++',
    },
    {
      title: 'Portfolio Website',
      image: 'assets/projects/portfolio.png',
      description: `Developed this very website to showcase my software development 
        skills! Implemented component-based Angular architecture and THREE.js rendering 
        with lazy loading. Deployed as a static web application using GitHub Pages.`,
      link: 'https://github.com/bkedwards/bkedwards.github.io',
      skills: 'Angular, TypeScript, HTML, CSS',
    },
    {
      title: 'ASL Detection Model',
      image: 'assets/projects/asl.png',
      description: `Created a real-time detector for letters of the ASL alphabet. 
        Used OpenCV to capture and process data, MediaPipe to draw hand 
        landmarks, and a Random Forest Classifier to train a model to 
        predict hand gestures with 99.2% accuracy on test set.`,
      link: 'https://github.com/bkedwards/asl_detector',
      skills: 'Python, OpenCV, MediaPipe',
    },
    {
      title: 'UNC Landmark Classifier',
      image: 'assets/projects/old-well.jpg',
      description: `Created an image classifier for five of UNC-CH’s most famous 
      landmarks. Trained a convolutional neural network with twelve layers and 
      achieved an 85% accuracy on the test set`,
      link: 'https://github.com/bkedwards/unc_landmark_classifier',
      skills: 'Python, TensorFlow',
    },
    {
      title: 'Hierarchical Splat Renderer',
      image: 'assets/projects/gaussians.png',
      description: `Built a package in Unity to render real-time Hierarchical 3D 
        Gaussians. The package is based on the SIGGRAPH 2024 paper by Kerbl et. al
        and combines Aras-P's 3DGS package for Unity with the hierarchy selection-cut
        algorithm. Intended for VR/AR usage.`,
      link: 'https://github.com/bkedwards/hierarchical-splats-unity',
      skills: 'Unity, C#, HLSL, Python, Bash',
    },
    {
      title: 'Semantic Trading Bot',
      image: 'assets/projects/stock.png',
      description: `Developed a trading bot that looks at sentiment of live news 
        events to make appropriate trades. Used ALPACA and Lumibot libraries.`,
      link: 'https://github.com/bkedwards/asl_detector',
      skills: 'Python, Alpaca, Lumibot',
    },
  ];

  selectedIndex = 1;
  isTransitioning = false;

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
