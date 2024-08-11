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
    <section className="About p-8">
      <div className="grid grid-cols-2 gap-4 mt-28">
        <div>
          <h1 className="AboutMe text-7xl mb-24 ml-14 text-white">About Me</h1>
          <div className="Container p-8 rounded-lg shadow-lg mt-16">
            <p className="TheText text-m text-white mt-4">
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
              run.Fast.Very Fast. In summary, I'm always looking for new ways to
              grow, and primarily these hobbies allow me to do so:
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="flex flex-col items-center">
              <img
                src={music}
                alt="Music GIF"
                className="rounded-lg shadow-lg"
              />
              <p
                className="text-white text-lg mt-2"
                style={{ fontFamily: "Molle" }}
              >
                Music
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={coding}
                alt="Coding GIF"
                className="rounded-lg shadow-lg"
              />
              <p
                className="text-white text-lg mt-2"
                style={{ fontFamily: "Molle" }}
              >
                Coding
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={gaming}
                alt="gaming GIF"
                className="rounded-lg shadow-lg"
              />
              <p
                className="text-white text-lg mt-2"
                style={{ fontFamily: "Molle" }}
              >
                Gaming
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={travel}
                alt="Travel GIF"
                className="rounded-lg shadow-lg"
              />
              <p
                className="text-white text-lg mt-2"
                style={{ fontFamily: "Molle" }}
              >
                Travel
              </p>
            </div>
          </div>
        </div>
        <div className="mt-36">
          <img src={picture} alt="profile" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default About;
