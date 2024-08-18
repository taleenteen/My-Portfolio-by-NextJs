"use client";
import type { NextPage } from "next";
import useScrollObserver from "../ScrollObserver";
import { FaVuejs, FaFigma, FaGithub } from "react-icons/fa";
import { SiVuetify, SiExpress, SiPostman, SiNuxtdotjs } from "react-icons/si";

const MyProjects: NextPage = () => {
  useScrollObserver(".js-show-on-scroll", "animate-fadeIn");

  return (
    <div className="js-show-on-scroll drop-shadow-2xl">
      <div className="container mx-auto text-center my-[3rem] drop-shadow-2xl">
        <h1 className="text-4xl font-bold text-black ">My projects section</h1>
        <p className="text-lg mt-2 text-gray-600">
          A small selection of recent projects
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 sm:text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-500">News blog</h2>
          <p className="text-lg mt-2 text-gray-600">
            CRUD blog and can upload picture.
          </p>
          <p className="mt-4 text-black">
            "Handled the frontend by creating the structure and designing the
            UX/UI, drawing inspiration from other websites. Also created
            middleware files in the Nuxt project to check user states and
            connect APIs to the backend server."
          </p>
          <h2 className="text-2xl font-bold text-blue3 mt-4">Tools</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-3xl text-blue3">
            <SiVuetify className="hover:scale-110 transition-transform duration-300" />
            <FaVuejs className="hover:scale-110 transition-transform duration-300" />
            <SiNuxtdotjs className="hover:scale-110 transition-transform duration-300" />
            <SiPostman className="hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://github.com/taleenteen/News-blog-by-Nuxt2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-black border-2 text-blue-500 font-bold px-4 py-2 mt-4 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300 flex items-center justify-center gap-2"
            >
              <FaGithub />
              <span>Code on Github</span>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/assets/projects/News.png"
            alt="Project Image"
            className="h-[500px]  object-contain rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center mb-12">
        <div className="md:w-1/2 sm:text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-500">
            Game server website
          </h2>
          <p className="text-lg mt-2 text-gray-600">
            Landing page for game server
          </p>
          <p className="mt-4 text-black">
            "Worked on an intern project, where I waited for the design team to
            complete their designs and then implemented them using
            company-provided themes."
          </p>
          <h2 className="text-2xl font-bold text-blue3 mt-4">Tools</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-3xl text-blue3">
            <SiVuetify className="hover:scale-110 transition-transform duration-300" />
            <FaVuejs className="hover:scale-110 transition-transform duration-300" />
            <SiNuxtdotjs className="hover:scale-110 transition-transform duration-300" />
            <FaFigma className="hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a className="cursor-not-allowed opacity-50 bg-white border-black border-2 text-blue-500 font-bold px-4 py-2 mt-4 rounded-xl transition duration-300 flex items-center justify-center gap-2">
              <span>Unable to publish</span>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 p-4">
          <img
            src="/assets/projects/Fivem2.png"
            alt="Project FiveM Server"
            className="  object-contain rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 sm:text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-500">
            Booking and managing website
          </h2>
          <p className="text-lg mt-2 text-gray-600">
            Booking and managing for University
          </p>
          <p className="mt-4 text-black">
            "Worked on real-world projects, designed UX/UI, created smart admin
            tables for editing information on the website, connected APIs to the
            backend, and spent some time experimenting with backend coding using
            Express."
          </p>
          <h2 className="text-2xl font-bold text-blue3 mt-4">Tools</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-3xl text-blue3">
            <SiVuetify className="hover:scale-110 transition-transform duration-300" />
            <FaVuejs className="hover:scale-110 transition-transform duration-300" />
            <SiNuxtdotjs className="hover:scale-110 transition-transform duration-300" />
            <SiExpress className="hover:scale-110 transition-transform duration-300" />
            <SiPostman className="hover:scale-110 transition-transform duration-300" />
            <FaFigma className="hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://github.com/panwazii/FPPP-RSU"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-black border-2 text-blue-500 font-bold px-4 py-2 mt-4 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300 flex items-center justify-center gap-2"
            >
              <FaGithub />
              <span>Code on Github</span>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/assets/projects/Fppp.png"
            alt="Project Food process plant pilot"
            className="h-[500px] object-contain rounded-lg shadow-md "
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
