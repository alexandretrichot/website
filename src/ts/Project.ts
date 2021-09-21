import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default class Project {
  private renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  private camera = new THREE.PerspectiveCamera(45, 1, .01, 50);
  private controls = new OrbitControls(this.camera, this.renderer.domElement);

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

    this.camera.position.set(0, 0, 1.2);
    this.controls.enablePan = false;
		this.controls.enableZoom = false; 
		this.controls.enableDamping = true;
		this.controls.minPolarAngle = 0.8;
		this.controls.maxPolarAngle = 2.4;
		this.controls.dampingFactor = 0.2;
		this.controls.rotateSpeed = 1;

    this.scene.fog = new THREE.Fog("#111111", 1, 4);

    this.scene.add(this.pointLight, this.group);
    this.scene.rotation.set(-.6, .3, .3);

    this.load();

    this.resize();

    requestAnimationFrame(this.render.bind(this));
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
  }

  resize() {
    this.renderer.setSize(this.container.clientWidth, this.container.clientWidth);
    this.camera.updateProjectionMatrix();
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    const time = performance.now();

    this.group.position.y = Math.sin(time * .001) * .03 + .05;

    this.controls.update();
    this.pointLight.position.copy(this.camera.position);
    this.renderer.render(this.scene, this.camera);
  }
}