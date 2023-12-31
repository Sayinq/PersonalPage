import React, { Suspense, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import keyboardObject from '../assets/objects/mechanical_keyboard.glb';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Model() {
  const gltf = useLoader(GLTFLoader, keyboardObject);

  useEffect(() => {
    // Initial model transformations
    gltf.scene.scale.set(7, 7, 7);
    gltf.scene.rotation.z = 0.25;
    gltf.scene.rotation.x = Math.PI / 2;
    gltf.scene.rotation.y = 240;

    // Animate the rotation.z property
    gsap.to(gltf.scene.rotation, {
      z: 2, 
      ease: 'power1.inOut', 
      scrollTrigger: {
        trigger: '#canvas', 
        start: 'top center+=100', 
        end: 'bottom center', 
        scrub: true, 
      },
    });

    // fade-in effect from the left
    gsap.from(gltf.scene.position, {
      x: -30,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#canvas', 
        start: 'top center', 
        end: 'center center',
      },
    });
  }, []);

  return <primitive object={gltf.scene} />;
}

function KeyboardCanvas() {
  return (
    <div id="canvas" className="absolute md:flex hidden 4xl:right-[900px] 3xl:right-[700px] 2xl:right-[350px] xl:right-[250px] lg:right-[45px] md:-right-[35px] 3xl:scale-[100%] xl:scale-[90%] md:scale-75 4xl:-bottom-40 3xl:-bottom-60 2xl:-bottom-[350px] xl:-bottom-80 md:-bottom-[300px] w-[1000px] h-[1000px]">
      <Canvas>
        <ambientLight intensity={0.1} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} up={[0, 0, 1]} fov={75} near={0.1} far={1000} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default KeyboardCanvas;