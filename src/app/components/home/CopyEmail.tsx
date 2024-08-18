"use client";

import React from "react";
import { TbCopy } from "react-icons/tb";
import useScrollObserver from "../ScrollObserver";

const CopyEmail = () => {
  useScrollObserver(".js-show-on-scroll", "animate-fadeIn");
  const handleCopy = () => {
    const email = "teenpanuvit@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email address copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="container drop-shadow-2xl mx-auto flex flex-col items-center justify-center min-h-screen text-center lg:text-left lg:flex-row lg:items-center lg:justify-center js-show-on-scroll">
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Thank you for the <span className="text-black">opportunity</span>
          <br />
          given.
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          I hope my experience and knowledge can help achieve your goal.
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            className="bg-white shadow-2xl text-blue-500 font-bold px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300 flex items-center gap-2 text-center"
            onClick={handleCopy}
          >
            <TbCopy className="text-xl" />
            Copy my email address
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyEmail;
