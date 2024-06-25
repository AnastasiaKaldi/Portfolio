/* eslint-disable react/no-unescaped-entities */
import React from "react";
import picture from "../src/assets/about.png"; // Adjust the path to your image file
import { FaReact, FaPython, FaJava, FaFigma } from "react-icons/fa"; // Importing icons
import { SiC } from "react-icons/si";
import kaboomLogo from "../src/assets/Kaboom.png"; // Importing SVG logo
import threeJsLogo from "../src/assets/Three.png"; // Importing PNG logo for Three.js

function About() {
  return (
    <section className="About p-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="AboutMe text-7xl mb-24 text-white">About Me</h1>
          <div className="Container p-8 rounded-lg shadow-lg">
            <p className="TheText text-lg text-white mt-4">
              Hi, I'm a self-taught developer with a passion for creating and
              problem-solving. I spent a year in a computer science course and
              hold a Bachelor of Arts in Music. My diverse background fuels my
              creativity and approach to coding. Over the past year, I've honed
              my skills in various technologies including Figma, React, Kaboom,
              Java, Python, and C. Whether I'm designing user interfaces,
              building dynamic web applications, or developing interactive
              games, I enjoy turning ideas into reality. When I'm not coding,
              I'm probably thinking of my 6-year-old Labrador named Maggie,
              who's back in my home country Greece. She's my loyal companion and
              brings a lot of joy to my life.
            </p>
          </div>
          <div className="mt-24 flex flex-wrap gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaReact className="text-4xl text-blue-500" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <img src={kaboomLogo} alt="Kaboom.js" className="w-12 h-12" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <img src={threeJsLogo} alt="Three.js" className="w-12 h-12" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaPython className="text-4xl text-yellow-300" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaJava className="text-4xl text-red-500" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <SiC className="text-4xl text-gray-400" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaFigma className="text-4xl text-purple-500" />
            </div>
          </div>
        </div>
        <div>
          <img src={picture} alt="profile" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default About;
