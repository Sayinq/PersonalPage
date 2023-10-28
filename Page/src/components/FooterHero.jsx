import React from 'react';
import { Environment, Float } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ButterflyModel } from '../assets/objects/ButterflyModel';

function ButterflyCanvas() {
  const gltf = useLoader(GLTFLoader, ButterflyModel); 

  return (
    <primitive object={gltf.scene} scale={0.2} position={[0, 0, 0]} />
  );
}

function FooterHero() {
  return (
    <div id="footer-hero" className="relative flex items-center justify-center w-screen h-screen bg-coolblack">
        
      <Canvas className="absolute top-0 left-0 bottom-0 right-0 z-30">
        <color attach='background' args={['#000000']} />
        <ambientLight intensity={1} />
        <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />

        <Environment preset='warehouse' />

        <EffectComposer>
          <Bloom intensity={2} luminanceThreshold={0.2} luminanceSmooth={0.9} height={1000} />
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
          <Vignette eskil={false} offset={.1} darkness={1.5} />
        </EffectComposer>
        <directionalLight castShadow intensity={0.5} position={[-20, 6, 6]} shadow-mapSize={[1024, 1024]} />
          <Float
            speed={0.75}
            rotationIntensity={0.5}
            floatIntensity={0.2}
            floatingRange={[0.25, 0.5]}
          >
            <ButterflyModel scale={0.05} position={[-10, -3, -6]} />
            <ButterflyModel scale={0.05} position={[0, -2.5, 0]} />
            <ButterflyModel scale={0.05} position={[10, -4.5, -10]} />
          </Float>
      </Canvas>

      <div id="text-wrapper" className="absolute inset-0 flex flex-col text-center items-center justify-center font-bold 2xl:text-[4rem] xl:text-[3.25rem] md:text-[2.75rem] sm:text-[2.25rem] text-[1.5rem] text-white z-40">
        <div id="text-line">
          <span className="">
            Instead of chasing butterflies,
          </span>
        </div>
        <div id="text-line">
          <span className="">
            create a captivating garden,
          </span>
        </div>
        <div id="text-line">
          <span className="">
            and they'll flutter in on their own.
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterHero;
