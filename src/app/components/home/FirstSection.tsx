"use client";
import type { NextPage } from "next";
import useScrollObserver from "../ScrollObserver";
import { FaGithub } from "react-icons/fa";

const FirstSection: NextPage = () => {
  useScrollObserver(".js-show-on-scroll", "animate-fadeIn");

  return (
    <div className="container drop-shadow-2xl mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[100vh] js-show-on-scroll">
      <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Experienced website <br />
          builders measuring
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          I'm a website developer in the role of frontend developer <br />
          I build and develop for mobile responsiveness first and <br />
          make for SEO.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <a
            href="https://github.com/taleenteen"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-500 font-bold px-4 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300 flex items-center justify-center gap-2"
          >
            <FaGithub />
            <span>My Github</span>
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <img
          src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-developers-are-coding-programs-on-computers-programmers-are-analyzing-data-png-image_11902650.png"
          alt="coding-man"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default FirstSection;
