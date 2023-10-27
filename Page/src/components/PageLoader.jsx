import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

function PageLoader() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const counterAnimation = gsap.to('.counter', {
      duration: 6.5,
      innerText: 100,
      snap: 'innerText',
      ease: 'none',
    });

    counterAnimation.eventCallback('onComplete', () => {
      gsap.to('.counter', {
        opacity: 0,
        duration: 0.25,
      });

      gsap.to('.bar', {
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: 'power4.inOut',
        duration: 1.5,
        onComplete: () => {
          // Animation is complete, set the state to true
          setAnimationComplete(true);
        },
      });
    });
  }, []);

  return (
    <div id="overlay-wrapper" className={animationComplete ? 'hidden' : 'overflow-hidden'}>
      <h1 className="counter flex fixed w-full h-full justify-end items-end text-[#BCBCC4] pt-[0.2em] lg:pl-[0.4em] pr-[1rem] pl-[0.4em] text-[20vw]">
        0
      </h1>
      <div className="overlay flex fixed w-screen h-screen">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="bar w-[10vw] h-[100vh] bg-[#1A1A1A]"></div>
        ))}
      </div>
    </div>
  );
}

export default PageLoader;



