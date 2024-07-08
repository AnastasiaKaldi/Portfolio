/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cosmos from "../src/assets/Cosmos.png";
import Musa from "../src/assets/Musa.png";
import Under from "../src/assets/underConstruction.jpg";

function About() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="Projects">
      <div className="Projects grid grid-cols-2">
        <h1 className="MyProjects text-white text-7xl">Projects</h1>
        <Carousel responsive={responsive}>
          <div className="card rounded-sm">
            <img
              className="webImage rounded-lg"
              src={Cosmos}
              alt="Cosmos"
            ></img>
            <h3 className="text-white">Cosmos</h3>
            <p className="price">
              An educational website showcasing information about components of
              the universe. Some tools that were used in this project include
              React, React-three-fiber, and CSS.
            </p>
          </div>
          <div className="card rounded-sm">
            <img className="webImage rounded-lg" src={Musa} alt="Cosmos"></img>
            <h3 className="text-white">Cosmos</h3>
            <p className="price">
              An educational website showcasing information
            </p>
          </div>
          <div className="card rounded-sm">
            <img className="webImage rounded-lg" src={Under} alt="Cosmos"></img>
            <h3 className="text-white">Cosmos</h3>
            <p className="price">
              An educational website showcasing information
            </p>
          </div>
          <div className="card rounded-sm">
            <img
              className="webImage rounded-lg"
              src={Cosmos}
              alt="Cosmos"
            ></img>
            <h3 className="text-white">Cosmos</h3>
            <p className="price">
              An educational website showcasing information
            </p>
          </div>
        </Carousel>
        ;
      </div>
    </section>
  );
}

export default About;
