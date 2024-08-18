"use client";
import type { NextPage } from "next";
import useScrollObserver from "../ScrollObserver";

const MyTimeline: NextPage = () => {
  useScrollObserver(".js-show-on-scroll", "animate-fadeIn");

  return (
    <div className="js-show-on-scroll drop-shadow-2xl">
      <div className="flex justify-center">
        <h1 className="my-[4rem] font-bold text-4xl">
          This is my
          <span className="ml-2 relative text-purple-300 after:absolute after:bg-purple-300 after:h-[2px] after:w-full after:bottom-0 after:left-0 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            timeline
          </span>
        </h1>
      </div>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Timeline line */}
          <div
            className="hidden md:block border-2-2 absolute border-opacity-20 border-gray-50 h-full border"
            style={{ left: "50%" }}
          ></div>

          {/* Right timeline */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl md:w-5/12 px-6 py-4 transition-transform transform hover:scale-105 duration-300">
              <h1 className="mb-1 font-bold text-white text-xl">2019-2024</h1>
              <h2 className="mb-3 font-bold text-gray-800 text-xl">
                Studying at Rangsit University
              </h2>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                &quot;Started studying Computer Science at Rangsit University
                for a bachelor's degree.&quot;
              </p>
            </div>
          </div>

          {/* Left timeline */}
          <div className="mb-8 flex flex-col md:flex-row-reverse justify-between items-center w-full left-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl md:w-5/12 px-6 py-4 transition-transform transform hover:scale-105 duration-300">
              <h1 className="mb-1 font-bold text-white text-xl">2022</h1>
              <h2 className="mb-3 font-bold text-gray-800 text-xl">
                Interned at Grid Consultant
              </h2>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                &quot;Started an internship at Grid Consultant as a web
                developer, using Vue and Nuxt frameworks. Spent one month
                learning Vue and Nuxt before working on a company project.&quot;
              </p>
            </div>
          </div>

          {/* Right timeline */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center w-full right-timeline">
            <div className="order-1 md:w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl md:w-5/12 px-6 py-4 transition-transform transform hover:scale-105 duration-300">
              <h1 className="mb-1 font-bold text-white text-xl">2024-Now</h1>
              <h2 className="mb-3 font-bold text-gray-800 text-xl">
                Learning React and preparing for work
              </h2>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                &quot;Self-studying React and reviewing my skills in Vue
                prepared me for work.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTimeline;
