






import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

/* ─── Postcard stamp ─── */
function Stamp() {
  return (
    <div className="w-20 h-24 border-2 border-dashed border-cream/10 flex flex-col items-center justify-center gap-1 select-none">
      <span className="text-[8px] uppercase tracking-[0.15em] text-cream/15">Postage</span>
      <span className="font-display text-2xl text-scarlet/40 leading-none">AK</span>
      <span className="text-[7px] text-cream/10">2025</span>
    </div>
  );
}

/* ─── Postmark circle ─── */
function Postmark() {
  return (
    <div className="absolute -top-4 -right-4 w-28 h-28 opacity-[0.04] pointer-events-none select-none rotate-[-15deg]">
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
        <circle cx="60" cy="60" r="55" stroke="#E6CDB5" strokeWidth="2" />
        <circle cx="60" cy="60" r="45" stroke="#E6CDB5" strokeWidth="1" />
        <line x1="10" y1="60" x2="110" y2="60" stroke="#E6CDB5" strokeWidth="1.5" />
        <line x1="10" y1="50" x2="110" y2="50" stroke="#E6CDB5" strokeWidth="1" />
        <line x1="10" y1="70" x2="110" y2="70" stroke="#E6CDB5" strokeWidth="1" />
        <text x="60" y="44" textAnchor="middle" fill="#E6CDB5" fontSize="8" fontFamily="Inter">LEEDS</text>
        <text x="60" y="64" textAnchor="middle" fill="#E6CDB5" fontSize="10" fontWeight="bold" fontFamily="Inter">2025</text>
        <text x="60" y="78" textAnchor="middle" fill="#E6CDB5" fontSize="7" fontFamily="Inter">UNITED KINGDOM</text>
      </svg>
    </div>
  );
}

/* ─── Magnetic social link ─── */
function MagneticLink({ href, icon, label }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setOffset({ x, y });
  }, []);

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex items-center gap-3 text-cream/30 hover:text-cream transition-colors duration-300"
    >
      {icon}
      <span className="text-xs uppercase tracking-[0.15em]">{label}</span>
    </motion.a>
  );
}

/* ─── Main Contact Section ─── */
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = "service_l4xq749";
    const templateID = "template_5xmmk7o";
    const publicKey = "c0f42xh2ILJTB76DN";

    const templatePar = {
      from_name: name,
      from_email: email,
      to_name: "Anastasia",
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templatePar, publicKey)
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setSent(true);
        setIsLoading(false);
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="relative py-20 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="gradient-orb gradient-orb-2" style={{ bottom: "-10%", right: "-10%" }} />
      <div className="gradient-orb gradient-orb-1" style={{ top: "20%", left: "-15%" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-scarlet mb-4"
        >
          03 / Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading text-cream leading-[1.05] mb-10 md:mb-24"
        >
          Let&apos;s work
          <br />
          <span className="italic font-normal text-cream/40">together.</span>
        </motion.h2>

        {/* ─── THE POSTCARD ─── */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          {/* Card shadow */}
          <div
            className="absolute inset-0 translate-y-4 blur-2xl opacity-20"
            style={{ background: "rgba(106, 4, 15, 0.3)" }}
          />

          {/* Postcard body */}
          <div
            className="relative border border-cream/[0.08] overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(53, 6, 22, 0.7) 0%, rgba(29, 5, 21, 0.95) 50%, rgba(29, 5, 21, 0.98) 100%)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(230,205,181,0.03)",
            }}
          >
            {/* Top edge - decorative scalloped border */}
            <div className="h-[3px] w-full bg-gradient-to-r from-scarlet/0 via-scarlet/40 to-scarlet/0" />

            {/* Postcard inner */}
            <div className="grid md:grid-cols-2">
              {/* ─── LEFT SIDE: Message area ─── */}
              <div className="p-8 md:p-12 lg:p-14 md:border-r border-cream/[0.04] relative">
                {/* Postmark watermark */}
                <Postmark />

                {/* Lined paper effect */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
                  backgroundImage: "repeating-linear-gradient(transparent, transparent 39px, rgba(230,205,181,1) 39px, rgba(230,205,181,1) 40px)",
                  backgroundPosition: "0 60px",
                }} />

                {/* "Dear Anastasia" header */}
                <div className="relative mb-8">
                  <p className="font-display italic text-cream/20 text-lg">Dear Anastasia,</p>
                </div>

                {/* Form fields as handwritten-style inputs */}
                <form ref={formRef} onSubmit={handleSubmit} className="relative">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.25em] text-cream/15 mb-2">
                        From
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full bg-transparent border-b border-cream/[0.06] outline-none text-cream/70 font-display italic text-base pb-2 placeholder:text-cream/10 focus:border-scarlet/40 transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.25em] text-cream/15 mb-2">
                        Return Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b border-cream/[0.06] outline-none text-cream/70 font-display italic text-base pb-2 placeholder:text-cream/10 focus:border-scarlet/40 transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase tracking-[0.25em] text-cream/15 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="I'd love to work with you on..."
                        rows={5}
                        className="w-full bg-transparent border-b border-cream/[0.06] outline-none text-cream/70 font-display italic text-base pb-2 placeholder:text-cream/10 focus:border-scarlet/40 transition-colors duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Send button styled as a wax seal / post button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading || sent}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-10 group relative overflow-hidden flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 disabled:opacity-70"
                    style={{
                      background: sent
                        ? "rgba(154, 13, 27, 0.15)"
                        : "linear-gradient(135deg, #6A040F, #9A0D1B)",
                      border: sent ? "1px solid rgba(154, 13, 27, 0.3)" : "none",
                      color: "#E6CDB5",
                    }}
                  >
                    <span
                      className="absolute inset-0 bg-scarlet origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      style={{ display: sent ? "none" : "block" }}
                    />
                    <AnimatePresence mode="wait">
                      {sent ? (
                        <motion.span key="sent" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative z-10 flex items-center gap-3">
                          <HiCheck size={16} /> Delivered
                        </motion.span>
                      ) : isLoading ? (
                        <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10 flex items-center gap-3">
                          <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full inline-block" />
                          Sending...
                        </motion.span>
                      ) : (
                        <motion.span key="default" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative z-10 flex items-center gap-3">
                          Post It
                          <HiArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>

              {/* ─── RIGHT SIDE: Address / info ─── */}
              <div className="p-8 md:p-12 lg:p-14 relative flex flex-col justify-between">
                {/* Stamp in top right */}
                <div className="flex justify-end mb-10">
                  <Stamp />
                </div>

                {/* Address lines */}
                <div className="mb-auto">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-cream/15 mb-6">
                    Deliver to
                  </p>

                  <div className="space-y-1 mb-10">
                    <p className="font-display text-2xl sm:text-3xl md:text-4xl text-cream/80 font-semibold">
                      Anastasia Kaldi
                    </p>
                    <div className="h-px w-full bg-cream/[0.04] my-3" />
                    <p className="font-display italic text-lg text-cream/30">
                      Creative Developer
                    </p>
                    <div className="h-px w-full bg-cream/[0.04] my-3" />
                    <p className="font-display italic text-lg text-cream/30">
                      Leeds, United Kingdom
                    </p>
                    <div className="h-px w-full bg-cream/[0.04] my-3" />
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-3 mb-10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Social links at bottom */}
                <div>
                  <div className="h-px w-full bg-cream/[0.04] mb-6" />
                  <div className="flex flex-wrap items-center gap-4 md:gap-6">
                    <MagneticLink
                      href="mailto:contact@anastasiakaldi.com"
                      icon={<SiGmail size={14} />}
                      label="Email"
                    />
                    <MagneticLink
                      href="https://www.linkedin.com/in/anastasia-kaldi-3685691b8/"
                      icon={<FaLinkedin size={14} />}
                      label="LinkedIn"
                    />
                    <MagneticLink
                      href="https://github.com/anastasiakaldi"
                      icon={<FaGithub size={14} />}
                      label="GitHub"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom edge */}
            <div className="h-[2px] w-full bg-gradient-to-r from-scarlet/0 via-scarlet/20 to-scarlet/0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
