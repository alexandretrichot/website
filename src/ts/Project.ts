import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const raf = requestAnimationFrame || webkitRequestAnimationFrame;

export default class Project {
  private renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  private camera = new THREE.PerspectiveCamera(45, 1, .01, 50);
  private scene = new THREE.Scene();

  private pointLight = new THREE.PointLight('white', 1);

  private group = new THREE.Object3D();

  private container: HTMLElement;
  private screenshot: string;

  constructor(container: HTMLElement, screenshot: string) {
    this.container = container;
    this.screenshot = screenshot;

    // init
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);

    this.camera.position.set(0, 0, 3);
    this.scene.fog = new THREE.Fog("#111111", 1, 4);

    this.pointLight.position.set(1, 2, 5);
    this.scene.add(this.pointLight);

    this.scene.add(this.group);

    this.load();

    this.resize();

    raf(this.render.bind(this));
  }

  private load() {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://threejs.org/examples/js/libs/draco/');
    dracoLoader.preload();
    loader.setDRACOLoader(dracoLoader);

    loader.loadAsync('/3d/iPhoneMockup.gltf').then(gltf => {
      const iPhoneMesh = gltf.scene;

      iPhoneMesh.scale.multiplyScalar(5);
      iPhoneMesh.position.x = - .065
      iPhoneMesh.position.y = - .005

      this.group.add(iPhoneMesh);

    }).catch(err => console.error(err.message));

    const roundedRectShape = new THREE.Shape();
    (function roundedRect(ctx, width, height, radius) {
      const x = 0;
      const y = 0;

      ctx.moveTo(x, y + radius);
      ctx.lineTo(x, y + height - radius);
      ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
      ctx.lineTo(x + width - radius, y + height);
      ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
      ctx.lineTo(x + width, y + radius);
      ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
      ctx.lineTo(x + radius, y);
      ctx.quadraticCurveTo(x, y, x, y + radius);

    })(roundedRectShape, .375, .723, .03);

    new THREE.TextureLoader().load(this.screenshot, texture => {

      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(.375, .723),
        new THREE.MeshPhysicalMaterial({ map: texture, transparent: true })
      );

      plane.position.z = .022;

      this.group.add(plane);
    });

    this.group.rotation.set(-.6, .3, .3);
    this.group.position.z = 2;
  }

  resize() {
    this.renderer.setSize(this.container.clientWidth, this.container.clientWidth);
    this.camera.updateProjectionMatrix();
  }

  render() {
    raf(this.render.bind(this));
    const time = performance.now();

    this.group.position.y = Math.sin(time * .001) * .03 + .05;

    this.renderer.render(this.scene, this.camera);
  }
}