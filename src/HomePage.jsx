/* eslint-disable react/no-unescaped-entities */
import Island from "../src/models/Island.jsx";
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
    <section className="home">
      <div className="Background mt-20">
        {" "}
        <div className="title-text">
          <h1 className="text-6xl mb-4 mt-10"> Hello, I'm Anastasia Kaldi!</h1>
          <div className="flex space-x-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <SiGmail className="text-red-600" />
            </div>
            <a
              href="https://www.linkedin.com/in/anastasia-kaldi-3685691b8/"
              className="button-link"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
                <FaLinkedin className="text-2xl text-blue-500" />
              </div>
            </a>
            <a href="https://github.com/anastasiakaldi" className="button-link">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
                <FaGithub className="text-2xl text-black" />
              </div>
            </a>
          </div>
          <p className="text-xl mt-4 mb-8">
            Hi, I'm a Leeds based self-taught developer with a passion for
            creating and problem-solving. I spent a year in a computer science
            course and hold a Bachelor of Arts in Music. My diverse background
            fuels my creativity and approach to coding. Over the years, I've
            honed my skills in various tools and technologies including React,
            Figma, Javascript Java, Python, and C. Whether I'm designing user
            interfaces, building dynamic web applications, or developing
            interactive games, I enjoy turning my crazy ideas into reality.
          </p>
          <div className="flex gap-4 mt-10">
            {" "}
            {/* Added mt-10 to move the bubbles further down */}
            <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaReact className="text-4xl text-blue-500" />
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <SiThreedotjs className="text-4xl text-white" />
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
            <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <TbBrandJavascript className="text-4xl text-blue-950" />
            </div>
          </div>
        </div>
        <Island className="Spline" />{" "}
      </div>
    </section>
  );
}

export default HomePage;
