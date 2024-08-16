/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import picture from "../src/assets/about.png";
import music from "../src/assets/music.gif";
import coding from "../src/assets/coding.gif";
import gaming from "../src/assets/gaming.gif";
import travel from "../src/assets/travel.gif";

function About() {
  return (
    <section className="AboutMob">
      <div className="">
        <div>
          <h1 className="AboutMe text-4xl ml-6 text-white">About Me</h1>
          <div className="">
            <img
              src={picture}
              alt="profile"
              className="AboutPhoto rounded-lg shadow-lg"
            />
          </div>
          <div className="Container rounded-lg shadow-lg">
            <p
              className="text-sm text-white"
              style={{ fontFamily: "Playfair Display" }}
            >
              I have a diverse range of hobbies that keep me creatively engaged
              and constantly evolving. They play a crucial role in both my
              personal and professional growth. Music production and composition
              allow me to express my emotions and ideas through sound, while
              gaming offers an exciting escape into different worlds, helping me
              sharpen skills such as problem-solving, strategic thinking, and
              quick decision-making.Mainwhile, Coding is a passion that enables
              me to solve problems and build innovative projects, whilst also
              showing my creativity through web and game
              design.Finally,traveling, especially with my other half, is
              constantly exposing me to new cultures, foods, and experiences,
              inspiring me in new ways. When I'm not coding, I'm probably
              thinking of my 6-year-old Labrador named Maggie, who's back in my
              home country, Greece. She is the sweetest most well behaved dog,
              until you have some food in your hand. Then you have to
              run.Fast.Very Fast.
            </p>
          </div>
        </div>{" "}
        {/* <div className="Gifs">
          <div className="items-center">
            <img src={music} alt="Music GIF" className="rounded-lg shadow-lg" />
            <p className="text-white text-sm" style={{ fontFamily: "Molle" }}>
              Music
            </p>
          </div>
          <div className="items-center">
            <img
              src={coding}
              alt="Coding GIF"
              className="rounded-lg shadow-lg"
            />
            <p className="text-white text-sm" style={{ fontFamily: "Molle" }}>
              Coding
            </p>
          </div>
          <div className="items-center">
            <img
              src={gaming}
              alt="gaming GIF"
              className="rounded-lg shadow-lg"
            />
            <p className="text-white text-sm" style={{ fontFamily: "Molle" }}>
              Gaming
            </p>
          </div>
          <div className="items-center">
            <img
              src={travel}
              alt="Travel GIF"
              className="rounded-lg shadow-lg"
            />
            <p className="text-white text-sm" style={{ fontFamily: "Molle" }}>
              Travel
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default About;
