import Island from "../src/models/Island.jsx";
import gmail from "../src/assets/gmail.webp";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
} from "react-icons/fa";
import { SiC } from "react-icons/si";
import kaboomLogo from "../src/assets/Kaboom.png";
import threeJsLogo from "../src/assets/Three.png";

function HomePage() {
  return (
    <section>
      <div className="Background mt-20">
        {" "}
        {/* Added mt-20 to move everything down */}
        <div className="title-text">
          <h1 className="text-7xl mb-4">Hello, I'm Anastasia!</h1>
          <div className="flex space-x-4 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <img src={gmail} alt="Gmail" className="w-8 h-8" />
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
            {" "}
            {/* Added mb-8 to give space between the text and icons */}
            Hi, I'm a Leeds based self-taught developer with a passion for
            creating and problem-solving. I spent a year in a computer science
            course and hold a Bachelor of Arts in Music. My diverse background
            fuels my creativity and approach to coding. Over the past year, I've
            honed my skills in various technologies including Figma, React,
            Kaboom, Java, Python, and C. Whether I'm designing user interfaces,
            building dynamic web applications, or developing interactive games,
            I enjoy turning ideas into reality.
          </p>
          <div className="flex flex-wrap gap-4">
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
        <Island className="Spline" />
      </div>
    </section>
  );
}

export default HomePage;
