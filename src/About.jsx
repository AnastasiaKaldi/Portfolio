/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import picture from "../src/assets/about.png"; // Adjust the path to your image file
import music from "../src/assets/music.gif";
import coding from "../src/assets/coding.gif";
import cooking from "../src/assets/cooking.gif";
import gamer from "../src/assets/travel.gif"; // Adjust the path to your image file

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
          <div className="flex flex-wrap mt-8 gap-4">
            {" "}
            {/* Added flex properties */}
            <img
              src={music}
              alt="Music GIF"
              className="rounded-lg shadow-lg " // Adjust width as needed
            />
            <p className="text-white text-xl" style={{ fontFamily: "Molle" }}>
              Music
            </p>
            <img
              src={coding}
              alt="Coding GIF"
              className="rounded-lg shadow-lg " // Adjust width as needed
            />
            <p className="text-white text-xl" style={{ fontFamily: "Molle" }}>
              Coding
            </p>
            <img
              src={cooking}
              alt="Cooking GIF"
              className="rounded-lg shadow-lg " // Adjust width as needed
            />
            <p className="text-white text-xl" style={{ fontFamily: "Molle" }}>
              Cooking
            </p>
            <img
              src={gamer}
              alt="Coding GIF"
              className="rounded-lg shadow-lg" // Adjust width as needed
            />
            <p className="text-white text-xl" style={{ fontFamily: "Molle" }}>
              Travel
            </p>
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
