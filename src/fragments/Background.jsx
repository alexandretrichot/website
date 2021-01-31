import React from "react";
import * as THREE from "three";

export default function Background(props) {
  const container = React.useRef();
  const requestRef = React.useRef();

  React.useEffect(() => {
    const div = container.current;

    /* --------------------------- */

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 12);

    // lights
    {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 5, 1000);
      pointLight.position.set(500, 0, 0);
      scene.add(pointLight);
      scene.add(new THREE.PointLightHelper(pointLight));
    }

    /* handle the mouse movement */
    let mouseX = 0, mouseY = 0;

    const update = () => {
      //const time = performance.now() * 0.0005;

      // camera
      camera.position.set(
        camera.position.x + (-mouseX - camera.position.x) * 0.2,
        camera.position.y + (mouseY - camera.position.y) * 0.2,
        12
      );
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    const animate = () => {
      update();
      requestRef.current = requestAnimationFrame(animate);
    };

    /* --------------------------- */

    // cursor tracker
    function mouseMoveHandler(ev) {
      mouseX = (ev.clientX - window.innerWidth / 2) / 50;
      mouseY = (ev.clientY - window.innerHeight / 2) / 50;
    }

    window.addEventListener("mousemove", mouseMoveHandler);

    // resize
    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resize);
    resize();

    div.appendChild(renderer.domElement);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      div.removeChild(renderer.domElement);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  console.log("render background");

  return <div className="Background" ref={container}></div>;
}
