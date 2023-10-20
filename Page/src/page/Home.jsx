import React from 'react'
import NavbarComp from '../components/NavbarComp'

const Home = () => {
  return (
    <main>
        <NavbarComp />
        <section className="w-screen h-screen bg-[url('./src/assets/PlaceholderBG.jpg')] bg-cover bg-center top-0 -mt-32">
            
        </section>
        <section className="flex flex-col w-screen h-screen bg-coolblack px-4 py-48 gap-y-8">
            <p className="font-medium text-[0.875rem] text-[#FFFFFF] uppercase tracking-[0.5em]">About me</p>
            <span className="w-[375px] font-bold text-4xl text-[#B7AB98] tracking-wider leading-[105%]">
            I'm a 
            results-driven professional
            with a passion for crafting exceptional web experiences 
            and bringing stories to life through video editing.
            </span>
        </section>
        <div className="bg-coolblack p-4">
        <p className="font-medium text-[0.875rem] text-[#FFFFFF] uppercase tracking-[0.5em]">Some things I've built.</p>
        </div>
        <section id="work" className="w-screen h-auto bg-offwhite-bg">
            <div id="work-wrapper" className="flex flex-wrap justify-center items-center px-4 py-24 gap-y-2">
                <div id="left-sticky" className="sticky h-full w-fit">
                    <h2 className="text-coolblack">Sticky Text</h2>
                </div>
                <div id="right-fixed" className="flex flex-col gap-y-8">
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