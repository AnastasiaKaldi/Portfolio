/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { useState } from "react";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Island from "../src/models/Island.jsx";
import Dragon from "./models/Dragon.jsx"; // Ensure correct import path
import { motion, AnimatePresence } from "framer-motion";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Simplified PopupInfo Component
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
          key="stage4"
          className={containerStyle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="font-small sm:text-md text-center">
            Hello, Im Natasha 👋, move the Island and see what happens
          </p>
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
            text="I am a UI/UX developer with a passion for design and development and a musician with a love for Jazz"
            link="#"
            btnText="Learn more"
          />
        </motion.div>
      )}
      {currentStage === 3 && (
        <motion.div
          key="stage2"
          className={containerStyle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Infobox
            text="I have done a number of projects over the years"
            link="#"
            btnText="take a look"
          />
        </motion.div>
      )}
      {currentStage === 4 && (
        <motion.div
          key="stage2"
          className={containerStyle}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Infobox
            text="Need help? Im just a click away"
            link="#"
            btnText="Let's chat ☕️"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// App Component
function App() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [2, -1.5, 4];
    } else {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, -1.1, 7.3];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <div className="Background w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex text-white items-center justify-center">
        <ErrorBoundary>
          <PopupInfo currentStage={currentStage} />
        </ErrorBoundary>
      </div>
      <Canvas
        className={
          "w-full h-screen bg-transparent " +
          (isRotating ? "cursor-grabbing" : "cursor-grab")
        }
        camera={{ position: [0, 0, 10], fov: 75, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[1, 0.5, 0]} intensity={1.5} />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={0.8}
        />
        <Island
          position={[0, 0, 0]}
          scale={[0.7, 0.7, 0.7]}
          rotation={[0, 0, 0]}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
        <Dragon
          isRotating={isRotating}
          position={biplanePosition}
          rotation={[0, 20.1, 0]}
          scale={biplaneScale}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
