import {
  Component,
  AfterViewInit,
  ViewChild,
  OnDestroy,
  ElementRef,
} from '@angular/core';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';


export interface Skill {
  icon: string;
  mesh?: THREE.Object3D;
  baseY: number;
  hoverRotation: number;
  idleRotationY: number;
  spinRotationY: number;
  spinRemaining: number;
  isHovered: boolean;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  skills: Skill[] = [
    {
      icon: '/assets/skills/csharp.png',
      hoverRotation: 0,
      isHovered: false,
      idleRotationY: 0,
      spinRotationY: 0,
      spinRemaining: 0,
      baseY: 0,
    },
    {
      icon: '/assets/skills/cplusplus.png',
      hoverRotation: 0,
      isHovered: false,
      idleRotationY: 0,
      spinRotationY: 0,
      spinRemaining: 0,
      baseY: 0,
    },
    {
      icon: '/assets/skills/angular.webp',
      hoverRotation: 0,
      isHovered: false,
      idleRotationY: 0,
      spinRotationY: 0,
      spinRemaining: 0,
      baseY: 0,
    },
    {
      icon: '/assets/skills/typescript.png',
      hoverRotation: 0,
      isHovered: false,
      idleRotationY: 0,
      spinRotationY: 0,
      spinRemaining: 0,
      baseY: 0,
    },
    {
      icon: '/assets/skills/html.png',
      hoverRotation: 0,
      isHovered: false,
      idleRotationY: 0,
      spinRotationY: 0,
      spinRemaining: 0,
      baseY: 0,
    },
    {
      icon: '/assets/skills/css.svg',
      hoverRotation: 0,
      isHovered: false,
      idleRotationY: 0,
      spinRotationY: 0,
      spinRemaining: 0,
      baseY: 0,
    },
    {
      icon: '/assets/skills/tensorflow.png',
      hoverRotation: 0,
      isHovered: false,
      idleRotationY: 0,
      spinRotationY: 0,
      spinRemaining: 0,
      baseY: 0,
    },
    {
      icon: '/assets/skills/psql.png',
      hoverRotation: 0,
      isHovered: false,
      idleRotationY: 0,
      spinRotationY: 0,
      spinRemaining: 0,
      baseY: 0,
    },
    {
      icon: '/assets/skills/git.png',
      hoverRotation: 0,
      isHovered: false,
      idleRotationY: 0,
      spinRotationY: 0,
      spinRemaining: 0,
      baseY: 0,
    },
  ];

  ngAfterViewInit(): void {
    this.initSkills();
    this.canvasRef.nativeElement.addEventListener(
      'pointermove',
      this.onPointerMove
    );
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
  }

  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  private frameId = 0;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private decals: Map<string, THREE.Texture> = new Map();
  private raycaster!: THREE.Raycaster;
  private pointer!: THREE.Vector2;
  private sectionVisible: boolean = false;
  private sectionObserver!: IntersectionObserver;

  preloadTextures(): Promise<void> {
    const loader = new THREE.TextureLoader();

    const loadPromises = this.skills.map(
      (skill) =>
        new Promise<void>((resolve) => {
          loader.load(skill.icon, (texture) => {
            this.decals.set(skill.icon, texture);
            resolve();
          });
        })
    );

    return Promise.all(loadPromises).then(() => {});
  }

  private createCoinWithDecal(
    texture: THREE.Texture,
    position: THREE.Vector3
  ): THREE.Object3D {
    const group = new THREE.Group();

    const coinMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff, // no tint
      metalness: 0.0, // dielectric
      roughness: 0.0, // razor‑sharp highlights
      transmission: 1.0, // full refraction
      thickness: 0.01, // thin pane
      ior: 1.52, // crown‑glass

      // → BOOST SPECULAR RESPONSE ←
      clearcoat: 3.0, // extra glossy varnish layer
      clearcoatRoughness: 0.0, // perfectly smooth clearcoat
      specularIntensity: 7.0, // 3× the default dielectric F0
      specularColor: new THREE.Color(0xffffff),
    });

    // Create coin
    const coin = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 0.6, 0.1, 64),
      coinMaterial
    );
    coin.rotation.x = Math.PI / 2; // 90 degrees

    group.add(coin);

    const imageAspect = texture.image.width / texture.image.height;
    const baseSize = 0.8;

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(baseSize * imageAspect, baseSize),
      new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        toneMapped: false,
      })
    );

    // Position it just above the coin
    plane.position.set(0, 0.0, 0.1); // Slightly above the top face
    group.add(plane);
    const backPlane = plane.clone();
    backPlane.rotation.y = Math.PI;
    backPlane.position.set(0, 0, -0.1);
    group.add(backPlane);
    group.position.copy(position);
    return group;
  }

  onPointerMove = (event: PointerEvent) => {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);
    const intersects = this.raycaster.intersectObjects(
      this.skills
        .map((s) => s.mesh)
        .filter((m): m is THREE.Object3D => m !== undefined),
      true
    );

    this.skills.forEach((skill) => {
      if (intersects.find((i) => i.object.parent === skill.mesh)) {
        if (!skill.isHovered) {
          if (skill.spinRemaining <= 0) {
            skill.spinRemaining = Math.PI * 2; // 2 full turns
          }
        }
      }
    });
  };

  async initSkills() {
    // this.sectionObserver = new IntersectionObserver(
    //   (entries) => {
    //     this.sectionVisible = entries[0].isIntersecting;
    //   },
    //   { threshold: 0.1 }
    // );

    // this.sectionObserver.observe(this.sectionRef.nativeElement);
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(2);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;

    this.camera = new THREE.PerspectiveCamera(
      25,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 25);
    this.onResize();

    this.scene = new THREE.Scene();

    // HDR Environment map (equirectangular)
    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();

    // Lights
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 5);
    hemi.position.set(0, 20, 0);
    this.scene.add(hemi);

    const keyLight = new THREE.DirectionalLight(0xffffff, 100.0);
    keyLight.position.set(5, 10, 7.5);
    keyLight.castShadow = true;
    this.scene.add(keyLight);

    await this.preloadTextures();
    let angle = 0;
    this.skills.forEach((skill, i) => {
      angle += (2 * Math.PI) / this.skills.length;
      const x = 3 * Math.cos(angle);
      const y = 3 * Math.sin(angle);
      const texture = this.decals.get(skill.icon);
      if (texture) {
        const coinGroup = this.createCoinWithDecal(
          texture,
          new THREE.Vector3(x, y, 0)
        );
        this.scene.add(coinGroup);
        skill.mesh = coinGroup;
        skill.baseY = skill.mesh.position.y;
        skill.hoverRotation = 0;
        skill.isHovered = false;
      }
    });

    this.animateSkills();
  }

  animateSkills = () => {
    this.frameId = requestAnimationFrame(this.animateSkills);
    const t = performance.now() * 0.001;

    //if (!this.sectionVisible) return;

    this.skills.forEach((skill) => {
      if (!skill.mesh) return;

      // 1. Bobbing (resets every frame to avoid drift)
      skill.mesh.position.y = skill.baseY + Math.sin(t * 2) * 0.1;

      // 2. Idle rotation
      skill.idleRotationY = Math.sin(t * 2) * 0.6;

      // 3. Hover spin animation
      if (skill.spinRemaining > 0) {
        console.log(skill.spinRemaining);
        var step = 0.1;
        skill.spinRotationY += step;
        skill.spinRemaining -= step;
        skill.hoverRotation += step;
      } else if (skill.hoverRotation > 0) {
        // ✅ Clean up after spin is done
        skill.hoverRotation = 0;
        skill.spinRotationY = 0;
        skill.isHovered = false;
        ``;
      }

      // 4. Final rotation is idle + hover spin
      skill.mesh.rotation.y = skill.idleRotationY + skill.spinRotationY;
    });

    this.renderer.render(this.scene, this.camera);
  };

  onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setSize(width, height, false);
    if (this.camera instanceof THREE.PerspectiveCamera) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  };
}
