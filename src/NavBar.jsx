import PropTypes from "prop-types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  return (
    <div className="NavBar fixed top-0 left-0 w-full  z-50">
      <a
        href="/"
        className="flex items-center space-x-3 rtl:space-x-reverse shadow-md"
      >
        <span
          className="self-center text-4xl font-semibold whitespace-nowrap text-orange-800 -mb-28 "
          style={{ fontFamily: "Playfair Display" }}
        >
          AK
        </span>
      </a>
      <div className="AboutComponent text-m relative container mx-auto py-4 mr-80 space-x-8">
        <FlyoutLink href="/" FlyoutContent={<AboutContent />}>
          <span style={{ fontFamily: "Playfair Display" }}> About</span>
        </FlyoutLink>
      </div>
      <div className="ProjectsComponent text-m relative container mx-auto py-4 ml-80 flex space-x-8">
        <FlyoutLink href="/" FlyoutContent={<ProjectsContent />}>
          <span style={{ fontFamily: "Playfair Display" }}>Projects</span>
        </FlyoutLink>
      </div>
      <div className="ReachComponent text-m relative container mx-auto py-4 ml-80 flex space-x-8">
        <FlyoutLink href="/contact" FlyoutContent={<ReachContent />}>
          <span style={{ fontFamily: "Playfair Display" }}>Get in touch</span>
        </FlyoutLink>
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
        className="relative h-fit w-fit text-white hover:text-orange-800"
        style={{ fontFamily: "Times New Roman" }}
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute bottom-0 left-0 right-0 mt-10 h-1 origin-left rounded-full bg-orange-800 transition-transform duration-300 ease-out"
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

const AboutContent = () => {
  return (
    <div className="">
      <h3 className="font-semibold"></h3>
    </div>
  );
};

const ProjectsContent = () => {
  return <div className=""></div>;
};

const ReachContent = () => {
  return <div className=""></div>;
};

FlyoutLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  FlyoutContent: PropTypes.node,
};

FlyoutLink.defaultProps = {
  FlyoutContent: null,
};

export default NavBar;
