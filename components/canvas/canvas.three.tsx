import React, { useEffect, useRef } from 'react';
import { render } from 'react-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styles from './canvas.module.scss';

const canvasThree = () => {
  let requestId: number;
  let width: number;
  let height: number;
  let aspectRatio: number;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let controls: OrbitControls;
  let renderer: THREE.WebGLRenderer;
  let cube: THREE.Mesh;
  let material: THREE.MeshPhongMaterial;

  const stageRef = useRef<HTMLDivElement>(null);
  const [stateWidth, setWidth] = React.useState(0);
  const [stateHeight, setHeight] = React.useState(0);

  useEffect(() => {
    setup(stageRef.current as HTMLElement)
    addObjects();
    startLoop();
    window.addEventListener('resize', resize)
  }, [])

  const setup = (element: HTMLElement) => {
    width = element.clientWidth;
    height = element.clientHeight;
    aspectRatio = width / height;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      aspectRatio,
      .1,
      1000
    );
    camera.position.setZ(5);
    controls = new OrbitControls(camera, element);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    element.appendChild(renderer.domElement);
    console.log(`Other data: `, element);
  }

  const addObjects = () => {
    const geometry = new THREE.BoxGeometry(2,2,2);
    const material = new THREE.MeshPhongMaterial({
      color: 'green',
      emissive: 0x072534,
      side: THREE.DoubleSide,
      flatShading: true
    });

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);
  };

  const startLoop = () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    requestId = window.requestAnimationFrame(startLoop);
  }

  const resize = () => {
    const element = stageRef.current as HTMLElement;
    const width = element.clientWidth;
    const height = element.clientHeight;
    const aspectRatio = width / height;
    console.log(`The stage is ${width} by ${height}`);
    // console.log(`The parent is ${element.parentElement?.clientWidth} by ${element.parentElement?.clientHeight}`);

    setWidth(width);
    setHeight(height);
    console.log(`The stage is ${stateWidth} by ${stateHeight}`);

    renderer.setSize(stateWidth, stateHeight);
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
  }

  return (
    <div className={`${styles.stage} stage`} ref={stageRef} />
  )
}

export default canvasThree;
