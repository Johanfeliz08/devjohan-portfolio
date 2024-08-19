import React from "react";
import { useState } from "react";

import "../components/styles/Header.css";

import homeIcon from "../assets/icons/home.png";
import projectsIcon from "../assets/icons/projects.png";
import aboutmeIcon from "../assets/icons/aboutme.png";
import contactIcon from "../assets/icons/contact.png";
import logo from "../assets/logo.png";


const Header = () => {
  
  const [isChecked, setIsChecked] = useState(false);

  const toggleHamburgerMenu = () => {

    /* 
    The hamburgericon behind is a checkbox, so if its checked it shows the lateral panel
    Otherwise it hide it. 
    And due to that the lateral style for the ul is only active when the screen size is too small
    We just have to show or hide it
    */

     if (isChecked) {
      return "flex"
     } else {
      return "hidden"
     }

  }
  
  return (
    <>
      <header className="mainheader flex flex-row justify-center items-center w-[1280px] max-w-screen-xl h-[10px] pt-10">
        <nav className="navbar flex flex-row justify-between md:justify-center items-center fixed z-40 px-16 py-5 border-black border-solid border-b w-full">
          <div className="logo-container md:hidden">
            <img src={logo.src} alt="devjohan logo" className=" size-14" />
          </div>

          <ul className={`hambugermenuOpen navulopen md:flex md:flex-row md:space-x-8 ${toggleHamburgerMenu()}`}>
            <li>
              <a href="/#" className="navlink hvr-underline-from-center">
                <img
                  src={homeIcon.src}
                  alt="home icon"
                  aria-hidden="true"
                  className="size-5"
                />
                <span className="navspan">HOME</span>
              </a>
            </li>
            <li>
              <a href="/#projects" className="navlink hvr-underline-from-center">
                <img
                  src={projectsIcon.src}
                  alt="Layers icon"
                  aria-hidden="true"
                  className="size-5"
                />
                <span className="navspan">PROJECTS</span>
              </a>
            </li>
            <li>
              <a href="/#aboutme" className="navlink hvr-underline-from-center">
                <img
                  src={aboutmeIcon.src}
                  alt="Person icon"
                  aria-hidden="true"
                  className="size-5"
                />
                <span className="navspan">ABOUT ME</span>
              </a>
            </li>
            <li>
              <a href="/#contact" className="navlink hvr-underline-from-center">
                <img
                  src={contactIcon.src}
                  alt="Phone icon"
                  aria-hidden="true"
                  className="size-5"
                />
                <span className="navspan">CONTACT</span>
              </a>
            </li>
          </ul>

          <div className="hamburgericon md:hidden">
            <label className="hamburger">
              <input type="checkbox" id="hamburgercb" value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
              <svg viewBox="0 0 32 32">
                <path
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  className="line line-top-bottom"
                ></path>
                <path d="M7 16 27 16" className="line"></path>
              </svg>
            </label>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
