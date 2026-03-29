import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiArrowDown } from "react-icons/hi";
import Aurora from "./components/Aurora";

const skills = [
  "React",
  "Three.js",
  "JavaScript",
  "Python",
  "Java",
  "C",
  "Figma",
  "Tailwind",
];

function HomePage() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Aurora WebGL background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Aurora
          colorStops={["#6A040F", "#9A0D1B", "#350616"]}
          blend={0.6}
          amplitude={1.2}
          speed={0.8}
        />
      </div>

      {/* Subtle grid lines on top - hidden on small mobile */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none hidden sm:block">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(230,205,181,1) 1px, transparent 1px), linear-gradient(90deg, rgba(230,205,181,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 md:px-12 text-center overflow-hidden">
        {/* Intro label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-cream/40 mb-4 md:mb-6"
        >
          Creative Developer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-semibold text-cream leading-[0.9] tracking-tight"
        >
          Anastasia
          <br />
          <span className="italic font-normal text-cream/50">Kaldi</span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 md:mt-12 max-w-xl mx-auto text-xs md:text-base leading-relaxed text-cream/50 font-light px-2 md:px-0"
        >
          Leeds-based self-taught developer and tester with a background in
          Music and Computer Science. I turn bold ideas into polished digital
          experiences through clean code, thorough testing, and creative
          problem-solving.
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-6"
        >
          {[
            {
              icon: <SiGmail size={18} />,
              href: "mailto:contact@anastasiakaldi.com",
              label: "Email",
            },
            {
              icon: <FaLinkedin size={18} />,
              href: "https://www.linkedin.com/in/anastasia-kaldi-3685691b8/",
              label: "LinkedIn",
            },
            {
              icon: <FaGithub size={18} />,
              href: "https://github.com/anastasiakaldi",
              label: "GitHub",
            },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-cream/10 text-cream/40 hover:text-cream hover:border-scarlet hover:bg-scarlet/10 transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3"
        >
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/20 hover:text-cream/50 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiArrowDown size={20} />
        </motion.div>
      </motion.button>

      {/* Side text */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
        <p className="text-[10px] uppercase tracking-[0.4em] text-cream/15 rotate-90 origin-center whitespace-nowrap">
          Portfolio 2025
        </p>
      </div>
    </section>
  );
}

export default HomePage;
