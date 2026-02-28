import { Component, ViewChild, ElementRef, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { ScrollTrapToDirective } from './scroll-trap-to.directive';

type Camera = {
  center: [number, number];
  zoom: number;
  bearing?: number;
  pitch?: number;
};

export interface Experience {
  icon: string;
  date: string;
  position: string;
  company: string;
  description: string;
  skills: string;
  location: string;
  camera: Camera;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [ScrollTrapToDirective],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLElement>;
  @ViewChild('panelScroller') panelScroller!: ElementRef<HTMLElement>;

  experiences: Experience[] = [
    {
      icon: '/assets/work/black_pltr.png',
      date: 'Incoming - July 2026',
      position: 'Forward Deployed Engineer',
      company: 'Palantir Technologies',
      description: 'I am an incoming US-GOV FDSE for Palantir',
      skills: 'Software Engineering, Problem Decomposition',
      location: 'Washington-DC',
      camera: {
        center: [-77.05997841387187, 38.90321314249672], // [lng, lat]
        zoom: 9,
        bearing: -20,
        pitch: 40,
      },
    },
    {
      icon: '/assets/work/black_db.png',
      date: 'June 2025 - August 2025',
      position: 'Technology & Data Intern',
      company: 'Deutsche Bank',
      description:
        'Led a generative ESG visualization project leveraging Google Cloud Platform (GCP), Vertex AI, and BigQuery to implement a RAG architecture for interactive sustainability report analysis.',
      skills: 'Java/Spring, React, Kubernetes, OpenShift',
      location: 'Cary, NC',
      camera: {
        center: [-78.79627346326687, 35.82679947311714],
        zoom: 9,
        bearing: 15,
        pitch: 40,
      },
    },
    {
      icon: '/assets/work/black_well.png',
      date: 'May 2024 - Present',
      position: 'Undergraduate Research Assistant',
      company: 'Experimental Engineering Lab (EEL)',
      description:
        'Under the direction of Dr. Roni Sengupta, I am developing an AR/VR app for visualization of Hierarchical 3D Gaussians and an image processing pipeline to optimize COLMAP and photogrammetry software.',
      skills: 'Python, CUDA, Bash, Unity, C#, HLSL',
      location: 'Chapel Hill, NC',
      camera: {
        center: [-79.04975946580718, 35.91212554273211],
        zoom: 9,
        bearing: -10,
        pitch: 35,
      },
    },
    {
      icon: '/assets/work/black_car.png',
      date: 'August 2022 - May 2025',
      position: 'President of Operations',
      company: 'UNC Ice Hockey',
      description:
        'As President, I worked directly with Student Government and UNC Club Sports to secure program funding. I also coordinated hotels, ice time, transportation, negotiated sponsorships, and facilitated the hiring of a new coach.',
      skills: 'Leadership, Fundraising, Financial Planning',
      location: 'Chapel Hill, NC',
      camera: {
        center: [-79.04975946580718, 35.91212554273211],
        zoom: 9,
        bearing: -10,
        pitch: 35,
      },
    },
    {
      icon: '/assets/work/black_corvid.png',
      date: 'May 2024 - August 2024',
      position: 'Extended Reality Intern',
      company: 'Corvid Technologies',
      description:
        'In the summer of 2024, I created a Mixed Reality application using Unreal Engine and C++ for the Hololens 2 to visualize simulated physics of internal detonations inside of and around a stiffened steel structure.',
      skills: 'Python, C++, VR/AR, Unreal Engine',
      location: 'Mooresville, NC',
      camera: {
        center: [-80.86069350211885, 35.518353111689],
        zoom: 9,
        bearing: 20,
        pitch: 45,
      },
    },
  ];

  private map: any;
  private ro?: ResizeObserver;
  private io?: IntersectionObserver;
  private activeIndex = 0;

  async ngAfterViewInit() {
    const maplibregl = await import('maplibre-gl');

    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: '/assets/work/style.json',
      center: [-77.0369, 38.9073],
      zoom: 9,
      attributionControl: false, // remove the black-arrow attribution dropdown
    });

    this.map.on('load', () => {
      // Disable all user interaction
      this.map.scrollZoom.disable();
      this.map.boxZoom.disable();
      this.map.dragRotate.disable();
      this.map.dragPan.disable();
      this.map.keyboard.disable();
      this.map.doubleClickZoom.disable();
      this.map.touchZoomRotate.disable();
    });

    this.map.once('load', () => {
      this.map.resize();

      const size = 300;

      // pulsing dot image (StyleImageInterface)
      const pulsingDot: any = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),

        onAdd: function () {
          const canvas = document.createElement('canvas');
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext('2d');
        },

        render: function () {
          const duration = 1000;
          const t = (performance.now() % duration) / duration;

          const radius = (size / 2) * 0.3;
          const outerRadius = (size / 2) * 0.7 * t + radius;
          const context = this.context as CanvasRenderingContext2D;

          context.clearRect(0, 0, this.width, this.height);

          // outer
          context.beginPath();
          context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
          );
          context.fillStyle = `rgba(0, 255, 255, ${1 - t})`;
          context.fill();

          // inner
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = 'rgba(0, 255, 255, 1)';
          context.strokeStyle = 'white';
          context.lineWidth = 2 + 4 * (1 - t);
          context.fill();
          context.stroke();

          this.data = context.getImageData(0, 0, this.width, this.height).data;

          // IMPORTANT: trigger repaint via your component map instance
          // We'll bind map onto this object below.
          this._map.triggerRepaint();
          return true;
        },
      };

      // Bind map into the image object so render() can repaint
      pulsingDot._map = this.map;

      // Add image (guard against hot reload calling twice)
      if (!this.map.hasImage('pulsing-dot')) {
        this.map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
      }

      // Source with ALL your experience points
      const geojson = this.buildExperienceGeoJSON();

      if (!this.map.getSource('experience-points')) {
        this.map.addSource('experience-points', {
          type: 'geojson',
          data: geojson,
        });

        this.map.addLayer({
          id: 'experience-points-layer',
          type: 'symbol',
          source: 'experience-points',
          layout: {
            'icon-image': 'pulsing-dot',
            'icon-size': 0.35, // tune size on map
            'icon-allow-overlap': true, // so dots never disappear
          },
        });
      } else {
        // if it already exists (HMR), just update the data
        (this.map.getSource('experience-points') as any).setData(geojson);
      }
    });

    this.map.addControl(new maplibregl.NavigationControl(), 'top-right');

    // Fix flex-layout sizing issues
    this.map.once('load', () => this.map.resize());
    this.ro = new ResizeObserver(() => this.map.resize());
    this.ro.observe(this.mapContainer.nativeElement);

    this.setupScrollObserver();
  }

  private setupScrollObserver() {
    const root = this.panelScroller.nativeElement;
    const panels = Array.from(root.querySelectorAll<HTMLElement>('.panel'));

    this.io = new IntersectionObserver(
      (entries) => {
        // Choose most visible intersecting panel
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (!best) return;

        const el = best.target as HTMLElement;
        const idx = Number(el.dataset['index']);
        if (!Number.isFinite(idx)) return;

        this.setActivePanel(idx);
      },
      {
        root,
        threshold: [0.25, 0.4, 0.6],
        // Make “active” when panel is near the center band of the scroll viewport
        rootMargin: '-35% 0px -35% 0px',
      }
    );
    panels.forEach((p) => this.io!.observe(p));
  }

  private setActivePanel(i: number) {
    if (!this.map) return;
    if (i === this.activeIndex) return;
    if (!this.experiences[i]) return;

    this.activeIndex = i;
    const cam = this.experiences[i].camera;

    this.map.easeTo({
      center: cam.center,
      zoom: cam.zoom,
      bearing: cam.bearing ?? 0,
      pitch: cam.pitch ?? 0,
      duration: 900,
      essential: true,
    });
  }

  private buildExperienceGeoJSON() {
    return {
      type: 'FeatureCollection' as const,
      features: this.experiences.map((exp, i) => ({
        type: 'Feature' as const,
        properties: {
          index: i,
        },
        geometry: {
          type: 'Point' as const,
          coordinates: exp.camera.center, // [lng, lat]
        },
      })),
    };
  }

  ngOnDestroy() {
    this.io?.disconnect();
    this.ro?.disconnect();
    this.map?.remove?.();
  }
}
