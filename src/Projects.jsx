import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiX, HiArrowRight } from "react-icons/hi";
import ElectricBorder from "./components/ElectricBorder";

const projects = [
  {
    title: "Iqra International",
    subtitle: "Business Solutions Platform",
    description:
      "Website for an Australian-based company providing tailored business solutions. Fully responsive with a modern, clean interface.",
    longDescription:
      "Designed and developed a comprehensive digital presence for Iqra International, an Australian company specializing in tailored business solutions. The platform features a fully responsive layout that adapts seamlessly across all devices, with intuitive navigation, dynamic content sections, and a polished visual identity that reflects the company's professional ethos.",
    tech: ["React", "CSS", "Tailwind"],
    role: "Design & Development",
    year: "2024",
    github: "https://github.com/AnastasiaKaldi",
    live: "https://iqrainternational.com.au/",
  },
  {
    title: "Cosmos",
    subtitle: "3D Space Exploration",
    description:
      "An educational platform exploring the universe — from galaxies to stars and planets with immersive 3D visualizations.",
    longDescription:
      "Cosmos is an immersive educational experience that takes users on a journey through the universe. Featuring real-time 3D visualizations powered by Three.js and React Three Fiber, users can explore galaxies, stars, and planets in an interactive environment. The project combines scientific accuracy with stunning visual design to make space exploration accessible and engaging.",
    tech: ["React", "Three.js", "R3F"],
    role: "Full Stack Development",
    year: "2024",
    github: "https://github.com/AnastasiaKaldi/Cosmos",
    live: "https://ourcosmos.netlify.app/",
  },
  {
    title: "Side Studio",
    subtitle: "Marketing & Management Agency",
    description:
      "Website for a Greek marketing and management company. A sleek, modern digital presence built for impact.",
    longDescription:
      "Designed and developed the website for Side Studio, a Greece-based marketing and management agency. The site showcases the company's services and portfolio with a clean, contemporary design that reflects their creative expertise. Built with a focus on visual storytelling, smooth interactions, and a fully responsive layout that delivers a polished experience across all devices.",
    tech: ["React", "CSS", "Tailwind"],
    role: "Design & Development",
    year: "2024",
    github: "https://github.com/AnastasiaKaldi",
    live: "https://sidestudiogreece.netlify.app/",
  },
  {
    title: "Cricos Marketing",
    subtitle: "Brand Marketing Platform",
    description:
      "Website for an Australian brand marketing company. Built with performance and responsiveness in mind.",
    longDescription:
      "Developed a high-performance marketing website for Cricos, an Australian company specializing in brand strategy and digital marketing. The site was engineered for speed and visual impact, featuring optimized assets, smooth animations, and a responsive design that delivers a consistent experience across all screen sizes and devices.",
    tech: ["React", "CSS", "Tailwind"],
    role: "Design & Development",
    year: "2024",
    github: "https://github.com/AnastasiaKaldi",
    live: "https://cricosmarketing.com/",
  },
];

/* ─── 3D Tilt Card with cursor-tracking spotlight ─── */
function TiltCard({ project, index, onOpen }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ rotateX, rotateY });
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }, []);

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.8, 0.25, 1] }}
      className="perspective-[1200px]"
    >
      <ElectricBorder
        color="#9A0D1B"
        speed={0.6}
        chaos={0.08}
        borderRadius={0}
        style={{ borderRadius: 0 }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onClick={() => onOpen(index)}
          className="relative cursor-pointer overflow-hidden"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transition: isHovered
              ? "transform 0.1s ease-out"
              : "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Spotlight glow that follows cursor */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none z-10"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(154, 13, 27, 0.15), transparent 40%)`,
            }}
          />

          {/* Border glow effect */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none z-10"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(230, 205, 181, 0.06), transparent 40%)`,
            }}
          />

          {/* Card content */}
          <div
            className="relative z-20 p-5 md:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(53, 6, 22, 0.5), rgba(29, 5, 21, 0.9))",
              backdropFilter: "blur(20px)",
            }}
          >
          {/* Top row: number + year */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-[11px] font-mono text-cream/15 tracking-wider">
              0{index + 1}
            </span>
            <span className="text-[11px] font-mono text-cream/15 tracking-wider">
              {project.year}
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-[10px] uppercase tracking-[0.3em] text-scarlet/80 mb-3">
            {project.subtitle}
          </p>

          {/* Title */}
          <h3
            className="font-display text-2xl md:text-3xl lg:text-4xl text-cream mb-5 transition-colors duration-500"
            style={{ transform: "translateZ(30px)" }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-cream/35 font-light leading-relaxed mb-8 max-w-md">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-[0.15em] text-cream/25 border border-cream/[0.06] px-3 py-1.5 hover:border-scarlet/30 hover:text-cream/50 transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Bottom: View Project prompt */}
          <div className="flex items-center justify-between pt-6 border-t border-cream/[0.04]">
            <span className="text-[11px] uppercase tracking-[0.2em] text-cream/20 group-hover:text-cream/40 transition-colors">
              {project.role}
            </span>
            <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cream/25 hover:text-scarlet transition-colors duration-300">
              View Project
              <HiArrowRight
                size={12}
                className="transition-transform duration-300"
                style={{
                  transform: isHovered ? "translateX(4px)" : "translateX(0)",
                }}
              />
            </span>
          </div>
        </div>
        </div>
      </ElectricBorder>
    </motion.div>
  );
}

/* ─── Full-screen project reveal overlay ─── */
function ProjectOverlay({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
      style={{
        background: "rgba(29, 5, 21, 0.95)",
        backdropFilter: "blur(30px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-cream/[0.06]"
        style={{
          background: "linear-gradient(160deg, #350616, #1D0515 40%, #1D0515)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center border border-cream/10 text-cream/40 hover:text-cream hover:border-scarlet transition-all duration-300"
        >
          <HiX size={18} />
        </button>

        {/* Decorative top accent */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-scarlet to-transparent" />

        <div className="p-5 md:p-14 lg:p-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-scarlet">
                {project.subtitle}
              </span>
              <span className="h-px flex-1 bg-cream/[0.04]" />
              <span className="text-[10px] font-mono text-cream/15">
                {project.year}
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-cream font-semibold tracking-tight leading-[0.95]">
              {project.title}
            </h2>
          </motion.div>

          {/* Live site preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 md:mt-14 relative w-full overflow-hidden border border-cream/[0.06]"
            style={{ height: "clamp(250px, 40vw, 450px)" }}
          >
            <div
              className="absolute top-0 left-0 origin-top-left"
              style={{
                width: "1280px",
                height: "800px",
                transform: "scale(var(--preview-scale))",
              }}
              ref={(el) => {
                if (el && el.parentElement) {
                  const parentWidth = el.parentElement.clientWidth;
                  el.style.setProperty("--preview-scale", parentWidth / 1280);
                }
              }}
            >
              <iframe
                src={project.live}
                title={`${project.title} preview`}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin"
                tabIndex={-1}
              />
            </div>
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #1D0515, transparent)",
              }}
            />
          </motion.div>

          {/* Details grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-12 md:mt-16 grid md:grid-cols-3 gap-10 md:gap-16"
          >
            {/* Description */}
            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-cream/25 mb-4">
                Overview
              </p>
              <p className="text-base md:text-lg text-cream/55 font-light leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Meta */}
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-cream/25 mb-3">
                  Role
                </p>
                <p className="text-sm text-cream/60 font-light">
                  {project.role}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-cream/25 mb-3">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.15em] text-cream/40 border border-cream/[0.08] px-3 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-cream/25 mb-3">
                  Year
                </p>
                <p className="text-sm text-cream/60 font-light font-mono">
                  {project.year}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-14 md:mt-20 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-crimson hover:bg-scarlet text-cream px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              Visit Live Site
              <FaExternalLinkAlt
                size={11}
                className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 border border-cream/10 hover:border-cream/25 text-cream/50 hover:text-cream px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              <FaGithub size={14} />
              View Source
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Projects Section ─── */
function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="projects" className="relative py-20 md:py-40">
      <div
        className="gradient-orb gradient-orb-1"
        style={{ top: "20%", right: "-15%" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-12 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] text-scarlet mb-4"
          >
            02 / Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-heading text-cream"
          >
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-sm text-cream/30 font-light max-w-md"
          >
            Select a project to explore the details.
          </motion.p>
        </div>

        {/* Projects grid — 3D tilt cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <TiltCard
              key={project.title}
              project={project}
              index={i}
              onOpen={setOpenIndex}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="accent-line mt-32" />
      </div>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {openIndex !== null && (
          <ProjectOverlay
            project={projects[openIndex]}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
