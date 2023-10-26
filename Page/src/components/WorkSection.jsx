import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GardenCanvas from './GardenCanvas';

gsap.registerPlugin(ScrollTrigger);

function WorkSection({ workItems }) {
    useEffect(() => {
      const setupAnimation = () => {
        const workDetails = document.querySelectorAll('.work-details');
  
        workDetails.forEach((item, index) => {
          const animation = gsap.fromTo(
            item,
            { width: 0 },
            {
              width: '100%',
              duration: 1,
              scrollTrigger: {
                trigger: item,
                start: 'top center',
                end: 'bottom center',
                scrub: 0.5,
              },
            }
          );
        });
        const stickyText = document.getElementById('sticky-text');
      const textAnimation = gsap.fromTo(
        stickyText,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: stickyText,
            start: 'top center+=50',
            end: 'bottom center+=100',
            scrub: 1,
          },
        }
      );
      gsap.set(stickyText, { opacity: 0, y: 100 });
      };
  
     
      setupAnimation();
    }, []);

    return (
        <section id="work" className="w-screen h-auto bg-offwhite-bg p-8">
          <div id="garden-container" className="flex absolute justify-center items-center translate-y-[900px]">
            <GardenCanvas />
          </div>
          <div id="work-wrapper" className="flex lg:flex-row flex-col justify-center px-4 py-24 gap-y-2">
            <div id="left-sticky" className="2xl:h-[800px] lg:h-[2495px] h-fit lg:w-1/2 w-fit">
              <h2 id="sticky-text" className="flex justify-center sticky top-80 left-0 font-medium 2xl:text-[2rem] text-[1.5rem] text-rusticoffwhite tracking-[0.5em] p-[1.25rem] select-none">My Garden</h2>
            </div>
            <div id="right-fixed" className="flex flex-col gap-y-8 lg:w-1/2 w-full">
              {workItems.map((item, index) => (
                <a href={item.link}>
                <div 
                    key={index} 
                    className="work-details w-[400px] sm:h-[800px] h-[600px] bg-coolblack object-cover bg-center rounded-[35px] overflow-hidden max-w-[1200px]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.6), rgba(17, 17, 17, 0.6)), url(${item.imageUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                      }}
                >
                  <div id="work-text" className="flex flex-col w-full sm:h-[800px] h-[600px] justify-between p-6 text-offwhite">
                    <span className="text-3xl font-bold tracking-wide">{item.index}</span>
                    <span className="text-2xl font-bold tracking-wide">{item.text}</span>
                  </div>
                </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
    }
    
    export default WorkSection;
