"use client";
import type { NextPage } from "next";
import useScrollObserver from "../ScrollObserver";
import { LiaReact } from "react-icons/lia";
import { TbSeo } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoDesktopSharp } from "react-icons/io5";

const SecondSection: NextPage = () => {
  useScrollObserver(".js-show-on-scroll", "animate-fadeIn");
  const cardInfo = [
    {
      title: "Web application",
      content: "Website for browser.",
      avatar: <IoDesktopSharp />,
    },
    { title: "SEO", content: "Good for SEO.", avatar: <TbSeo /> },
    {
      title: "Mobile website",
      content: "Responsive for mobile.",
      avatar: <FaMobileScreenButton />,
    },
    {
      title: "Base on React",
      content: "Create by react.",
      avatar: <LiaReact />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center drop-shadow-2xl gap-6 js-show-on-scroll">
      {cardInfo.map((item, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden bg-blue6 w-full sm:w-[300px] transition-transform transform hover:scale-105"
        >
          <div className="px-6 py-4 flex items-center">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-xl mr-5 text-3xl text-blue-600">
                {item.avatar}
              </div>
            </div>
            <div>
              <div className="font-bold text-xl text-black mb-2">
                {item.title}
              </div>
              <p className="text-gray-700 text-base">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecondSection;
