"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative lg:w-[94%]">
      <div className="flex items-center justify-between p-4">
        {/* Logo and greeting section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/bibektimilsina_logo.jpg"
            width={60}
            height={60}
            alt="logo"
            className="rounded-full"
          />
          <h2 className="text-xl">Hey, What's Up?</h2>
        </div>

        {/* Hamburger icon */}
        <button className="lg:hidden text-2xl z-50" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </button>
        {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:space-x-8">
        <Link href="/" className="text-lg hover:text-blue-500">
          Home
        </Link>
        <Link href="#journey" className="text-lg hover:text-blue-500">
          Journey
        </Link>
        <Link href="#projects" className="text-lg hover:text-blue-500">
          Projects
        </Link>
        <Link href="#contact" className="text-lg hover:text-blue-500">
          Contact Me
        </Link>
      </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#212531] bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <Link href="/" className="hover:text-blue-400" onClick={toggleMenu}>
          Home
        </Link>
        <Link href="#journey" className="hover:text-blue-400" onClick={toggleMenu}>
          Journey
        </Link>
        <Link href="#projects" className="hover:text-blue-400" onClick={toggleMenu}>
          Projects
        </Link>
        <Link href="#contact" className="hover:text-blue-400" onClick={toggleMenu}>
          Contact Me
        </Link>
      </div>

      
    </div>
  );
}

export default Navbar;
