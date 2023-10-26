import React, { Suspense, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import roboObject from '../assets/objects/steel__flower.glb';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function RoboModel() {
    const gltf = useLoader(GLTFLoader, roboObject)
    const { scene } = useThree();

    useEffect(() => {
        gltf.scene.scale.set(1.15, 1.15, 1.15);
        gltf.scene.rotation.x = -2;
        gltf.scene.rotation.y = -90;
        gltf.scene.rotation.z = -3; // From -3 to -3.4 

        gsap.to(gltf.scene.rotation, {
            z: -3.4,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#robo-canvas',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
            },
        });

        gsap.from(gltf.scene.position, {
            x: -30,
            opacity: 0,
            duration: 2,
            ease: 'sine.out',
            scrollTrigger: {
                trigger: '#robo-canvas',
                start: 'top center',
                end: 'center center',
            },
        });
    }, []);

    return (
        <primitive object={gltf.scene} />
    );
}

function GardenCanvas() {
  return (
    <div id="robo-canvas" className="absolute 2xl:-left-[1000px] 2xl:-top-10 w-[2000px] h-[2000px]">
      <Canvas>
        <ambientLight intensity={3} />
        <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
            <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
        </directionalLight>
        <Suspense fallback={null}>
            <RoboModel />
        </Suspense>
    </Canvas>

    </div>
  );
}

export default GardenCanvas;