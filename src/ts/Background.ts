import * as THREE from "three";
import Smooter from "./Smoother";
import TechnosSphere from "./TechnosSphere";

const raf = requestAnimationFrame || webkitRequestAnimationFrame;
const caf = cancelAnimationFrame || webkitCancelAnimationFrame;

export default class Background {
  private requestedFrameId: number;

  private renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  private camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .01, 50);
  private scene = new THREE.Scene();

  private mouseX = new Smooter(0);
  private mouseY = new Smooter(0);

  // lights
  private pointLight = new THREE.PointLight('white', 1.5);

  private technosSphere = new TechnosSphere();

  constructor(container: HTMLElement) {

    // init
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    this.camera.position.set(0, 0, 3);
    this.scene.fog = new THREE.Fog("#111111", 1, 4);

    this.pointLight.position.set(1, 2, 5);
    this.scene.add(this.pointLight);

    this.scene.add(this.technosSphere);

    this.resize();

    window.addEventListener('mousemove', (ev: MouseEvent) => {
      this.mouseX.value = (ev.clientX * 2 - window.innerWidth) / window.innerWidth;
      this.mouseY.value = (ev.clientY * 2 - window.innerHeight) / window.innerHeight;
    });
  }

  resize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.technosSphere.resize();
  }

  scroll() {
    this.technosSphere.scroll();
  }

  private render() {
    const time = performance.now();

    this.requestedFrameId = raf(this.render.bind(this));

    this.technosSphere.render(time);

    this.camera.position.set(this.mouseX.value * -.2, this.mouseY.value * .2, this.camera.position.z);

    this.renderer.render(this.scene, this.camera);
  }

  play() {
    this.requestedFrameId = raf(this.render.bind(this));
  }

  stop() {
    caf(this.requestedFrameId);
  }
}
