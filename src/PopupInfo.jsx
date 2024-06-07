/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

const Infobox = ({ text, link, btnText }) => {
  return (
    <div className="infobox">
      <p>{text}</p>
      <a href={link}>
        <button>{btnText}</button>
      </a>
    </div>
  );
};

const PopupInfo = ({ currentStage }) => {
  const containerStyle = "container-class py-4 px-8 mx-5";

  return (
    <AnimatePresence>
      {currentStage === 1 && (
        <motion.div
          key="stage1"
          className={containerStyle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Infobox
            text="Hello, I'm Natasha 👋 A UI/UX developer and Musician from Greece 🇬🇷"
            link="#"
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
          <Infobox
            text="Worked with many companies and picked up many skills along the way"
            link="#"
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
            Led multiple projects to success over the years. <br />
            Curious about the impact?
          </p>
        </motion.div>
      )}
      {currentStage === 4 && (
        <motion.div
          key="stage4"
          className={containerStyle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="font-medium sm:text-xl text-center">
            Need a project done or looking for a dev? <br />
            I'm just a few keystrokes away.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupInfo;
