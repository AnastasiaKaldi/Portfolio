import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
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
          <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue text-white">
            Hello, I'm
            <span className="font-semibold mx-2 text-white">Natasha</span>
            👋
            <br />A UI/UX developer and Musician from Greece 🇬🇷
          </h1>
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
          <p className="font-medium sm:text-xl text-center">
            I am interested in creating beautiful and functional websites and
            web applications. <br />I am also a musician and I love creating
            music! 🎵
          </p>
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

export default PopupInfo;
