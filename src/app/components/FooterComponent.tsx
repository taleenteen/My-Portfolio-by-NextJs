import React from "react";
import Link from "next/link";

function FooterComponent() {
  return (
    <>
      <div className="flex flex-col drop-shadow-2xl">
        <div className="flex-grow"></div>

        <footer className="flex flex-col space-y-10 justify-center m-10">
          <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
            <ul className="flex gap-4">
              <li className="text-white hover:text-gray-300">
                <Link href="#first">Home</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link href="#about">About Me</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="flex justify-center space-x-5">
            <a
              className="hover:scale-[1.2] transition-all"
              href="https://www.facebook.com/IMI.pk.teen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
            </a>
            <a
              className="hover:scale-[1.2] transition-all"
              href="https://www.linkedin.com/in/panuvit-khaiokham-591753321"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
            </a>
            <a
              className="hover:scale-[1.2] transition-all"
              href="https://www.instagram.com/ptk.t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
            </a>
            <a
              className="hover:scale-[1.2] transition-all"
              href="https://github.com/taleenteen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/github.png" />
            </a>
          </div>

          <p className="text-center text-gray-50 font-medium">
            &copy; 2024 Taleen Company Ltd.
          </p>
        </footer>
      </div>
    </>
  );
}

export default FooterComponent;
