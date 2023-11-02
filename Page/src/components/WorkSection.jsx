import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button, Link } from "@nextui-org/react";
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
        const stickyAnimation = gsap.fromTo(
          stickyText,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: stickyText,
              start: 'top center+=50',
              end: 'bottom center+=100',
            },
          }
        );
        gsap.set(stickyText, { opacity: 0, y: 50 });
      };
      
      const workButton = document.getElementById('work-button');
      const buttonAnimation = gsap.fromTo(
        workButton,
        { opacity: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.02,
          scrub: 0.5,
          scrollTrigger: {
            trigger: workButton,
            start: 'top center+=50',
            end: 'bottom center+=100',
          },
        }
      );
      gsap.set(workButton, {opacity: 0 });
      

  
      setupAnimation();
    }, []);

    return (
        <section id="work" className="w-screen h-auto bg-offwhite-bg p-8">
          <div id="work-wrapper" className="flex lg:flex-row flex-col justify-center items-center px-4 py-24 gap-y-2">
            <div id="left-sticky" className="flex flex-col lg:h-[2475px] h-fit lg:w-1/2 w-fit will-change-auto gap-x-4">
              <div className="flex flex-col justify-center items-center sticky top-80 left-0">
              <h2 
                id="sticky-text" 
                className="flex justify-center font-semibold 3xl:text-[3.5rem] 2xl:text-[3rem] lg:text-[2.5rem] md:text-[3rem] text-[1.85rem] text-rusticoffwhite tracking-[0.25em] p-[1.25rem] select-none pb-[5.5rem]"
              >
                  My Garden
              </h2>
              <Link href="https://github.com/Sayinq">
                <Button id="work-button" radius="lg" className="lg:flex hidden bg-rusticoffwhite px-12 py-6 lg:-mt-20 text-xl text-white">
                  <span className="pt-2 text-offwhite">View more</span>
                </Button>
              </Link>
              </div>
            </div>
            <div id="right-fixed" className="flex flex-col gap-y-8 lg:w-1/2 w-full">
              {workItems.map((item, index) => (
                <a href={item.link}>
                <div 
                    key={index} 
                    className="work-details w-[400px] sm:h-[800px] h-[600px] bg-coolblack bg-cover bg-center rounded-[35px] overflow-hidden max-w-[1200px]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.6), rgba(17, 17, 17, 0.6)), url(${item.imageUrl})`,
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
            <Link href="https://github.com/Sayinq">
                <Button id="work-button" radius="lg" className="lg:hidden flex bg-rusticoffwhite px-12 py-6 mt-16 text-xl text-white">
                  <span className="pt-2 text-offwhite">View more</span>
                </Button>
            </Link>
          </div>
        </section>
      );
    }
    
    export default WorkSection;
