"use client";
import type { NextPage } from "next";
import useScrollObserver from "../ScrollObserver";
import SkillCircle from "../Skills";

const MySkills: NextPage = () => {
  useScrollObserver(".js-show-on-scroll", "animate-fadeIn");
  const skills = [
    { img: "/assets/skills/Vue.png", name: "Vue", progress: 58 },
    { img: "/assets/skills/Nuxt.svg", name: "Nuxt", progress: 50 },
    { img: "/assets/skills/Javascript.png", name: "JavaScript", progress: 55 },
    { img: "/assets/skills/React.png", name: "React", progress: 40 },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-[70vh] drop-shadow-2xl js-show-on-scroll">
      <div className="p-6">
        <div className="text-center my-[4rem] font-bold text-4xl">
          <h1>My skills</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex-shrink-0">
              <SkillCircle
                imageSrc={skill.img}
                strokeWidth={10}
                progress={skill.progress}
                diameter={200}
                name={skill.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
