import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css'],
})
export class ThreeSceneComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private points!: THREE.Points;
  private frameId = 0;
  private controls!: OrbitControls;

  // ─── NEW PROPERTIES ─────────────────────────────────────────────────────────
  private positions!: Float32Array; // keep reference to the buffer
  private count = 2000; // same as your loop
  private noise = new ImprovedNoise(); // Perlin noise generator

  ngAfterViewInit(): void {
    this.initThree();
    this.animate();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
  }

  private initThree() {
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setClearColor(0x000000, 0);
    this.onResize();

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // Build a sphere of points
    const radius = 2;
    this.positions = new Float32Array(this.count * 3);
    const colors = new Float32Array(this.count * 3);
    const alphas = new Float32Array(this.count);

    for (let i = 0; i < this.count; i++) {
      // random point on sphere
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      this.positions.set([x, y, z], i * 3);

      // random blue or gold
      const c =
        Math.random() < 0.5
          ? new THREE.Color(0x0000ff)
          : new THREE.Color(0xffd700);
      colors.set([c.r, c.g, c.b], i * 3);

      // random alpha
      alphas[i] = Math.random();
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: `
        attribute vec3 color;
        attribute float alpha;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = color;
          vAlpha = alpha;
          gl_PointSize = 4.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          if (dot(cxy, cxy) > 1.0) discard;
          gl_FragColor = vec4(vColor, vAlpha);
        }
      `,
    });

    // ← Assign to the class property so animate() sees it:
    this.points = new THREE.Points(geo, mat);
    this.scene.add(this.points);
  }

  private animate = () => {
    this.frameId = requestAnimationFrame(this.animate);
    this.controls.update();

    // ─── NEW: curl + noise motion per particle ──────────────────────────────
    const attr = this.points.geometry.attributes[
      'position'
    ] as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const t = performance.now() * 0.0005;
    const angle = 0.002;
    const c = Math.cos(angle),
      s = Math.sin(angle);

    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      let x = arr[i3],
        y = arr[i3 + 1],
        z = arr[i3 + 2];

      // simple swirl in XY
      const nx = x * c - y * s;
      const ny = x * s + y * c;

      // small Perlin‐based jitter
      const n1 = this.noise.noise(nx * 0.5 + t, ny * 0.5 + t, z * 0.5 + t);
      const n2 = this.noise.noise(ny * 0.5 - t, z * 0.5 + t, nx * 0.5 - t);
      const n3 = this.noise.noise(z * 0.5 - t, nx * 0.5 + t, ny * 0.5 + t);

      arr[i3] = nx + n1 * 0.02;
      arr[i3 + 1] = ny + n2 * 0.02;
      arr[i3 + 2] = z + n3 * 0.02;
    }
    attr.needsUpdate = true;
    // ────────────────────────────────────────────────────────────────────────

    // keep your original spin if you like, or comment out:
    this.points.rotation.x += 0.008;
    this.points.rotation.y += 0.008;

    this.renderer.render(this.scene, this.camera);
  };

  private onResize = () => {
    const canvas = this.canvasRef.nativeElement;
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setSize(width, height, false);
    if (this.camera) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  };
}
