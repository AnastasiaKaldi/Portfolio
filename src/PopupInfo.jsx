/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PopupInfo from "./PopupInfo"; // Import the PopupInfo component

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

const Infobox = ({ text, link, btnText, children }) => {
  return (
    <div className="infobox">
      <p>{text}</p>
      <Link to={link}>
        <button>{btnText}</button>
      </Link>
      {children}
    </div>
  );
};

const PopupContainer = ({ currentStage }) => {
  // Rename PopupInfo to PopupContainer
  const containerStyle = "container-class py-4 px-8 mx-5";

  return (
    <AnimatePresence>
      {currentStage === 1 && (
        <motion.div
          key="stage2"
          className={containerStyle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <PopupInfo currentStage={currentStage} />{" "}
          {/* Render PopupInfo here */}
          <Infobox
            text="I am interested in music and tech and I like to make websites"
            link=""
            btnText="Learn more"
          />
        </motion.div>
      )}
      {currentStage === 2 && (
        <motion.div
          key="stage2"
          className={containerStyle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <PopupInfo currentStage={currentStage} />{" "}
          {/* Render PopupInfo here */}
          <Infobox
            text="I am interested in music and tech and I like to make websites"
            link=""
            btnText="Learn more"
          />
        </motion.div>
      )}
      {currentStage === 3 && (
        <motion.div
          key="stage3"
          className={containerStyle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="font-medium sm:text-xl text-center">
            Need a project done or looking for a dev? <br />
            Lets have a chat! ☕️
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupContainer; // Export PopupContainer instead of PopupInfo
