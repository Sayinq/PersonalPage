import React from 'react';
import NavbarComp from '../components/NavbarComp';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <main>
        <NavbarComp />
        <HeroSection />
        <section className="flex flex-col w-screen h-screen bg-coolblack md:justify-center md:items-center px-[1.25rem] md:py-64 py-48 gap-y-8">
            <div id="about-content-wrapper" className="text-offwhite font-bold 2xl:leading-[120%] sm:leading-[110%] leading-[101%] relative 2xl:max-w-[1000px] lg:max-w-[800px] md:max-w-[600px] sm:max-w-[500px] max-w-[20rem] text-[2.75rem]">
            <h2 className="w-full font-bold text-[0.875rem] text-rusticoffwhite uppercase tracking-[0.5em] mb-[1.875rem]">About me</h2>
            <span className="text-[2.5rem] sm:text-[3rem] 2xl:text-[4rem]">Results-driven professional passionate about crafting exceptional 
            web experiences and bringing stories to life through video editing.
            </span>
            </div>
        </section>
        <section id="work" className="w-screen h-auto bg-offwhite-bg p-8">
            <div id="work-wrapper" className="flex flex-wrap justify-center px-4 py-24 gap-y-2">
                <div id="left-sticky" className="lg:h-[1536px] h-fit lg:w-1/2 w-fit">
                <h2 className="flex sticky top-80 left-0 font-medium xl:text-[1.25rem] lg:text-[1.05rem] text-[0.95rem] text-rusticoffwhite tracking-[0.5em] p-[1.25rem]">Some things I've built.</h2>
                </div>
                <div id="right-fixed" className="flex flex-col gap-y-8 lg:w-1/2 w-fit">
                    <div id="work-details" className="w-[400px] h-[500px] bg-coolblack rounded-[35px]">
                        <div id="work-text" className="flex flex-col w-full h-[500px] justify-between p-6">
                            <span className="text-3xl font-bold tracking-wide">01</span>
                            <span className="text-2xl font-bold tracking-wide">Breathe</span>
                        </div>
                    </div>
                    <div id="work-details" className="w-[400px] h-[500px] bg-coolblack rounded-[35px]">
                        <div id="work-text" className="flex flex-col w-full h-[500px] justify-between p-6">
                            <span className="text-3xl font-bold tracking-wide">02</span>
                            <span className="text-2xl font-bold tracking-wide">Vanity</span>
                        </div>
                    </div>
                    <div id="work-details" className="w-[400px] h-[500px] bg-coolblack rounded-[35px]">
                        <div id="work-text" className="flex flex-col w-full h-[500px] justify-between p-6">
                            <span className="text-3xl font-bold tracking-wide">03</span>
                            <span className="text-2xl font-bold tracking-[0.15em]">Soon TM</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer className="flex flex-col w-screen h-fit bg-coolblack py-8 px-6 gap-y-8">
            <div id="footer-header" className="">
                <h2 className="font-bold text-xl text-rusticoffwhite uppercase tracking-widest">Keep in touch</h2>
            </div>
            <div id="footer-links" className="flex flex-col w-fit h-auto font-bold text-left pl-8 gap-y-2 text-2xl text-offwhite">
                <span>Twitter</span>
                <span>LinkedIn</span>
                <span>Codepen</span>
                <span>Github</span>
            </div>
            <div id="contact-info" className="flex flex-col w-fit h-auto gap-y-12 sm:mt-0 mt-16">
                <div id="email-wrapper" className="">
                    <span className="text-lg text-offwhite font-bold">Email</span>
                    <p className="text-lg text-rusticoffwhite">email@yahoo.com</p>
                </div>
                <div id="phone-wrapper" className="">
                    <span className="text-lg text-offwhite font-bold">Phone</span>
                    <p className="text-lg text-rusticoffwhite">(555) 555-555</p>
                </div>
            </div>
        </footer>
    </main>
  )
}

export default Home