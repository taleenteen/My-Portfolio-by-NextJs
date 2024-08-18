"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop > lastScrollTop) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-blue-500 shadow-2xl transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ zIndex: 1000 }}
    >
      <nav className="w-full h-[80px] flex items-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <h1 className="text-white font-bold text-2xl flex-1">Taleen</h1>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        <ul
          className={`lg:flex lg:gap-4 items-center transition-transform duration-300 p-4 ${
            isMenuOpen
              ? "flex flex-col gap-4 absolute top-full left-0 w-full bg-blue-500 lg:static lg:flex-row lg:gap-4 "
              : "hidden"
          }`}
        >
          <li className="text-white hover:text-yellow-400 transition-colors font-bold ">
            <Link href="#first">Home </Link>
          </li>
          <li className="text-white hover:text-yellow-400 transition-colors font-bold">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="text-white hover:text-yellow-400 transition-colors font-bold">
            <Link href="#about">About Me</Link>
          </li>
          <li className="text-white hover:text-yellow-400 transition-colors font-bold">
            <Link href="#contact">Contact</Link>
          </li>
          <ul className="flex gap-4 items-center">
            <li className="text-white hover:text-yellow-400 transition-colors font-bold">
              <a
                href="https://www.instagram.com/ptk.t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li className="text-white hover:text-yellow-400 transition-colors font-bold">
              <a
                href="https://www.facebook.com/IMI.pk.teen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={24} />
              </a>
            </li>
            <li className="text-white hover:text-yellow-400 transition-colors font-bold">
              <a
                href="https://www.linkedin.com/in/panuvit-khaiokham-591753321"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} />
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
