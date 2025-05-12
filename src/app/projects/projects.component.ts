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
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HammerModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Stock Market Prediction Model',
      image: '/assets/stock.png',
      description:
        'Trained an ARIMA time-series model to predict future S&P 500 stock prices using historical data. Pre-processed and analyzed stock market data, fitting the model to closing prices to forecast 30-day trends.',
      link: 'https://github.com/bkedwards/asl_detector',
    },
    {
      title: 'Gaussian Splatting Renderer',
      image: 'assets/gaussians.png',
      description:
        'Implemented a 3D Gaussian splatting renderer using hierarchical culling and level-of-detail techniques to achieve real-time performance in Unity and WebGL.',
      link: 'https://github.com/bkedwards/asl_detector',
    },
    {
      title: 'ASL Detection Model',
      image: 'assets/asl.png',
      description:
        'Built a convolutional neural network to classify American Sign Language hand signs with high accuracy, using TensorFlow and OpenCV for preprocessing and augmentation.',
      link: 'https://github.com/bkedwards/asl_detector',
    },
    {
      title: 'UNC Campus Tour App',
      image: 'assets/old-well.jpg',
      description:
        'Developed a location-aware mobile app that gives historical and architectural information about UNC campus landmarks using GPS tracking and augmented reality overlays.',
      link: 'https://github.com/bkedwards/asl_detector',
    },
    {
      title: 'Multi-Modal ASL Translator',
      image: 'assets/asl.png',
      description:
        'Combined computer vision and NLP techniques to translate ASL gestures into spoken language in real-time using a webcam input pipeline.',
      link: 'https://github.com/bkedwards/asl_detector',
    },
    {
      title: 'Investment Risk Analyzer',
      image: 'assets/stock.png',
      description:
        'Created a web tool that evaluates portfolio risk using historical volatility and correlation matrices, helping users optimize their investments.',
      link: 'https://github.com/bkedwards/asl_detector',
    },
  ];

  selectedIndex = 0;

  showPrev(i: number) {
    if (this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
    }
  }

  showNext(i: number) {
    if (this.selectedIndex < this.projects?.length - 1) {
      this.selectedIndex = i + 1;
    }
  }


}
