import {AfterViewInit, Component, effect, ElementRef, Injector, QueryList, OnDestroy, ViewChild, ViewChildren} from '@angular/core';
import { Subscription } from 'rxjs';
import {ThemeService} from '../theme.service';


type Camera = {
  center: [number, number]; zoom: number;
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
  imports: [],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLElement>;
  @ViewChild('panelScroller') panelScroller!: ElementRef<HTMLElement>;

  isMapLoading = true;

  experiences: Experience[] = [
    {
      icon: '/assets/work/pltr.png',
      date: 'Incoming - July 2026',
      position: 'Forward Deployed Engineer',
      company: 'Palantir Technologies',
      description: 'I am an incoming US-GOV FDSE for Palantir.',
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
      icon: '/assets/work/deutsche.png',
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
      icon: '/assets/work/oldwell.png',
      date: 'May 2024 - Present',
      position: 'Research Assistant',
      company: 'Experimental Engineering Lab',
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
      icon: '/assets/work/carolina.png',
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
      icon: '/assets/work/corvid.png',
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

  constructor(
    private theme: ThemeService,
    private injector: Injector,
  ) {}

  @ViewChildren('fadeItem') fadeItems!: QueryList<ElementRef>;

  private fadeObserver!: IntersectionObserver;
  private fadeItemsSub?: Subscription;

  private observeFadeItems(): void {
    this.fadeItems.forEach((item) => {
      const el = item.nativeElement;

      if (!el.classList.contains('visible')) {
        this.fadeObserver.observe(el);
      }
    });
  }

  private mapReady = false;

  async ngAfterViewInit() {
    const module = await import('maplibre-gl');
    const maplibregl: any = module.default ?? module;

    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: 'assets/work/style.base.json',
      center: [-77.0369, 38.9073],
      zoom: 9,
      attributionControl: false,
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

      this.isMapLoading = false;
    });

    // Fires when the style is fully available (and after any future style
    // reloads)
    this.map.on('style.load', () => {
      this.mapReady = true;

      this.map.resize();
      this.addExperienceLayer();

      // apply current theme instantly once style exists
      this.applyThemeToMap(this.theme.isLight());
    });

    // Resize handling
    this.ro = new ResizeObserver(() => this.map.resize());
    this.ro.observe(this.mapContainer.nativeElement);

    this.setupScrollObserver();

    // Theme changes: only apply once style is ready
    effect(
      () => {
        const isLight = this.theme.isLight();
        if (!this.map || !this.mapReady) return;
        this.applyThemeToMap(isLight);
      },
      { injector: this.injector },
    );

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

  private setupScrollObserver() {
    const panels = Array.from(
      this.mapContainer.nativeElement
        .closest('.experience-container')!
        .querySelectorAll<HTMLElement>('.panel'),
    );

    this.io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (!best) return;
        const idx = Number((best.target as HTMLElement).dataset['index']);
        if (!Number.isFinite(idx)) return;
        this.setActivePanel(idx);
      },
      {
        root: null, // viewport instead of panel scroller
        threshold: [0.25, 0.4, 0.6],
        // Make “active” when panel is near the center band of the scroll
        // viewport
        rootMargin: '-35% 0px -35% 0px',
      },
    );

    panels.forEach((p) => this.io!.observe(p));
  }

  private addExperienceLayer() {
    if (this.map.hasImage('pulsing-dot')) {
      this.map.removeImage('pulsing-dot');
    }

    this.map.addImage(
      'pulsing-dot',
      this.createPulsingDot(this.theme.isLight()),
      {
        pixelRatio: 2,
      },
    );

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
          'icon-size': 0.35,
          'icon-allow-overlap': true,
        },
      });
    } else {
      (this.map.getSource('experience-points') as any).setData(geojson);
    }
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

  private applyThemeToMap(isLight: boolean) {
    if (!this.map) return;
    const style = this.map.getStyle?.();
    const layers = style?.layers;
    if (!layers) return;

    const c = isLight
      ? {
          background: '#ECFAFF', // slightly brighter than #E6F8FF
          landcover: '#e3fffe', // subtle separation from bg
          landuse: '#F2FBFF',
          park: '#E6F7EF',

          water: '#94E3DD', // clean cyan
          waterShadow: '#94E3DD',

          roadMinor: '#D7E2EA',
          roadPrimary: '#C5D3DD',
          roadTrunk: '#F2FBFF',

          boundary: '#C8D6E0',

          building: '#EAF1F6',
          buildingTop: '#F4F8FB',

          landUseResidential: '#EAF1F6',

          label: '#102027',
          labelHalo: 'rgba(236,250,255,0.95)',
        }
      : {
          background: '#121417',
          landcover: '#111418',
          water: '#346666',
          waterShadow: '#346666',

          roadMinor: '#2C323A',
          roadPrimary: '#343A44',
          roadTrunk: '#3D4551',

          boundary: '#2B2F36',
          building: '#1A1F26',

          landUseResidential: '#111418',

          label: '#E6F7FF',
          labelHalo: 'rgba(14,14,14,0.9)',
        };

    const safeSetPaint = (id: string, prop: string, val: any) => {
      if (this.map.getLayer(id)) this.map.setPaintProperty(id, prop, val);
    };

    // Background
    safeSetPaint('background', 'background-color', c.background);

    // Land
    safeSetPaint('landcover', 'fill-color', c.landcover);
    safeSetPaint('landuse_residential', 'fill-color', c.landUseResidential);

    // Water
    safeSetPaint('water', 'fill-color', c.water);
    safeSetPaint('water_shadow', 'fill-color', c.waterShadow);

    // Roads (fills only — casing optional)
    safeSetPaint('road_minor_fill', 'line-color', c.roadMinor);
    safeSetPaint('road_pri_fill_noramp', 'line-color', c.roadPrimary);
    safeSetPaint('road_trunk_fill_noramp', 'line-color', c.roadTrunk);

    // Road Labels
    safeSetPaint('roadname_major', 'text-color', c.label);
    safeSetPaint('roadname_major', 'text-halo-color', c.labelHalo);
    safeSetPaint('roadname_pri', 'text-color', c.label);
    safeSetPaint('roadname_pri', 'text-halo-color', c.labelHalo);

    // Optional: add casing contrast
    safeSetPaint('road_minor_case', 'line-color', c.roadMinor);
    safeSetPaint('road_pri_case_noramp', 'line-color', c.roadPrimary);
    safeSetPaint('road_trunk_case_noramp', 'line-color', c.roadTrunk);

    // Boundaries
    safeSetPaint('boundary_state', 'line-color', c.boundary);
    safeSetPaint('boundary_county', 'line-color', c.boundary);

    // Buildings
    safeSetPaint('building', 'fill-color', c.building);

    // City Labels
    safeSetPaint('place_city_r6', 'text-color', c.label);
    safeSetPaint('place_city_r6', 'text-halo-color', c.labelHalo);
    safeSetPaint('place_city_r5', 'text-color', c.label);
    safeSetPaint('place_city_r5', 'text-halo-color', c.labelHalo);

    // National Parks
    safeSetPaint('park_national_park', 'fill-color', c.park);
    safeSetPaint('park_nature_reserve', 'fill-color', c.park);

    if (this.map.hasImage('pulsing-dot')) {
      this.map.removeImage('pulsing-dot');
    }

    this.map.addImage('pulsing-dot', this.createPulsingDot(isLight), {
      pixelRatio: 2,
    });
  }

  private createPulsingDot(isLight: boolean) {
    const size = 350;

    const baseColor = isLight
      ? { r: 32, g: 120, b: 120 } // #207878 (Light Mode)
      : { r: 0, g: 255, b: 255 }; // #00FFFF (Dark Mode)

    const pulsingDot: any = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

      onAdd() {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        this.context = canvas.getContext('2d');
      },

      render() {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const ctx = this.context as CanvasRenderingContext2D;

        ctx.clearRect(0, 0, size, size);

        // Outer pulse
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, outerRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${1 - t})`;
        ctx.fill();

        // Inner circle
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 1)`;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2 + 4 * (1 - t);
        ctx.fill();
        ctx.stroke();

        this.data = ctx.getImageData(0, 0, size, size).data;
        this._map.triggerRepaint();
        return true;
      },
    };

    pulsingDot._map = this.map;
    return pulsingDot;
  }

  ngOnDestroy() {
    this.io?.disconnect();
    this.ro?.disconnect();
    this.map?.remove?.();
    this.fadeObserver?.disconnect();
  }
}
