import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import sound from "./assets/hoax.mp3";

function NavBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(sound));
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-xl ${
        scrolled
          ? "bg-midnight/60 border-b border-cream/5"
          : "bg-midnight/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 md:px-12 h-14 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-2xl font-semibold text-cream tracking-wide"
        >
          AK
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollTo("about")} className="nav-link">
            About
          </button>
          <button onClick={() => scrollTo("projects")} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollTo("contact")} className="nav-link">
            Contact
          </button>
          <button
            onClick={togglePlayPause}
            className="ml-4 text-cream/40 hover:text-cream transition-colors duration-300"
          >
            {isPlaying ? <FaVolumeUp size={16} /> : <FaVolumeMute size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={togglePlayPause}
            className="text-cream/40 hover:text-cream transition-colors"
          >
            {isPlaying ? <FaVolumeUp size={16} /> : <FaVolumeMute size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-cream/60 hover:text-cream transition-colors"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mobile-menu md:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {["about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="text-left text-cream/60 hover:text-cream text-sm uppercase tracking-widest transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
