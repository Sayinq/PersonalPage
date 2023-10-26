import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const NavbarComp = () => {
  const [isCursorInside, setIsCursorInside] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const logoRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  };

  useEffect(() => {
    const logo = logoRef.current;
    if (logo) {
      gsap.set(logo, { x: 0, y: 0, opacity: 1 });

      if (isCursorInside) {
        gsap.to(logo, {
          x: cursorPosition.x - logo.offsetLeft - logo.offsetWidth / 2,
          y: cursorPosition.y - logo.offsetTop - logo.offsetHeight / 2,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    }
  }, [isCursorInside, cursorPosition]);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });

    const navbarLogo = document.getElementById("navbar-logo");
    if (navbarLogo) {
      const rect = navbarLogo.getBoundingClientRect();
      if (
        cursorPosition.x >= rect.left &&
        cursorPosition.x <= rect.right &&
        cursorPosition.y >= rect.top &&
        cursorPosition.y <= rect.bottom
      ) {
        setIsCursorInside(true);
      } else {
        setIsCursorInside(false);
      }
    }
  };

  const handleMouseLeave = () => {
    setIsCursorInside(false);
  
    const logo = logoRef.current;
    if (logo) {
      gsap.to(logo, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <nav
      id="navbar-wrapper"
      className="flex flex-row justify-between items-center top-0 left-0 sticky w-screen h-auto p-6 lg:px-24 pt-12 px-8 z-50 bg-gradient-to-b from-coolblack to-coolblack/0"
    >
      <div
        id="navbar-logo"
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={logoRef}
      >
        <img
          src="./src/assets/images/logotesttransparent.png"
          className={`w-24 h-24 ${isCursorInside ? 'cursor-follow' : 'cursor-original'}`}
        />
      </div>
      <ul
        id="navbar-links"
        className="flex flex-col gap-y-2 text-[#D2D2D2] font-bold text-[1.25rem]"
      >
        <a
          onClick={() => scrollToSection('landing-hero')}
          className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer"
        >
          ABOUT
        </a>
        <a
          onClick={() => scrollToSection('work')}
          className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer"
        >
          WORK
        </a>
        <a
          onClick={() => scrollToSection('footer-hero')}
          className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer"
        >
          CONTACT
        </a>
      </ul>
    </nav>
  );
};

export default NavbarComp;






