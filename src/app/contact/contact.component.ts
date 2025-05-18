import { Component, ViewChild, ElementRef, signal } from '@angular/core';
import * as THREE from 'three';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

  ngAfterViewInit(): void {
    this.initContact();
    window.addEventListener('mousemove', this.updateMousePosition);

    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.updateMousePosition);
    this.renderer.dispose();
  }

  sendEmailTriggered = signal(false);
  emailSuccess = signal(false);
  isSending = signal(false);

  sendEmail(event: Event): void {
    event.preventDefault();
    this.isSending.set(true);
    emailjs
      .sendForm(
        'service_5ngpf3e',
        'template_g2rnp8p',
        event.target as HTMLFormElement,
        'SQCU20t7kVZpEjRV-'
      )
      .then(
        () => {
          this.sendEmailTriggered.set(true);
          this.emailSuccess.set(true);
          this.isSending.set(false); 
        },
        (error) => {
          this.sendEmailTriggered.set(true);
          this.isSending.set(false); 
          alert('Failed to send email. Please try again.');
        }
      );
  }

  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  @ViewChild('contact', { static: false }) contactRef!: ElementRef;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private frameId = 0;

  private contactObserver!: IntersectionObserver;
  private contactVisible = false;
  private points!: THREE.Points;
  private simScene!: THREE.Scene;
  private simCamera!: THREE.OrthographicCamera;
  private simMaterial!: THREE.ShaderMaterial;
  private simRenderTarget!: THREE.WebGLRenderTarget;
  private pointsMaterial!: THREE.ShaderMaterial;
  private simSize = 512;

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
    const data = new Float32Array(count * 4); // x, y, z only
    const p = new THREE.Vector3();
    for (let i = 0; i < count * 4; i += 4) {
      this.getPoint(p, size, data, i);
    }
    return data;
  }

  getSimMaterial(positionsTexture: THREE.DataTexture): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: `varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
      fragmentShader: `
        uniform sampler2D positions;
        uniform float uTime;
        uniform float uCurlFreq;
        varying vec2 vUv;
        uniform vec3 uMouseRayOrigin;
        uniform float uMouseRadius; 
        uniform vec3 uMouseRayDir;    
        
  
        vec3 mod289(vec3 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
  
        vec4 mod289(vec4 x) {
          return x - floor(x * (1.0 / 289.0)) * 289.0;
        }
  
        vec4 permute(vec4 x) {
            return mod289(((x*34.0)+1.0)*x);
        }
  
        vec4 taylorInvSqrt(vec4 r)
        {
          return 1.79284291400159 - 0.85373472095314 * r;
        }
  
        float snoise(vec3 v)
          {
          const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
          const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  
        // First corner
          vec3 i  = floor(v + dot(v, C.yyy) );
          vec3 x0 =   v - i + dot(i, C.xxx) ;
  
        // Other corners
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min( g.xyz, l.zxy );
          vec3 i2 = max( g.xyz, l.zxy );
  
          //   x0 = x0 - 0.0 + 0.0 * C.xxx;
          //   x1 = x0 - i1  + 1.0 * C.xxx;
          //   x2 = x0 - i2  + 2.0 * C.xxx;
          //   x3 = x0 - 1.0 + 3.0 * C.xxx;
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
          vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
  
        // Permutations
          i = mod289(i);
          vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                  + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
  
        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
          float n_ = 0.142857142857; // 1.0/7.0
          vec3  ns = n_ * D.wyz - D.xzx;
  
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)
  
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
  
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
  
          vec4 b0 = vec4( x.xy, y.xy );
          vec4 b1 = vec4( x.zw, y.zw );
  
          //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
          //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
  
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
  
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
  
        //Normalise gradients
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
  
        // Mix final noise value
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                        dot(p2,x2), dot(p3,x3) ) );
          }
  
        vec3 fade(vec3 t) {
          return t*t*t*(t*(t*6.0-15.0)+10.0);
        }
  
        // Classic Perlin noise
        float cnoise(vec3 P)
        {
          vec3 Pi0 = floor(P); // Integer part for indexing
          vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
          Pi0 = mod289(Pi0);
          Pi1 = mod289(Pi1);
          vec3 Pf0 = fract(P); // Fractional part for interpolation
          vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
          vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
          vec4 iy = vec4(Pi0.yy, Pi1.yy);
          vec4 iz0 = Pi0.zzzz;
          vec4 iz1 = Pi1.zzzz;
  
          vec4 ixy = permute(permute(ix) + iy);
          vec4 ixy0 = permute(ixy + iz0);
          vec4 ixy1 = permute(ixy + iz1);
  
          vec4 gx0 = ixy0 * (1.0 / 7.0);
          vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
          gx0 = fract(gx0);
          vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
          vec4 sz0 = step(gz0, vec4(0.0));
          gx0 -= sz0 * (step(0.0, gx0) - 0.5);
          gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  
          vec4 gx1 = ixy1 * (1.0 / 7.0);
          vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
          gx1 = fract(gx1);
          vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
          vec4 sz1 = step(gz1, vec4(0.0));
          gx1 -= sz1 * (step(0.0, gx1) - 0.5);
          gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  
          vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
          vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
          vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
          vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
          vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
          vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
          vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
          vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  
          vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
          g000 *= norm0.x;
          g010 *= norm0.y;
          g100 *= norm0.z;
          g110 *= norm0.w;
          vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
          g001 *= norm1.x;
          g011 *= norm1.y;
          g101 *= norm1.z;
          g111 *= norm1.w;
  
          float n000 = dot(g000, Pf0);
          float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
          float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
          float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
          float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
          float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
          float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
          float n111 = dot(g111, Pf1);
  
          vec3 fade_xyz = fade(Pf0);
          vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
          vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
          float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
          return 2.2 * n_xyz;
        }
          
        vec3 snoiseVec3(vec3 x) {
            float s  = snoise(x);
            float s1 = snoise(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));
            float s2 = snoise(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));
            return vec3(s, s1, s2);
          }
          
        vec3 curl(vec3 p) {
          float e = 0.1;
          vec3 dx = vec3(e, 0.0, 0.0);
          vec3 dy = vec3(0.0, e, 0.0);
          vec3 dz = vec3(0.0, 0.0, e);
  
          vec3 p_x0 = snoiseVec3(p - dx);
          vec3 p_x1 = snoiseVec3(p + dx);
          vec3 p_y0 = snoiseVec3(p - dy);
          vec3 p_y1 = snoiseVec3(p + dy);
          vec3 p_z0 = snoiseVec3(p - dz);
          vec3 p_z1 = snoiseVec3(p + dz);
  
          float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
          float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
          float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;
  
          return normalize(vec3(x, y, z) / (2.0 * e));
        }
            
        void main() {
          float t = uTime * 0.015;
          vec3 pos = texture2D(positions, vUv).rgb; // basic simulation: displays the particles in place.
          vec3 curlPos = texture2D(positions, vUv).rgb;
          pos = curl(pos * uCurlFreq + t);
          curlPos = curl(curlPos * uCurlFreq + t);
          curlPos += curl(curlPos * uCurlFreq * 2.0) * 0.5;
          curlPos += curl(curlPos * uCurlFreq * 4.0) * 0.25;
          curlPos += curl(curlPos * uCurlFreq * 8.0) * 0.125;
          curlPos += curl(pos * uCurlFreq * 16.0) * 0.0625;
          
          vec3 morphBase = mix(pos, curlPos, cnoise(pos + t));
          // Shortest distance from point to ray
          vec3 p = morphBase;
          vec3 o = uMouseRayOrigin;
          vec3 d = normalize(uMouseRayDir);

          vec3 v = p - o;

          float rayT = dot(v, d);
          vec3 closest = o + d * rayT;

          vec3 delta = p - closest;
          float distSq = dot(delta, delta);
          float threshold = uMouseRadius * uMouseRadius;

          if (distSq < threshold && morphBase.z > -1.0) {
            float strength = smoothstep(uMouseRadius * uMouseRadius, 0.0, distSq); // 0 → 1 as particle gets close
            vec3 offset = normalize(delta) * strength * 0.15; // scale down for subtle effect
            morphBase += offset;
          }
          vec3 translate = vec3(0,0.0,0.0);
          morphBase += translate;

          gl_FragColor = vec4(morphBase, 1.0);
        }
        `,
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uCurlFreq: { value: 0.31 },
        uMouseRayOrigin: { value: new THREE.Vector3() },
        uMouseRayDir: { value: new THREE.Vector3() },
        uMouseRadius: { value: 0.15 },
      },
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

  getPointsMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      uniforms: {
        positions: { value: this.simRenderTarget.texture },
        uTime: { value: 0 },
        uFocus: { value: 7 },
        uFov: { value: 14 },
        uBlur: { value: 8.1 },
      },
      blending: THREE.NormalBlending,
      depthWrite: false,
      transparent: true,
      vertexColors: true,
      vertexShader: `
          uniform sampler2D positions;
          uniform float uTime;
          uniform float uFocus;
          uniform float uFov;
          uniform float uBlur;
          varying float vDistance;
          varying vec3 vColor;
          void main() { 
            vec3 pos = texture2D(positions, position.xy).xyz;
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            vDistance = abs(uFocus - -mvPosition.z);
            float factor = (step(1.0 - (1.0 / uFov), position.x));
            gl_PointSize = factor * vDistance * uBlur * 3.0;
            vColor = color;
          }`,
      fragmentShader: `uniform float uOpacity;
          varying float vDistance;
          varying vec3 vColor;
          void main() {
            vec2 cxy = 2.0 * gl_PointCoord - 1.0;
            if (dot(cxy, cxy) > 1.0) discard;
            gl_FragColor = vec4(vColor, (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));
          }`,
    });
  }

  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private mouse3D = new THREE.Vector3();
  private mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1);
  private mouseRayOrigin = new THREE.Vector3();
  private mouseRayDirection = new THREE.Vector3();

  private updateMousePosition = (event: MouseEvent) => {
    if (!this.contactVisible) return;

    const canvasBounds = this.canvasRef.nativeElement.getBoundingClientRect();

    // Ignore interaction if mouse is outside the canvas
    if (
      event.clientX < canvasBounds.left ||
      event.clientX > canvasBounds.right ||
      event.clientY < canvasBounds.top ||
      event.clientY > canvasBounds.bottom
    ) {
      return;
    }

    // Convert to normalized device coordinates relative to the canvas
    this.mouse.x =
      ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
    this.mouse.y =
      -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.mouseRayOrigin.copy(this.raycaster.ray.origin);
    this.mouseRayDirection.copy(this.raycaster.ray.direction);

    this.simMaterial.uniforms['uMouseRayOrigin'].value.copy(
      this.mouseRayOrigin
    );
    this.simMaterial.uniforms['uMouseRayDir'].value.copy(
      this.mouseRayDirection
    );
  };

  private initContact() {
    this.contactObserver = new IntersectionObserver(
      (entries) => {
        this.contactVisible = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );

    this.contactObserver.observe(this.contactRef.nativeElement);
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(2);
    this.renderer.setClearColor(0x000000, 0);
    this.camera = new THREE.PerspectiveCamera(
      25, // Match React camera FOV
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 6);
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

    const sphereData = this.getSphere(
      this.simSize * this.simSize,
      this.simSize / 4
    );

    const positionsTexture = new THREE.DataTexture(
      sphereData,
      this.simSize,
      this.simSize,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    positionsTexture.needsUpdate = true;

    this.simMaterial = this.getSimMaterial(positionsTexture);
    const simMesh = new THREE.Mesh(simGeom, this.simMaterial);
    this.simScene.add(simMesh);

    const geom = new THREE.BufferGeometry();
    const colors = this.getColorArray();

    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geom.setAttribute('position', new THREE.BufferAttribute(particles, 3));

    this.pointsMaterial = this.getPointsMaterial();

    this.points = new THREE.Points(geom, this.pointsMaterial);
    this.scene.add(this.points);

    this.animate();
  }

  private animate = () => {
    this.frameId = requestAnimationFrame(this.animate);

    if (!this.contactVisible) return;
    const t = performance.now() * 0.001;
    this.simMaterial.uniforms['uTime'].value = t * 15;
    this.pointsMaterial.uniforms['uTime'].value = t * 15;

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
