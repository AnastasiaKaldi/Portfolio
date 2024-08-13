import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hamburger from "../src/assets/hamburger.png";
import Icon from "../src/assets/soundOn.png";
import Icon2 from "../src/assets/soundOff.png";
import sound from "../src/assets/hoax.mp3";

const NavBarMob = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(sound));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Error playing the audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="NavMob dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            className="text-2xl text-purple-700 font-semibold dark:text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            AK
          </span>
        </a>
        <div className="flex items-center space-x-4">
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <img
                src={Icon2}
                alt="icon"
                style={{ width: "30px", height: "30px" }}
              />
            ) : (
              <img
                src={Icon}
                alt="icon"
                style={{ width: "30px", height: "30px" }}
              />
            )}
          </button>
          <button onClick={toggleMenu}>
            <img src={hamburger} className="h-8" alt="Hamburger Logo" />
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full mt-2 z-10"
            >
              <ul className="flex flex-col font-medium rounded-lg bg-purple-300 dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <a
                    href="/"
                    className="block py-2 px-3 text-white bg-purple-300 hover:bg-purple-400 rounded dark:bg-purple-600"
                    aria-current="page"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="block py-2 px-3 bg-purple-300 text-white rounded hover:bg-purple-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block py-2 px-3 bg-purple-300 text-white rounded hover:bg-purple-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    Get in Touch
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBarMob;
