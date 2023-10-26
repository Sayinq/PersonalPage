import React from 'react';
import NavbarComp from '../components/NavbarComp';
import HeroSection from '../components/HeroSection';
import WorkSection from '../components/WorkSection';
import ThreeCanvas from '../components/ThreeCanvas';
import omegaPic from '../assets/images/Omega.jpg';
import albaPic from '../assets/images/alba.jpg';
import vanitystorePic from '../assets/images/vanitystore.jpg';
import footerHero from '../assets/Predicted.mp4';

const Home = () => {
    const workItems = [
        { 
            index: '01', text: 'Omega Strikers',
            imageUrl: omegaPic,
            link: "https://github.com/Sayinq/Omega-Strikers-Fanpage", 
        },
        { 
            index: '02', text: 'Vanity E-Commerce',
            imageUrl: vanitystorePic, 
            link: "https://github.com/Sayinq/Vanity-Store", 
        },
        { 
            index: '03', text: 'SoonTM',
            imageUrl: albaPic,  
            link: "https://www.microsoft.com/", 
        },
    ];
  return (
    <main>
        <NavbarComp />
        <HeroSection />
        <section id="about" className="flex flex-col w-screen h-screen bg-coolblack md:justify-center md:items-center px-[1.25rem] md:py-64 py-48 gap-y-8">
            <div id="canvas-container" className="flex absolute justify-center items-center">
                <ThreeCanvas />
            </div>
            <div id="about-content-wrapper" className="text-offwhite font-bold 2xl:leading-[140%] sm:leading-[110%] leading-[101%] relative 2xl:max-w-[1000px] lg:max-w-[800px] md:max-w-[600px] sm:max-w-[500px] max-w-[20rem] text-[2.75rem] select-none">
            <h2 className="w-full font-bold text-[0.875rem] text-rusticoffwhite uppercase tracking-[0.5em] mb-[1.875rem]">About me</h2>
            <span className="text-[1.75rem] sm:text-[3rem] 2xl:text-[4rem]">Results-driven professional passionate about crafting exceptional 
            web experiences and bringing stories to life through video editing.
            </span>
            </div>
        </section>
        <WorkSection workItems={workItems} />

        {/* Instead of chasing butterflies, create a captivating garden, and they'll flutter in on their own */}
        <section id="footer-hero" className="flex items-center justify-center w-screen h-screen bg-coolblack">
            <div id="footer-video" className="relative">
                <div id="gradient-overlay" className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#111111]/60 to-[#111111]/60" />
                <video
                autoPlay
                muted
                loop
                preload="auto"
                className="object-cover w-screen h-screen"
                >
                <source src={footerHero} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex flex-col text-center items-center justify-center font-bold 2xl:text-[4rem] xl:text-[3.25rem] md:text-[2.75rem] sm:text-[2.25rem] text-[1.75rem] text-white">
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
        </section>

        <footer id="footer-section" className="flex sm:flex-row flex-col sm:justify-evenly sm:items-center w-screen h-fit bg-coolblack py-12 px-6 gap-y-8">
            <div id="footer-header__wrapper" className="flex flex-col gap-y-8 max-w-[1920px]">
                <div id="footer-header" className="">
                    <h2 className="font-bold text-xl text-rusticoffwhite uppercase tracking-widest select-none">Keep in touch</h2>
                </div>
                <div id="footer-links" className="flex lg:flex-row lg:gap-x-4 flex-col w-fit h-auto font-bold text-left pl-8 gap-y-2 text-2xl text-offwhite">
                    <a href="https://twitter.com/myleswasbored" className="hover:text-rusticoffwhite"><span>Twitter</span></a>
                    <a href="https://www.linkedin.com/in/myles-mcghee-584b391b6/" className="hover:text-rusticoffwhite"><span>LinkedIn</span></a>
                    <a href="https://codepen.io/Sayinq" className="hover:text-rusticoffwhite"><span>Codepen</span></a>
                    <a href="https://github.com/Sayinq" className="hover:text-rusticoffwhite"><span>Github</span></a>
                </div>
            </div>
            <div id="contact-info" className="flex flex-col w-fit h-auto gap-y-12 sm:mt-0 mt-16">
                <div id="email-wrapper" className="flex flex-col gap-y-2">
                    <span className="text-lg text-rusticoffwhite font-bold select-none">Email</span>
                    <a href="mailto:mylesmcghee1999@yahoo.com"><span className="md:text-lg text-sm text-offwhite">mylesmcghee1999@yahoo.com</span></a>
                </div>
                <div id="phone-wrapper" className="flex flex-col gap-y-2">
                    <span className="text-lg text-rusticoffwhite font-bold select-none">Phone</span>
                    <span className="md:text-lg text-sm text-offwhite">(704) 915-6440</span>
                </div>
            </div>
        </footer>
    </main>
  )
}

export default Home