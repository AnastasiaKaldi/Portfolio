/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../src/assets/soundOn.png";
import Icon2 from "../src/assets/soundOff.png";
import sound from "../src/assets/hoax.mp3";

function NavBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(sound));

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
    <div className="NavBar">
      <div className="fixed top-0 left-0 w-full z-50">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse shadow-md"
        >
          <span
            className="self-center text-4xl font-semibold whitespace-nowrap text-purple-800 -mb-28"
            style={{ fontFamily: "Playfair Display" }}
          >
            AK
          </span>
        </a>
        <div className="HomeComponent text-m relative container mx-auto py-4 mr-80 space-x-8">
          <FlyoutLink href="/" FlyoutContent={<HomeContent />}>
            <span style={{ fontFamily: "Playfair Display" }}>Home</span>
          </FlyoutLink>
        </div>
        <div className="ProjectsComponent text-m relative container mx-auto py-4 ml-80 flex space-x-8">
          <FlyoutLink href="/projects" FlyoutContent={<ProjectsContent />}>
            <span style={{ fontFamily: "Playfair Display" }}>Projects</span>
          </FlyoutLink>
        </div>
        <div className="ReachComponent text-m relative container mx-auto py-4 ml-80 flex space-x-8">
          <FlyoutLink href="/contact" FlyoutContent={<ReachContent />}>
            <span style={{ fontFamily: "Playfair Display" }}>Get in touch</span>
          </FlyoutLink>
        </div>
        <div className="SoundComponent relative container mx-auto py-4 ml-80 flex space-x-8">
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
        </div>
      </div>
    </div>
  );
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative inline-block"
    >
      <a
        href={href}
        className="relative h-fit w-fit text-white hover:text-purple-800"
        style={{ fontFamily: "Times New Roman" }}
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute bottom-0 left-0 right-0 mt-10 h-1 origin-left rounded-full bg-purple-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black rounded-xl shadow-lg"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            {FlyoutContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectsContent = () => {
  return (
    <div className="w-64 bg-purple-200 rounded-xl p-6">
      <div className="mb-3 space-y-3">
        <a
          href="https://ourcosmos.netlify.app/"
          className="block text-m text-purple-400 hover:underline"
        >
          <span style={{ fontFamily: "Playfair Display" }}>Cosmos</span>
        </a>
        <a
          href="https://projectmusa.netlify.app/"
          className="block text-m text-purple-400 hover:underline"
        >
          <span style={{ fontFamily: "Playfair Display" }}>Project Musa</span>
        </a>
      </div>
    </div>
  );
};

const HomeContent = () => {};

const ReachContent = () => {};

FlyoutLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  FlyoutContent: PropTypes.node,
};

FlyoutLink.defaultProps = {
  FlyoutContent: null,
};

export default NavBar;
