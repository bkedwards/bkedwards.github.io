declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera } from 'three';
  export class OrbitControls {
    constructor(camera: Camera, domElement?: HTMLElement);
    update(): boolean;
    enableDamping: boolean;
    dampingFactor: number;
    // add any other props you need…
  }
}

declare module '*.frag';
