import React, { useEffect, useRef } from 'react';
import SplitTextJS from "https://esm.sh/split-text-js";
import { gsap } from 'gsap';
import heroVideo from '../assets/hudanimation.mp4';

const HeroSection = () => {
    const textRef = useRef(null);
  
    useEffect(() => {
        const titles = gsap.utils.toArray('p')
        const mainTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.25 }); // Infinite loop with a 2-second delay
        
        titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);
            
            const charTimeline = gsap.timeline();
            charTimeline
                .from(splitTitle.chars, {
                    opacity: 0,
                    y: 80,
                    rotateX: -90,
                    stagger: 0.02,
                }, "<")
                .to(splitTitle.chars, {
                    opacity: 0,
                    y: -80,
                    rotateX: 90,
                    stagger: 0.02,
                }, "<1");
                
            mainTimeline.add(charTimeline);
        });
    }, []);
  
    return (
      <section
        id="landing-hero"
        className="flex flex-col justify-center items-center p-4 w-screen h-screen bg-[#000000] top-0 mt-[-11.25rem] overflow-x-hidden select-none"
      >
        <div id="video-bg" className="absolute inset-0 top-0 left-0 bottom-0 right-0">
            <video
            autoPlay
            muted
            loop
            preload="auto"
            className="object-cover w-full h-screen"
            >
            <source src={heroVideo} type="video/mp4" />
            </video>
        </div>
        <h2 className="font-semibold tracking-[0.25rem] uppercase -translate-y-28 text-[0.75rem]">Myles Was Bored</h2>
        <div className="w-full h-fit text-[#4D4D4D] md:text-[4rem] sm:text-[3rem] text-[2rem] text-center m-0 leading-[0px] font-black select-none" ref={textRef}>
          <p>UI Designer</p>
          <p>Web Developer</p>
          <p>Video Editor</p>
          <p>Content Creator</p>
          <p>Project Manager</p>
        </div>
        <span className="font-semibold text-[0.65rem] tracking-[0.25rem] uppercase translate-y-28 opacity-[0.5]">©2023MylesMcGhee</span>
      </section>
    );
};

export default HeroSection;
