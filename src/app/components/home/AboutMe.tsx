"use client";
import type { NextPage } from "next";
import useScrollObserver from "../ScrollObserver";

const AboutMe: NextPage = () => {
  useScrollObserver(".js-show-on-scroll", "animate-fadeIn");

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center js-show-on-scroll">
      <div className="w-[100%] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[1200px] flex flex-col lg:flex-row items-center p-5">
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:mr-8">
          <img
            src="/assets/me.jpg"
            alt="Me"
            className="w-full h-auto z-2 rounded-2xl drop-shadow-2xl"
          />
        </div>

        <div className="flex flex-col text-center sm:mt-12 md:mt-2 lg:text-left lg:w-1/2 drop-shadow-2xl">
          <h1 className="text-4xl my-4 font-bold">About Me</h1>
          <p className="text-xl mb-4">
            &quot;My name is Panuvit Khaoikham. I studied at Rangsit University
            and am looking to work as a Frontend Developer. I am always learning
            new techniques for development.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
