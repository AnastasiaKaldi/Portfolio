// /* eslint-disable react/no-unescaped-entities */
// import Island from "../src/models/Island.jsx";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaReact,
//   FaPython,
//   FaJava,
//   FaFigma,
// } from "react-icons/fa";
// import { SiThreedotjs } from "react-icons/si";
// import { SiC } from "react-icons/si";
// import { SiGmail } from "react-icons/si";

// function HomePage() {
//   return (
//     <section>
//       <div className="Background mt-20">
//         {" "}
//         {/* Adjusted mt-20 to mt-40 to move everything down */}
//         <div className="title-text">
//           <h1 className="text-6xl mb-4 mt-10">
//             {" "}
//             {/* Added mt-10 to move the title further down */}
//             Hello, I'm Anastasia Kaldi!
//           </h1>
//           <div className="flex space-x-4 mb-8">
//             <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
//               <SiGmail className="text-red-600" />
//             </div>
//             <a
//               href="https://www.linkedin.com/in/anastasia-kaldi-3685691b8/"
//               className="button-link"
//             >
//               <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
//                 <FaLinkedin className="text-2xl text-blue-500" />
//               </div>
//             </a>
//             <a href="https://github.com/anastasiakaldi" className="button-link">
//               <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
//                 <FaGithub className="text-2xl text-black" />
//               </div>
//             </a>
//           </div>
//           <p className="text-xl mt-4 mb-8">
//             Hi, I'm a Leeds based self-taught developer with a passion for
//             creating and problem-solving. I spent a year in a computer science
//             course and hold a Bachelor of Arts in Music. My diverse background
//             fuels my creativity and approach to coding. Over the years, I've
//             honed my skills in various technologies including Figma, React,
//             Kaboom, Java, Python, and C. Whether I'm designing user interfaces,
//             building dynamic web applications, or developing interactive games,
//             I enjoy turning my crazy ideas into reality.
//           </p>
//           <div className="flex gap-4 mt-10">
//             {" "}
//             {/* Added mt-10 to move the bubbles further down */}
//             <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
//               <FaReact className="text-4xl text-blue-500" />
//             </div>
//             <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
//               <SiThreedotjs className="text-4xl text-white" />
//             </div>
//             <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
//               <FaPython className="text-4xl text-yellow-300" />
//             </div>
//             <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
//               <FaJava className="text-4xl text-red-500" />
//             </div>
//             <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
//               <SiC className="text-4xl text-gray-400" />
//             </div>
//             <div className="flex items-center justify-center w-16 h-16 bg-purple-300 rounded-full shadow-lg hover:bg-violet-500 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
//               <FaFigma className="text-4xl text-purple-500" />
//             </div>
//           </div>
//         </div>
//         <Island className="Spline" />{" "}
//       </div>
//     </section>
//   );
// }

// export default HomePage;
// src/App.jsx

import Island from "../src/models/Island.jsx"; // Adjusted path for Island component
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
} from "react-icons/fa";
import { SiThreedotjs, SiC, SiGmail } from "react-icons/si";

function App() {
  return (
    <section>
      <div className="p-10 grid grid-cols-2 items-center">
        {/* Left Column */}
        <div className="p-8 md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hello, Im Anastasia Kaldi!
          </h1>
          <div className="flex space-x-4 mb-8">
            <a
              href="mailto:anastasia@example.com"
              className="text-2xl flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-400 transition duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <SiGmail className="text-red-500" />
            </a>
            <a
              href="https://linkedin.com/in/anastasia"
              className="text-2xl flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <FaLinkedin className="text-blue-500" />
            </a>
            <a
              href="https://github.com/anastasia"
              className="text-2xl flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:bg-gray-300 transition duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <FaGithub className="text-black" />
            </a>
          </div>

          <p className="text-xl max-w-xl mb-4">
            Hi, I’m a Leeds based self-taught developer with a passion for
            creating and problem-solving. I spent a year in a computer science
            course and hold a Bachelor of Arts in Music. My diverse background
            fuels my creativity and approach to coding. Over the years, I’ve
            honed my skills in various technologies including Figma, React,
            Kaboom, Java, Python, and C. Whether I’m designing user interfaces,
            building dynamic web applications, or developing interactive games,
            I enjoy turning my crazy ideas into reality.
          </p>
          <div className="icon-container ">
            <div className="icon bg-purple-300 rounded-full shadow-lg hover:bg-violet-200 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaReact className=" text-blue-500" />
            </div>
            <div className="icon bg-purple-300 rounded-full shadow-lg hover:bg-violet-200 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaFigma className="text-purple-700" />
            </div>
            <div className="icon bg-purple-300 rounded-full shadow-lg hover:bg-violet-200 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaPython className="text-yellow-300" />
            </div>
            <div className="icon bg-purple-300 rounded-full shadow-lg hover:bg-violet-200 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <FaJava className="text-red-500" />
            </div>
            <div className="icon bg-purple-300 rounded-full shadow-lg hover:bg-violet-200 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <SiC className="text-gray-400" />
            </div>
            <div className="icon bg-purple-300 rounded-full shadow-lg hover:bg-violet-200 transition duration-300 transform hover:-translate-y-1 hover:scale-110">
              <SiThreedotjs className="text-black" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="h-full">
          <Island className="Spline" />
        </div>
      </div>
    </section>
  );
}

export default App;
