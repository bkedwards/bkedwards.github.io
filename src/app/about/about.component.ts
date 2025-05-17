import { AsyncPipe, NgClass } from '@angular/common';
import {
  AfterViewInit,
  OnInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  QueryList,
  signal,
  ViewChild,
  WritableSignal,
  ViewChildren,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { map, tap } from 'rxjs/operators';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Mesh, EdgesGeometry } from 'three';

import { TypewriterService } from '../typewriter.service';

export interface AboutSections {
  name: string;
  paragraph: string;
}

@Component({
  selector: 'app-about',
  imports: [NgClass, ButtonModule, TimelineModule, CardModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements AfterViewInit, OnInit {
  sections: AboutSections[] = [
    {
      name: 'Introduction',
      paragraph: `I'm a driven engineer and innovator passionate about shaping the future of technology. 
                  My work spans fields such as artificial intelligence, computer graphics, and finance. 
                  <br><br>
                  Whether developing geospatial localization without GPS for my college campus at UNC or 
                  building advanced VR/AR visualizations using hierarchical 3D Gaussians, I'm always 
                  pushing boundaries and creating impactful, forward-thinking solutions.`,
    },
    {
      name: 'About Me',
      paragraph: `I'm a senior at the University of North Carolina at Chapel Hill, Class of 2026, pursuing 
                  a dual degree in Computer Science and Mathematics with a 3.96 GPA. I'm actively involved 
                  in several student organizations, including the Carolina Analytics & Data Science (CADS) 
                  club, the Carolina Augmented and Virtual Reality (CARVR) group, and the Sustainable 
                  Business Club. <br><br>
                  
                  These experiences reflect my passion for technology, data-driven innovation, and sustainability.`,
    },
    {
      name: 'Passions',
      paragraph: `I'm passionate about building innovative solutions at the intersection of artificial 
                  intelligence, machine learning, and design. Whether crafting intuitive user interfaces 
                  or experimenting with large language model frameworks, I enjoy exploring creative, 
                  nontraditional approaches that push technical and visual boundaries. <br><br>
                  
                  My interests span graphics programming, financial systems, and data visualizations—areas 
                  where I can combine analytical thinking with visual storytelling to deliver insightful, 
                  impactful experiences.`,
    },
    {
      name: 'Hobbies',
      paragraph: `Outside of academics, I enjoy drawing and painting, and I also value time spent connecting 
                  with friends, whether through shared projects or casual hangouts. <br><br>
                  
                  A lifelong hockey fan, I love both playing the game and watching my favorite team, the 
                  Carolina Hurricanes. From 2022 to 2025, I was a proud member of the UNC Ice Hockey team, 
                  where I built lasting friendships and developed a strong sense of teamwork and discipline`,
    },
  ];

  paths = [
    {
      path: 'assets/about/globe.obj',
      transform: this.composeTransform(
        new THREE.Vector3(0.0, 0.0, 0),
        new THREE.Euler(0, 0, 0),
        new THREE.Vector3(1, 1, 1)
      ),
    },
    {
      path: 'assets/about/helmet.obj',
      transform: this.composeTransform(
        new THREE.Vector3(0, 0, 0),
        new THREE.Euler(0, 0, 0),
        new THREE.Vector3(0.8, 0.8, 0.8)
      ),
    },
    {
      path: 'assets/about/old-well.obj',
      transform: this.composeTransform(
        new THREE.Vector3(0.25, -0.2, 0),
        new THREE.Euler(Math.PI / 10, 0, 0),
        new THREE.Vector3(0.75, 0.75, 0.75)
      ),
    },
  ];

  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('about', { static: false }) aboutRef!: ElementRef;
  loader = new FontLoader();

  currentSection: WritableSignal<string> = signal('');
  currentSectionName: WritableSignal<string> = signal('');
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private points!: THREE.Points;
  private globePoints!: THREE.Points;
  private frameId = 0;

  private aboutObserver!: IntersectionObserver;
  private aboutVisible = false;

  private simScene!: THREE.Scene;
  private simCamera!: THREE.OrthographicCamera;
  private simMaterial!: THREE.ShaderMaterial;
  private simRenderTarget!: THREE.WebGLRenderTarget;
  private pointsMaterial!: THREE.ShaderMaterial;
  private simSize = 512;
  private uProgress = 0;
  private uShiftProgress = 0;
  private targetTexture!: THREE.DataTexture;
  private controls!: OrbitControls;
  private textMesh!: THREE.Mesh;
  private positionsTexture!: THREE.DataTexture;
  private globeTexture!: THREE.DataTexture;
  private uncTexture!: THREE.DataTexture;
  private helmetTexture!: THREE.DataTexture;
  private codingTexture!: THREE.DataTexture;

  ngOnInit(): void {
    this.currentSection.set(this.sections[0].paragraph);
    this.currentSectionName.set(this.sections[0].name);
  }

  ngAfterViewInit(): void {
    this.initAbout();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
  }

  changeSection(index: number) {
    const section = this.sections[index];

    if (section.name === this.currentSectionName()) return;

    if (section.name === 'Introduction') {
      this.simMaterial.uniforms['targetPositions'].value = this.globeTexture;
    } else if (section.name === 'About Me') {
      this.simMaterial.uniforms['targetPositions'].value = this.uncTexture;
    } else if (section.name === 'Hobbies') {
      this.simMaterial.uniforms['targetPositions'].value = this.helmetTexture;
    }
    this.morphObject(section.name);
    this.currentSection.set(section.paragraph);
    this.currentSectionName.set(section.name);
  }

  morphObject(name: string) {
    this.simMaterial.uniforms['isMorphing'].value = true;
    this.uProgress = 0;

    const animateMorph = () => {
      this.uProgress += 0.01;

      this.simMaterial.uniforms['uProgress'].value = Math.min(
        this.uProgress,

        1.0
      );

      if (this.uProgress < 1.0) requestAnimationFrame(animateMorph);
      else {
        if (name === 'Introduction') {
          this.simRenderTarget.texture = this.globeTexture;
        } else if (name === 'About Me') {
          this.simRenderTarget.texture = this.uncTexture;
        } else if (name === 'Hobbies') {
          this.simRenderTarget.texture = this.helmetTexture;
        }
        this.simRenderTarget.texture.needsUpdate = true;
        this.simMaterial.uniforms['positions'].value = this.simRenderTarget.texture;
        this.simMaterial.uniforms['isMorphing'].value = false;
      }
    };

    animateMorph();
  }

  composeTransform(
    position?: THREE.Vector3,
    rotation?: THREE.Euler,
    scale?: THREE.Vector3
  ): THREE.Matrix4 {
    const matrix = new THREE.Matrix4();
    const obj = new THREE.Object3D();
    if (position) obj.position.copy(position);
    if (rotation) obj.rotation.copy(rotation);
    if (scale) obj.scale.copy(scale);
    obj.updateMatrix();
    return obj.matrix.clone();
  }

  private initAbout() {
    this.aboutObserver = new IntersectionObserver(
      (entries) => {
        this.aboutVisible = entries[0].isIntersecting;
      },
      { threshold: 0.2 }
    );

    this.aboutObserver.observe(this.aboutRef.nativeElement);

    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(2);
    this.renderer.setClearColor(0x000000, 0);
    this.camera = new THREE.PerspectiveCamera(
      25,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 6);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.onResize();

    this.scene = new THREE.Scene();
    this.simCamera = new THREE.OrthographicCamera(
      -1,
      1,
      1,
      -1,
      1 / Math.pow(2, 53),
      1
    );
    const positions = new Float32Array([
      -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
    ]);
    const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);
    const particles = new Float32Array(this.simSize * this.simSize * 3);
    for (let i = 0; i < this.simSize * this.simSize; i++) {
      particles[i * 3 + 0] = (i % this.simSize) / this.simSize;
      particles[i * 3 + 1] = i / this.simSize / this.simSize;
    }

    this.simRenderTarget = new THREE.WebGLRenderTarget(
      this.simSize,
      this.simSize,
      {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        type: THREE.FloatType,
        depthBuffer: false,
      }
    );

    const simGeom = new THREE.BufferGeometry();
    simGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    simGeom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

    this.simScene = new THREE.Scene();

    Promise.all(
      this.paths.map(({ path, transform }) =>
        this.createObjTexture(path, this.simSize * this.simSize, transform)
      )
    ).then(([data1, data2, data3]) => {
      this.globeTexture = new THREE.DataTexture(
        data1,
        this.simSize,
        this.simSize,
        THREE.RGBAFormat,
        THREE.FloatType
      );

      this.uncTexture = new THREE.DataTexture(
        data2,
        this.simSize,
        this.simSize,
        THREE.RGBAFormat,
        THREE.FloatType
      );

      this.helmetTexture = new THREE.DataTexture(
        data3,
        this.simSize,
        this.simSize,
        THREE.RGBAFormat,
        THREE.FloatType
      );

      this.globeTexture.needsUpdate = true;
      this.uncTexture.needsUpdate = true;
      this.helmetTexture.needsUpdate = true;

      this.positionsTexture = this.globeTexture;
      this.positionsTexture.needsUpdate = true;

      this.simMaterial = this.getSimMaterial(this.positionsTexture);
      const simMesh = new THREE.Mesh(simGeom, this.simMaterial);
      this.simScene.add(simMesh);

      const geom = new THREE.BufferGeometry();
      const colors = this.getColorArray();

      geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geom.setAttribute('position', new THREE.BufferAttribute(particles, 3));

      const uvs = new Float32Array(this.simSize * this.simSize * 2);
      for (let i = 0; i < this.simSize * this.simSize; i++) {
        uvs[i * 2 + 0] = (i % this.simSize) / this.simSize;
        uvs[i * 2 + 1] = Math.floor(i / this.simSize) / this.simSize;
      }
      geom.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

      this.pointsMaterial = this.getPointsMaterial();

      this.points = new THREE.Points(geom, this.pointsMaterial);
      this.scene.add(this.points);

      this.animate();
    });
  }

  objLoader = new OBJLoader();

  getSimMaterial(positionsTexture: THREE.DataTexture): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: `
      void main() {
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
      fragmentShader: `
      uniform sampler2D positions;
      uniform sampler2D targetPositions;
      uniform float uProgress;
      uniform bool isMorphing;

      void main() {
        vec2 uv = gl_FragCoord.xy / vec2(textureSize(positions, 0));
        vec3 pos = texture2D(positions, uv).rgb;
        vec3 target = texture2D(targetPositions, uv).rgb;
        vec3 finalPos = isMorphing ? mix(pos, target, uProgress) : pos;
        gl_FragColor = vec4(finalPos, 1.0);
      }
    `,
      uniforms: {
        positions: { value: positionsTexture },
        uProgress: { value: 0 },
        targetPositions: { value: positionsTexture },
        isMorphing: { value: false },
      },
    });
  }

  getPointsMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      uniforms: {
        positions: { value: this.simRenderTarget.texture },
      },
      blending: THREE.NormalBlending,
      depthWrite: false,
      transparent: true,
      vertexColors: true,
      vertexShader: `
          uniform sampler2D positions;

          varying vec3 vColor;

          void main() {
            vec3 pos = texture2D(positions, uv).xyz;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;

            gl_PointSize = 2.0;
            vColor = color;
          }`,
      fragmentShader: `
          varying vec3 vColor;
          void main() {
            gl_FragColor = vec4(1.0,1.0,1.0, 1.0);
          }`,
    });
  }

  getColorArray(): Float32Array {
    const colors = new Float32Array(this.simSize * this.simSize * 3);
    for (let i = 0; i < this.simSize * this.simSize; i++) {
      const i3 = i * 3;
      const useGold = Math.random() < 0.25;
      if (useGold) {
        colors[i3 + 0] = 0.0;
        colors[i3 + 1] = 1.0;
        colors[i3 + 2] = 1.0;
      } else {
        colors[i3 + 0] = 1.0; // R
        colors[i3 + 1] = 1.0; // G
        colors[i3 + 2] = 1.0; // B
      }
    }
    return colors;
  }

  createObjTexture(
    file: string,
    samples: number,
    transform?: THREE.Matrix4
  ): Promise<Float32Array> {
    return new Promise((resolve, reject) => {
      const data = new Float32Array(samples * 4);
      const allEdges: [THREE.Vector3, THREE.Vector3][] = [];

      this.objLoader.load(file, (globe) => {
        globe.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const scale = 1.4;
            child.geometry.computeBoundingBox();
            child.geometry.applyMatrix4(
              new THREE.Matrix4().makeScale(scale, scale, scale)
            );

            const edgeGeometry = new THREE.EdgesGeometry(child.geometry, 1);
            const edgePos = edgeGeometry.attributes['position'].array;

            for (let i = 0; i < edgePos.length; i += 6) {
              const a = new THREE.Vector3(
                edgePos[i],
                edgePos[i + 1],
                edgePos[i + 2]
              );
              const b = new THREE.Vector3(
                edgePos[i + 3],
                edgePos[i + 4],
                edgePos[i + 5]
              );
              allEdges.push([a, b]);
            }
          }
        });

        const allPositions: number[] = [];

        for (let i = allEdges.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allEdges[i], allEdges[j]] = [allEdges[j], allEdges[i]];
        }

        const totalEdges = allEdges.length;
        const samplesPerEdge = Math.max(1, Math.floor(samples / totalEdges));
        let totalSampled = 0;

        for (const [a, b] of allEdges) {
          const count = Math.min(samplesPerEdge, samples - totalSampled);
          for (let j = 0; j < count; j++) {
            const t = Math.random();
            const point = new THREE.Vector3().lerpVectors(a, b, t);
            if (transform) point.applyMatrix4(transform);
            allPositions.push(point.x, point.y, point.z);
            totalSampled++;
            if (totalSampled >= samples) break;
          }
          if (totalSampled >= samples) break;
        }

        for (let i = 0; i < totalSampled; i++) {
          data[i * 4 + 0] = allPositions[i * 3 + 0];
          data[i * 4 + 1] = allPositions[i * 3 + 1];
          data[i * 4 + 2] = allPositions[i * 3 + 2];
          data[i * 4 + 3] = 1.0;
        }

        resolve(data);
      });
    });
  }

  private animate = () => {
    this.frameId = requestAnimationFrame(this.animate);

    if (!this.aboutVisible) return;
    this.controls.update();
    const t = performance.now() * 0.001;
    if (this.points) {
      this.points.rotation.y += 0.002;
    }
    this.renderer.setRenderTarget(this.simRenderTarget);
    this.renderer.render(this.simScene, this.simCamera);
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.scene, this.camera);
  };

  private onResize = () => {
    const canvas = this.canvasRef.nativeElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    this.renderer.setSize(width, height, false);
    if (this.camera instanceof THREE.PerspectiveCamera) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  };
}
