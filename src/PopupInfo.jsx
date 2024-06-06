import React from "react";
import { Link } from "react-router-dom";

const PopupInfo = ({ currentStage }) => {
  const containerStyle = "container-class py-4 px-8 mx-5";

  if (currentStage === 1)
    return (
      <div className={containerStyle}>
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue text-white">
          Hello, I'm
          <span className="font-semibold mx-2 text-white">Natasha</span>
          👋
          <br />A UI/UX developer and Musician from Greece 🇬🇷
        </h1>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className={containerStyle}>
        <p className="font-medium sm:text-xl text-center">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className={containerStyle}>
        <p className="font-medium text-center sm:text-xl">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className={containerStyle}>
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>
      </div>
    );
  }

  return null;
};

export default PopupInfo;
