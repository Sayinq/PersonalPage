import React, { Suspense, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import mouseObject from '../assets/objects/gaming_mouse.glb';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function MouseModel() {
  const gltf = useLoader(GLTFLoader, mouseObject);
  const { scene } = useThree();

  useEffect(() => {
    // Initial model transformations
    gltf.scene.scale.set(2, 2, 2);
    gltf.scene.rotation.z = 0.25;
    gltf.scene.rotation.x = Math.PI / 2;
    gltf.scene.rotation.y = 240;

    gsap.to(gltf.scene.rotation, {
      z: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#mouse-canvas',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.from(gltf.scene.position, {
      x: 30,
      opacity: 0,
      duration: 0.5,
      ease: 'sine.out',
      scrollTrigger: {
        trigger: '#mouse-canvas',
        start: 'top center',
        end: 'center center',
      },
    });
  }, []);

  return (
    <>
      <primitive object={gltf.scene} />
      <pointLight position={[0, 0, 10]} intensity={1} color="white" />
    </>
  );
}

function MouseCanvas() {
  return (
    <div id="mouse-canvas" className="absolute md:flex hidden 4xl:left-[900px] 3xl:left-[600px] 2xl:left-[300px] xl:left-[200px] lg:left-[150px] md:left-[0px] 3xl:scale-[100%] xl:scale-[90%] sm:scale-75 xl:-top-20 sm:-top-5 w-[1000px] h-[1000px]">
      <Canvas>
        <ambientLight intensity={4} />
        <directionalLight castShadow intensity={2} position={[-20, 6, 6]} shadow-mapSize={[1024, 1024]}>
            <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight>
        <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} up={[0, 0, 1]} fov={75} near={0.1} far={1000} />
        <MouseModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default MouseCanvas;





