/* eslint-disable react/no-unescaped-entities */

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
} from "react-icons/fa";
import { SiThreedotjs } from "react-icons/si";
import { SiC } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

function HomePage() {
  return (
    <section className="homeMob">
      <div className="Background mt-20">
        {" "}
        <div className="TextMob">
          <h1 className="text-2xl mb-8"> Hello, I'm Anastasia Kaldi!</h1>
          <div className="flex space-x-4 mb-8 ml-20">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <SiGmail className="text-red-600" />
            </div>
            <a
              href="https://www.linkedin.com/in/anastasia-kaldi-3685691b8/"
              className="button-link"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
                <FaLinkedin className="text-2xl text-blue-500" />
              </div>
            </a>
            <a href="https://github.com/anastasiakaldi" className="button-link">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
                <FaGithub className="text-2xl text-black" />
              </div>
            </a>
          </div>
          <p
            className="text-sm mt-4 mb-8"
            style={{ fontFamily: "Playfair Display" }}
          >
            Hi, I'm a Leeds based self-taught developer with a passion for
            creating and problem-solving. I spent a year in a computer science
            course and hold a Bachelor of Arts in Music. My diverse background
            fuels my creativity and approach to coding. Over the years, I've
            honed my skills in various tools and technologies including React,
            ThreeJS, Figma, Javascript, Java and Python. Whether I'm designing
            user interfaces, building dynamic web applications, or developing
            interactive games, I enjoy turning my crazy ideas into reality.
          </p>
          <div className="flex gap-4 mt-10">
            {" "}
            <div className="flex items-center justify-center w-12 h-12 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaReact className="text-2xl text-blue-500" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <SiThreedotjs className="text-2xl text-white" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaPython className="text-2xl text-yellow-300" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaJava className="text-2xl text-red-500" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <SiC className="text-2xl text-gray-400" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaFigma className="text-2xl text-purple-500" />
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <TbBrandJavascript className="text-2xl text-blue-950" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
