import React from "react";
import {
  CopyEmail,
  FirstSection,
  SecondSection,
  MyProjects,
  AboutMe,
  MySkills,
  MyTimeline,
} from "./components/home";

function Home() {
  return (
    <>
      <div>
        <section id="first" className="bg-blue5 p-6">
          <FirstSection />
        </section>

        <section id="second" className="bg-blue4 p-6">
          <SecondSection />
        </section>

        <section id="projects" className="bg-gray-50 p-6">
          <MyProjects />
        </section>

        <section id="about" className="bg-blue3 p-6">
          <AboutMe />
        </section>

        <section id="skills" className="bg-blue2 p-6">
          <MySkills />
        </section>

        <section id="timeline" className="bg-blue3 p-6">
          <MyTimeline />
        </section>

        <section
          id="contact"
          className="p-6 bg-gradient-to-r from-blue3 via-blue4 to-blue5"
        >
          <CopyEmail />
        </section>
      </div>
    </>
  );
}

export default Home;
