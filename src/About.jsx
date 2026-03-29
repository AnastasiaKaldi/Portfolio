import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";

const ESPEON_SPRITE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/196.gif";
const ESPEON_SHINY =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/196.gif";

const charSheet = {
  name: "Anastasia Kaldi",
  race: "Human",
  class: "Developer / Tester",
  subclass: "School of Creative Arts",
  level: 25,
  alignment: "Chaotic Good",
  background: "Musician",
  homeland: "Greece",
  base: "Leeds, UK",
};

const abilityScores = [
  { name: "STR", score: 12, mod: "+1", desc: "Determination" },
  { name: "DEX", score: 16, mod: "+3", desc: "Clean code" },
  { name: "CON", score: 14, mod: "+2", desc: "Endurance" },
  { name: "INT", score: 18, mod: "+4", desc: "Problem solving" },
  { name: "WIS", score: 15, mod: "+2", desc: "Creative insight" },
  { name: "CHA", score: 17, mod: "+3", desc: "Design sense" },
];

const proficiencies = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Testing / QA", level: 80 },
  { name: "Three.js / WebGL", level: 75 },
  { name: "Python", level: 70 },
  { name: "Figma", level: 80 },
  { name: "CSS / Tailwind", level: 90 },
];

const feats = [
  { icon: "&#127891;", title: "Scholar of Music", desc: "BA Music, mastery of composition" },
  { icon: "&#128187;", title: "Self-Taught Arcana", desc: "Learned code through sheer will" },
  { icon: "&#128270;", title: "Eagle-Eyed Tester", desc: "No bug escapes notice" },
  { icon: "&#127918;", title: "Gamewright", desc: "Interactive worlds with Kaboom.js" },
  { icon: "&#127757;", title: "Planar Traveler", desc: "Three.js & WebGL explorer" },
];

const quests = [
  { title: "The Ballad of Sound", desc: "Production & composition", icon: "&#127925;", status: "ACTIVE" },
  { title: "The Infinite Codebase", desc: "Web & game design", icon: "&#128171;", status: "ACTIVE" },
  { title: "Arena of Champions", desc: "Strategy & quick reflexes", icon: "&#127918;", status: "ACTIVE" },
  { title: "The Wanderer's Path", desc: "Cultures & distant lands", icon: "&#9992;", status: "ACTIVE" },
];

const companions = [
  { name: "Espeon", type: "Familiar", desc: "Psychic feline, loyal companion since the early days." },
  { name: "Maggie", type: "Beast Companion", desc: "Labrador Retriever, sweetest creature alive. Will betray you for food." },
  { name: "Beau", type: "Beast Companion", desc: "German Shepherd / Golden Retriever mix, noble, fluffy, devastatingly handsome." },
];

/* ─── Proficiency Bar ─── */
function ProfBar({ name, level, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm uppercase tracking-[0.1em] text-cream/50 font-medium group-hover:text-cream transition-colors duration-300">{name}</span>
        <span className="text-xs font-mono text-cream/25">+{Math.floor(level / 20)}</span>
      </div>
      <div className="h-2.5 w-full bg-cream/[0.04] overflow-hidden relative">
        <motion.div
          className="h-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: `linear-gradient(90deg, #6A040F, #9A0D1B ${level < 80 ? "100%" : "60%"}, #E6CDB5)` }}
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 1.5, repeatDelay: 3 }}
            style={{ background: "linear-gradient(90deg, transparent, rgba(230,205,181,0.4), transparent)", width: "50%" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Typing text ─── */
function TypingText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 35);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, text, delay]);
  return (
    <span ref={ref}>
      {displayed}
      <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity }} className="text-scarlet">_</motion.span>
    </span>
  );
}

/* ─── Interactive Espeon ─── */
function Espeon() {
  const [isShiny, setIsShiny] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const handleContainerMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    mouseX.set((e.clientX - centerX) * 0.15);
    mouseY.set(-Math.abs(e.clientX - centerX) * 0.04);
    setFlipped(e.clientX < centerX);
  };

  const handleClick = () => {
    setIsShiny((s) => !s);
    setClickCount((c) => c + 1);
    const now = Date.now();
    const newHearts = Array.from({ length: 5 }, (_, i) => now + i);
    setHearts((prev) => [...prev, ...newHearts]);
    setTimeout(() => setHearts((prev) => prev.filter((h) => !newHearts.includes(h))), 1500);
  };

  const rotate = useTransform(springX, [-60, 60], [-8, 8]);
  const messages = ["Esp! Espeon!", "Espeee~!", "*purrs*", "*nuzzles*", "Espe espeon!", "*happy tail wag*"];

  return (
    <div className="relative flex flex-col items-center py-4 cursor-pointer select-none" onMouseMove={handleContainerMouseMove} onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}>
      <motion.div className="absolute bottom-8 w-14 h-3 rounded-full bg-scarlet/[0.06] blur-sm" style={{ x: springX }} />
      <motion.div onClick={handleClick} style={{ x: springX, y: springY, rotate }} className="relative">
        <motion.img
          src={isShiny ? ESPEON_SHINY : ESPEON_SPRITE} alt="Espeon"
          className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-[0_0_24px_rgba(154,13,27,0.5)]"
          style={{ imageRendering: "pixelated", transform: flipped ? "scaleX(-1)" : "scaleX(1)" }}
          animate={{ y: [0, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
        />
        {hearts.map((id) => (
          <motion.span key={id}
            initial={{ opacity: 1, y: 0, x: Math.random() * 60 - 30, scale: 0.5 + Math.random() * 0.8, rotate: Math.random() * 40 - 20 }}
            animate={{ opacity: 0, y: -70 - Math.random() * 30 }}
            transition={{ duration: 1 + Math.random() * 0.5, ease: "easeOut" }}
            className="absolute -top-2 left-1/2 text-scarlet pointer-events-none"
            style={{ fontSize: `${14 + Math.random() * 10}px` }}
          >&#10084;</motion.span>
        ))}
      </motion.div>
      {clickCount > 0 && (
        <motion.div key={clickCount} initial={{ opacity: 0, y: 5, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.3 }} className="mt-2 px-3 py-1 bg-wine/60 border border-cream/[0.08] relative">
          <span className="text-[10px] text-cream/50 italic">{messages[clickCount % messages.length]}</span>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-wine/60 border-l border-t border-cream/[0.08]" />
        </motion.div>
      )}
      <p className="mt-3 text-[9px] text-cream/10 italic">click to pet &middot; follows cursor</p>
    </div>
  );
}

/* ─── D20 ─── */
function D20() {
  return (
    <svg viewBox="0 0 60 60" className="w-5 h-5 text-scarlet/40" fill="currentColor">
      <polygon points="30,2 58,20 48,55 12,55 2,20" fill="none" stroke="currentColor" strokeWidth="2" />
      <polygon points="30,2 48,55 12,55" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <text x="30" y="35" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">20</text>
    </svg>
  );
}

/* ─── Section divider label ─── */
function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-cream/20 mb-6 flex items-center gap-2">
      <span className="text-scarlet/40">&#9830;</span> {children}
      <span className="flex-1 h-px bg-cream/[0.04] ml-2" />
    </p>
  );
}

/* ─── Main ─── */
function About() {
  return (
    <section id="about" className="relative py-20 md:py-40 overflow-hidden">
      <div className="gradient-orb gradient-orb-3" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-10 md:mb-24">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs uppercase tracking-[0.3em] text-scarlet mb-4">
            01 / About
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="section-heading text-cream mb-4">
            About Me
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="font-mono text-sm text-scarlet/60">
            <TypingText text="> unfurling character sheet..." delay={0.5} />
          </motion.div>
        </div>

        {/* ══════ INTRO: Backstory + Espeon side by side ══════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-5 gap-8 md:gap-16 mb-16 md:mb-28"
        >
          {/* Backstory — 3 cols, big readable text */}
          <div className="md:col-span-3">
            <SectionLabel>Backstory</SectionLabel>
            <p className="text-base md:text-xl leading-relaxed text-cream/60 font-light mb-6">
              A self-taught developer from the sunlit lands of Greece, now based
              in Leeds. Trained in the bardic arts with a Bachelor&apos;s in
              Music, and sharpened by a year in the arcane school of Computer
              Science.
            </p>
            <p className="text-base md:text-xl leading-relaxed text-cream/60 font-light mb-6">
              Equally skilled at building and breaking. As a developer I craft
              interfaces, web apps, and interactive games. As a tester I hunt
              bugs with the precision of a ranger tracking prey.
            </p>
            <p className="text-base leading-relaxed text-cream/40 font-light italic border-l-2 border-scarlet/20 pl-5">
              When AFK, I&apos;m probably thinking of my two beast companions
              back in Greece. Maggie the Labrador, sweetest creature alive,
              until food appears. And Beau the German Shepherd / Golden Retriever
              mix, noble, fluffy, and devastatingly handsome.
            </p>
          </div>

          {/* Espeon — 2 cols */}
          <div className="md:col-span-2 flex items-center justify-center">
            <Espeon />
          </div>
        </motion.div>

        {/* ══════ CHARACTER SHEET CARD ══════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-cream/[0.08] mb-16 overflow-hidden"
          style={{
            background: "linear-gradient(160deg, rgba(53, 6, 22, 0.5), rgba(29, 5, 21, 0.95))",
            boxShadow: "inset 0 0 80px rgba(154,13,27,0.03)",
          }}
        >
          {/* Banner */}
          <div className="px-6 md:px-8 py-4 border-b border-cream/[0.06] flex items-center justify-between bg-cream/[0.015]">
            <div className="flex items-center gap-3">
              <D20 />
              <span className="font-display text-lg md:text-xl text-cream/70 font-semibold tracking-wide">Character Sheet</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-scarlet animate-pulse" />
              <span className="text-[10px] font-mono text-cream/20">LVL {charSheet.level}</span>
            </div>
          </div>

          {/* ── Row 1: Details + Ability Scores ── */}
          <div className="grid md:grid-cols-2 border-b border-cream/[0.04]">
            {/* Character Details */}
            <div className="p-5 md:p-10 md:border-r border-cream/[0.04]">
              <SectionLabel>Character Details</SectionLabel>
              <div className="space-y-3">
                {[
                  ["Race", charSheet.race],
                  ["Class", charSheet.class],
                  ["Subclass", charSheet.subclass],
                  ["Alignment", charSheet.alignment],
                  ["Background", charSheet.background],
                  ["Homeland", charSheet.homeland],
                  ["Base", charSheet.base],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between border-b border-cream/[0.03] pb-2.5">
                    <span className="text-sm text-cream/30">{label}</span>
                    <span className="text-sm text-cream/70 font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ability Scores */}
            <div className="p-5 md:p-10">
              <SectionLabel>Ability Scores</SectionLabel>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {abilityScores.map((a, i) => (
                  <motion.div
                    key={a.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="group flex flex-col items-center py-4 px-3 border border-cream/[0.05] hover:border-scarlet/30 transition-colors duration-300"
                  >
                    <span className="text-[11px] font-mono text-cream/30 uppercase mb-1">{a.name}</span>
                    <span className="font-display text-3xl md:text-4xl text-cream/80 font-bold group-hover:text-scarlet transition-colors duration-300">{a.score}</span>
                    <span className="text-sm font-mono text-scarlet/50 mt-1">{a.mod}</span>
                    <span className="text-[10px] text-cream/20 mt-2 font-light">{a.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Row 2: Proficiencies + Feats ── */}
          <div className="grid md:grid-cols-2 border-b border-cream/[0.04]">
            {/* Proficiencies */}
            <div className="p-5 md:p-10 md:border-r border-cream/[0.04]">
              <SectionLabel>Proficiencies</SectionLabel>
              <div className="space-y-5">
                {proficiencies.map((skill, i) => (
                  <ProfBar key={skill.name} name={skill.name} level={skill.level} delay={0.1 * i} />
                ))}
              </div>
            </div>

            {/* Feats */}
            <div className="p-5 md:p-10">
              <SectionLabel>Feats</SectionLabel>
              <div className="space-y-3">
                {feats.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="group flex items-start gap-4 py-3 px-4 border border-cream/[0.03] hover:border-scarlet/20 hover:bg-scarlet/[0.03] transition-all duration-300"
                  >
                    <span className="text-xl mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity" dangerouslySetInnerHTML={{ __html: f.icon }} />
                    <div>
                      <p className="text-sm text-cream/60 font-medium group-hover:text-cream transition-colors duration-300">{f.title}</p>
                      <p className="text-sm text-cream/30 font-light leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Row 3: Active Quests + Companions ── */}
          <div className="grid md:grid-cols-2">
            {/* Active Quests */}
            <div className="p-5 md:p-10 md:border-r border-cream/[0.04]">
              <SectionLabel>Active Quests</SectionLabel>
              <div className="space-y-3">
                {quests.map((q, i) => (
                  <motion.div
                    key={q.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="group flex items-start gap-4 py-3"
                  >
                    <span className="text-lg mt-0.5 opacity-40 group-hover:opacity-80 transition-opacity" dangerouslySetInnerHTML={{ __html: q.icon }} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm text-cream/55 font-medium group-hover:text-scarlet transition-colors duration-300">{q.title}</p>
                        <span className="text-[9px] font-mono text-green-400/50 border border-green-400/20 px-2 py-0.5 shrink-0">{q.status}</span>
                      </div>
                      <p className="text-sm text-cream/25 font-light mt-1">{q.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Companions */}
            <div className="p-5 md:p-10">
              <SectionLabel>Companions &amp; Familiars</SectionLabel>
              <div className="space-y-4">
                {companions.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="group p-5 border border-cream/[0.04] hover:border-scarlet/20 hover:bg-scarlet/[0.02] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-base text-cream/70 font-semibold group-hover:text-cream transition-colors">{c.name}</span>
                      <span className="text-[9px] font-mono uppercase text-cream/20 border border-cream/[0.06] px-2 py-0.5">{c.type}</span>
                    </div>
                    <p className="text-sm text-cream/35 font-light leading-relaxed">{c.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 md:px-8 py-3 border-t border-cream/[0.06] bg-cream/[0.015] gap-2">
            <span className="text-[9px] md:text-[10px] font-mono text-cream/15 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
              CAMPAIGN: ACTIVE
            </span>
            <div className="flex items-center gap-3 md:gap-5 overflow-hidden">
              <span className="text-[8px] md:text-[10px] font-mono text-cream/15">HP ████████░░</span>
              <span className="text-[8px] md:text-[10px] font-mono text-cream/15 hidden sm:inline">MP ██████████</span>
              <span className="text-[8px] md:text-[10px] font-mono text-cream/15 hidden sm:inline">XP ██████░░░░</span>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="accent-line" />
      </div>
    </section>
  );
}

export default About;
