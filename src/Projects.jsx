/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cosmos from "../src/assets/Cosmos.png";
import Musa from "../src/assets/Musa.png";
import Under from "../src/assets/underConstruction.jpg";
import Icon from "../src/assets/code.png";
import iqra from "../src/assets/Iqra.png";
import cricos from "../src/assets/Cricos.png";

function About() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="ProjectsPage">
      <div className="Projects">
        <h1
          className="MyProjects text-white text-7xl"
          style={{ fontFamily: "Playfair Display", marginTop: "10rem" }}
        >
          Projects
        </h1>
        <div className="Carousel">
          <Carousel responsive={responsive}>
            <div className="card rounded-lg">
              <img className="webImage rounded-lg" src={iqra} alt="Iqra" />
              <h3 className="text-white bold font-bold">Iqra International</h3>
              <p className="price">
                I created the Website for Iqra International, an
                Australian-based company providing tailored business solutions.
                The website was created using React JS, CSS and Tailwind and is
                also responsive on mobile.
              </p>
              <div style={{ display: "flex", gap: "1px" }}>
                <button className="button-with-icon rounded-lg">
                  <a
                    href="https://github.com/AnastasiaKaldi"
                    className="button-link"
                  >
                    <img
                      src={Icon}
                      alt="icon"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                </button>
                <button className="rounded-lg">
                  <a
                    href="https://iqrainternational.com.au/"
                    className="button-link"
                  >
                    Take a Visit
                  </a>
                </button>
              </div>
            </div>

            <div className="card rounded-lg">
              <img className="webImage rounded-lg" src={Cosmos} alt="Cosmos" />
              <h3 className="text-white bold font-bold">Cosmos</h3>
              <p className="price">
                Cosmos is an educational website designed to explore and present
                detailed information about various components of the universe.
                From galaxies to stars and planets, Cosmos offers a
                comprehensive journey through the cosmos. The website is built
                using technologies such as React for interactive user
                interfaces, React-three-fiber for integrating 3D visualizations
                seamlessly, and CSS for styling to ensure a visually appealing
                and user-friendly experience.
              </p>
              <div style={{ display: "flex", gap: "1px" }}>
                <button className="button-with-icon rounded-lg">
                  <a
                    href="https://github.com/AnastasiaKaldi/Cosmos"
                    className="button-link"
                  >
                    <img
                      src={Icon}
                      alt="icon"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                </button>
                <button className="rounded-lg">
                  <a
                    href="https://ourcosmos.netlify.app/"
                    className="button-link"
                  >
                    Take a Visit
                  </a>
                </button>
              </div>
            </div>

            <div className="card rounded-lg">
              <img className="webImage rounded-lg" src={Musa} alt="Musa" />
              <h3 className="text-white font-bold">Project Musa</h3>
              <p className="price">
                Project Musa is an experiment i created as a universiy project.
                The aim of the project was to investigate whether or not 10-15
                year-old children could notice the difference between
                differently recorded sounds. The project contains two identical
                games that aim to teach children the musical notes. Their only
                difference is that in Game A the notes were produced by a real
                piano, while in Game B the notes were produced by a digital midi
                keyboard. The project was created using React, Kaboom js, and
                CSS.
              </p>
              <div style={{ display: "flex", gap: "1px" }}>
                <button className="button-with-icon rounded-lg">
                  <a
                    href="https://github.com/AnastasiaKaldi/MusicGame"
                    className="button-link"
                  >
                    <img
                      src={Icon}
                      alt="icon"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                </button>
                <button className="rounded-lg">
                  <a
                    href="https://projectmusa.netlify.app/"
                    className="button-link"
                  >
                    Take a Visit
                  </a>
                </button>
              </div>
            </div>

            <div className="card rounded-lg">
              <img className="webImage rounded-lg" src={cricos} alt="Cricos" />
              <h3 className="text-white bold font-bold">Cricos Marketing</h3>
              <p className="price">
                I developed the website for Cricos Marketing, an
                Australian-based company that specializes in brand marketing.
                The website was created using React JS, CSS and Tailwind and is
                also responsive on mobile.
              </p>
              <div style={{ display: "flex", gap: "1px" }}>
                <button className="button-with-icon rounded-lg">
                  <a
                    href="https://github.com/AnastasiaKaldi"
                    className="button-link"
                  >
                    <img
                      src={Icon}
                      alt="icon"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </a>
                </button>
                <button className="rounded-lg">
                  <a
                    href="https://cricosmarketing.com/"
                    className="button-link"
                  >
                    Take a Visit
                  </a>
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default About;
