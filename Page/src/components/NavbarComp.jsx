import React, { useState } from 'react';

const NavbarComp = () => {
  const [isCursorInside, setIsCursorInside] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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
  };

  return (
    <nav
      id="navbar-wrapper"
      className="flex flex-row justify-between items-center top-0 left-0 sticky w-screen h-auto p-6 lg:px-24 pt-12 px-8 z-50"
    >
      <div
        id="navbar-logo"
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="./src/assets/logotesttransparent.png"
          className={`w-24 h-24 ${
            isCursorInside ? 'cursor-follow' : 'cursor-original'
          }`}
          style={{
            transform: isCursorInside
              ? `translate(${cursorPosition.x -140}px, ${cursorPosition.y -100}px)`
              : 'translate(0, 0)',
          }}
        />
      </div>
      <ul
        id="navbar-links"
        className="flex flex-col gap-y-2 text-rusticoffwhite font-bold text-[1.25rem]"
      >
        <a
          href=""
          className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer"
        >
          ABOUT
        </a>
        <a
          href=""
          className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer"
        >
          WORK
        </a>
        <a
          href=""
          className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer"
        >
          CONTACT
        </a>
      </ul>
    </nav>
  );
};

export default NavbarComp;




