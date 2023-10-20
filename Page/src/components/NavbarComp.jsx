import React from 'react'

const NavbarComp = () => {
  return (
    <div id="navbar-wrapper" className="flex flex-row justify-between items-center top-0 left-0 sticky w-screen h-auto p-6 px-8 z-50 bg-gradient-to-b from-coolblack to-coolblack/0">
        <div id="navbar-logo" className="">
            <img src="./src/assets/logotesttransparent.png" className="w-16 h-16" />
        </div>
        <div id="navbar-links" className="flex flex-col gap-y-2 text-rusticoffwhite font-bold">
            <span className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer">ABOUT</span>
            <span className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer">WORK</span>
            <span className="hover:text-offwhite text-right transition-all duration-200 ease-in-out cursor-pointer">CONTACT</span>
        </div>
    </div>
  )
}

export default NavbarComp