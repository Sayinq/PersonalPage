import React from 'react'

const NavbarComp = () => {
  return (
    <nav id="navbar-wrapper" className="flex flex-row justify-between items-center top-0 left-0 sticky w-screen h-auto p-6 lg:px-24 pt-12 px-8 z-50">
        <div id="navbar-logo" className="">
            <img src="./src/assets/logotesttransparent.png" className="w-24 h-24" />
        </div>
        <ul id="navbar-links" className="flex flex-col gap-y-2 text-rusticoffwhite font-bold text-[1.25rem]">
          <a href="" className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer">ABOUT</a>
          <a href="" className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer">WORK</a>
          <a href="" className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer">CONTACT</a>
        </ul>
    </nav>
  )
}

export default NavbarComp