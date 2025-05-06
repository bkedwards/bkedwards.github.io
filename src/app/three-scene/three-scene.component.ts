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
  private originalPositions!: Float32Array;
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

  getPoint(
    v: THREE.Vector3,
    size: number,
    data: Float32Array,
    offset: number
  ): any {
    v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
    if (v.length() > 1) return this.getPoint(v, size, data, offset);
    return v.normalize().multiplyScalar(size).toArray(data, offset);
  }

  getSphere(count: number, size: number): Float32Array {
    const data = new Float32Array(count * 3); // x, y, z only
    const p = new THREE.Vector3();
    for (let i = 0; i < count * 3; i += 3) {
      this.getPoint(p, size, data, i);
    }
    return data;
  }

  computeCurlNoise(x: number, y: number, z: number, scale = 1): THREE.Vector3 {
    const eps = 0.01;
    const dx = eps;
    const dy = eps;
    const dz = eps;

    const noise = this.noise; // Assume it's a Perlin-like 3D noise

    const dF_dy_z = noise.noise(x, y + dy, z) - noise.noise(x, y - dy, z);
    const dF_dz_y = noise.noise(x, y, z + dz) - noise.noise(x, y, z - dz);
    const dF_dz_x = noise.noise(x + dx, y, z) - noise.noise(x - dx, y, z);
    const dF_dx_z = noise.noise(x, y, z + dz) - noise.noise(x, y, z - dz);
    const dF_dx_y = noise.noise(x, y + dy, z) - noise.noise(x, y - dy, z);
    const dF_dy_x = noise.noise(x + dx, y, z) - noise.noise(x - dx, y, z);

    const curlX = (dF_dz_y - dF_dy_z) * 0.5;
    const curlY = (dF_dx_z - dF_dz_x) * 0.5;
    const curlZ = (dF_dy_x - dF_dx_y) * 0.5;

    return new THREE.Vector3(curlX, curlY, curlZ).multiplyScalar(scale);
  }

  computeMultiOctaveCurl(
    x: number,
    y: number,
    z: number,
    baseFreq = 0.25,
    octaves = 4,
    baseScale = 0.02
  ): THREE.Vector3 {
    let curl = new THREE.Vector3();
    let freq = baseFreq;
    let amp = 1.0;
    let totalAmp = 0.0;

    for (let i = 0; i < octaves; i++) {
      const scaledX = x * freq;
      const scaledY = y * freq;
      const scaledZ = z * freq;
      const c = this.computeCurlNoise(
        scaledX,
        scaledY,
        scaledZ,
        baseScale * amp
      );
      curl.add(c);
      totalAmp += amp;
      freq *= 2.0;
      amp *= 0.5; // Halve amplitude each octave
    }

    curl.divideScalar(totalAmp); // Optional: normalize total amplitude
    return curl;
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
    this.positions = this.getSphere(this.count, radius);
    const colors = new Float32Array(this.count * 3);
    const alphas = new Float32Array(this.count);

    if (!this.originalPositions) {
      this.originalPositions = this.positions.slice(); // shallow clone of Float32Array
    }

    for (let i = 0; i < this.count; i++) {
      const c =
        Math.random() < 0.5
          ? new THREE.Color(0x0000ff)
          : new THREE.Color(0xffd700);
      colors.set([c.r, c.g, c.b], i * 3);

      alphas[i] = Math.random();
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

    const positionsTexture = new THREE.DataTexture(
      this.getSphere(512 * 512, 128),
      512,
      512,
      THREE.RGBAFormat,
      THREE.FloatType
    );

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uFocus: { value: 7 },
        uFov: { value: 14 },
        uBlur: { value: 8.1 },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uFocus;
        uniform float uFov;
        uniform float uBlur;
        varying vec3 vColor;
        varying float vAlpha;
        varying float vDistance;

        void main() {
          vec3 pos = position;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          vDistance = abs(uFocus - -mvPosition.z);
          gl_PointSize = vDistance * uBlur * 2.0;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vDistance;

        void main() {
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          if (dot(cxy, cxy) > 1.0) discard;

          gl_FragColor = vec4(vec3(0.2, 0.6, 1.0), (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));
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
      const x = this.originalPositions[i3];
      const y = this.originalPositions[i3 + 1];
      const z = this.originalPositions[i3 + 2];

      // Apply swirl in XY
      const nx = x * c - y * s;
      const ny = x * s + y * c;
      const nz = z;

      // Multi-octave curl noise like in the GLSL shader
      const curl = this.computeMultiOctaveCurl(
        nx + t,
        ny + t,
        nz + t,
        5,
        10,
        10
      );

      arr[i3] = nx + curl.x;
      arr[i3 + 1] = ny + curl.y;
      arr[i3 + 2] = nz + curl.z;
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
