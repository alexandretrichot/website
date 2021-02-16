import * as THREE from 'three';
import Smooter from './Smoother';
import ImVisible from './ImVisible';

export default class TechnosSphere extends THREE.Object3D {
  private center = new THREE.Mesh(new THREE.IcosahedronGeometry(.7, 2), new THREE.MeshLambertMaterial({ wireframe: true }))
  private images = new THREE.Object3D();

  private imVisible = new ImVisible(document.getElementById('about'), {
    beforeOffset: -50,
    afterOffset: -50,
    fadeIn: 100,
    fadeOut: 150,
    trigger: window.innerHeight / 2,
  });

  private zPos = new Smooter(-2);

  constructor() {
    super();

    this.center.rotation.set(-1, 0, 2);
    this.add(this.center);

    this.buildImages();
    this.add(this.images);
  }

  buildImages() {
    const PHI = Math.sqrt(5) - 1;
    const a = 1 / PHI;
    const b = a / PHI;
    const vertices: number[][] = [
      [-b, 0, a,],
      [b, 0, a,],
      [-b, 0, -a,],
      [b, 0, -a,],
      [0, a, b,],
      [0, a, -b,],
      [0, -a, b,],
      [0, -a, -b,],
      [a, b, 0,],
      [-a, b, 0,],
      [a, -b, 0,],
      [-a, -b, 0,],
    ];

    const technos: string[] = [
      require('../images/techno/graphql.svg'),
      require('../images/techno/mongodb.svg'),
      require('../images/techno/nextjs.svg'),
      require('../images/techno/nodejs.svg'),
      require('../images/techno/nuxtjs.svg'),
      require('../images/techno/reactjs.svg'),
      require('../images/techno/sass.svg'),
      require('../images/techno/typescript.svg'),
      require('../images/techno/vercel.svg'),
      require('../images/techno/vuejs.svg'),
      require('../images/techno/github.svg'),
      require('../images/techno/javascript.svg'),
    ];

    technos.forEach((url, index) => new THREE.TextureLoader().load(url, texture => {
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(.15, .15 * texture.image.height / texture.image.width), new THREE.MeshLambertMaterial({ map: texture, transparent: true }));
      plane.position.set(vertices[index][0], vertices[index][1], vertices[index][2]);
      this.images.add(plane);
    }));
  }

  scroll() {
    this.zPos.value = this.imVisible.value * 2 - 2;
  }

  resize() {
    if (window.innerWidth >= 600) {
      this.position.x = 1;
      this.scale.set(1, 1, 1);
    } else {
      this.position.x = 0.5;
      this.scale.set(.5, .5, .5);
    }
  }

  render(time: number) {
    this.position.z = this.zPos.value;
    this.images.rotation.set(Math.sin(time * 0.0003), time * 0.0005, 0);
    this.images.children.forEach(m => {
      m.lookAt(new THREE.Vector3(0, 0, 50));
    });
    this.center.rotation.y = -1 * time * 0.0004;
  }
}