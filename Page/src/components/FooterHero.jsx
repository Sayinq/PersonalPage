import React, { useEffect, useRef } from 'react';
import { Environment, Float } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ButterflyModel } from '../assets/objects/ButterflyModel';
import '../index.css';
import gsap from 'gsap';

function ButterflyCanvas() {
  const gltf = useLoader(GLTFLoader, ButterflyModel);

  return (
    <primitive object={gltf.scene} scale={0.2} position={[0, 0, 0]} />
  );
}

function FooterHero() {
  const textLinesRef = useRef(null);

  useEffect(() => {
    const textLines = textLinesRef.current.querySelectorAll('.text-line');
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    textLines.forEach((line) => {
      observer.observe(line);
    });

    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const textLine = entry.target;
          const tl = gsap.timeline();
          tl.to(textLine, {
            y: -20,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
          });
          observer.unobserve(textLine);
        }
      });
    }
  }, []);

  

  return (
    <div id="footer-hero" className="relative flex items-center justify-center w-screen h-screen">
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
            speed={0.3}
            rotationIntensity={0.6}
            floatIntensity={0.3}
            floatingRange={[0.15, 1.2]}
          >
            <ButterflyModel scale={0.05} position={[-10, -3, -6]} />
          </Float>

          <Float
            speed={0.75}
            rotationIntensity={0.5}
            floatIntensity={0.2}
            floatingRange={[0.25, 0.5]}
          >
            <ButterflyModel scale={0.05} position={[0, -2.5, 0]} />
          </Float>

          <Float
            speed={0.5}
            rotationIntensity={0.75}
            floatIntensity={0.5}
            floatingRange={[0.25, 0.7]}
          >
            <ButterflyModel scale={0.05} position={[10, -4.5, -10]} />
          </Float>
        </Canvas>

      <div id="text-wrapper" className="absolute text-white inset-0 flex flex-col text-center items-center justify-center font-bold 2xl:text-[3.5rem] xl:text-[3rem] lg:text-[2.5rem] sm:text-[2rem] text-[1.5rem] z-40" ref={textLinesRef}>
        <div className="text-line">
          <span className="opacity-[0.8]">
            Instead of chasing butterflies,
          </span>
        </div>
        <div className="text-line">
          <span className="opacity-[0.6]">
            create a captivating garden,
          </span>
        </div>
        <div className="text-line">
          <span className="opacity-[0.4]">
            and they'll flutter in on their own.
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterHero;

