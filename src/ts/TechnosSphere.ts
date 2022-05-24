import * as THREE from 'three';
import Smooter from './Smoother';
import ImVisible from './ImVisible';

export default class TechnosSphere extends THREE.Object3D {
  private center = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 2), new THREE.MeshLambertMaterial({ wireframe: true }));
  private images = new THREE.Object3D();

  private imVisible = new ImVisible(document.getElementById('about')!, {
    beforeOffset: -50,
    afterOffset: -50,
    fadeIn: 100,
    fadeOut: 150,
    trigger: window.innerHeight / 2,
  });

  private zPos = new Smooter(0);

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
      [-b, 0, a],
      [b, 0, a],
      [-b, 0, -a],
      [b, 0, -a],
      [0, a, b],
      [0, a, -b],
      [0, -a, b],
      [0, -a, -b],
      [a, b, 0],
      [-a, b, 0],
      [a, -b, 0],
      [-a, -b, 0],
    ];

    const technos: Promise<any>[] = [
      import('../images/techno/graphql.svg?url'),
      import('../images/techno/mongodb.svg?url'),
      import('../images/techno/nextjs.svg?url'),
      import('../images/techno/nodejs.svg?url'),
      import('../images/techno/nuxtjs.svg?url'),
      import('../images/techno/reactjs.svg?url'),
      import('../images/techno/sass.svg?url'),
      import('../images/techno/typescript.svg?url'),
      import('../images/techno/vercel.svg?url'),
      import('../images/techno/vuejs.svg?url'),
      import('../images/techno/github.svg?url'),
      import('../images/techno/javascript.svg?url'),
    ];

    Promise.all(technos).then((modules) =>
      modules
        .map((m) => m.default)
        .forEach((url, index) => {
          new THREE.TextureLoader().load(url, (texture) => {
            texture.image.setAttribute('aria-hidden', 'true');
            document.getElementById('hidden')!.appendChild(texture.image);
            const plane = new THREE.Mesh(
              new THREE.PlaneGeometry(0.15, (0.15 * texture.image.height) / texture.image.width),
              new THREE.MeshLambertMaterial({ map: texture, transparent: true })
            );
            //const plane = new THREE.Mesh(new THREE.PlaneGeometry(.15, .15), new THREE.MeshNormalMaterial());
            //const plane = new THREE.Mesh(new THREE.BoxGeometry(.15, .15, .15), new THREE.MeshLambertMaterial({ map: texture, transparent: true }));
            plane.position.set(vertices[index][0], vertices[index][1], vertices[index][2]);
            this.images.add(plane);
          });
        })
    );
  }

  scroll() {
    this.zPos.value = this.imVisible.value * 2;
  }

  resize() {
    if (window.innerWidth >= 600) {
      this.position.x = 1;
      this.scale.set(1, 1, 1);
    } else {
      this.position.x = 0.5;
      this.scale.set(0.5, 0.5, 0.5);
    }
  }

  render(time: number) {
    this.position.z = this.zPos.value;
    this.images.rotation.set(Math.sin(time * 0.0003), time * 0.0005, 0);
    this.images.children.forEach((m) => {
      m.lookAt(new THREE.Vector3(0, 0, 50));
    });
    this.center.rotation.y = -1 * time * 0.0004;
  }
}
