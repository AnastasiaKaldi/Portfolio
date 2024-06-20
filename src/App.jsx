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
    <div className="Background w-full h-screen relative ">
      <div className="Island  flex text-white"></div>
      <Island />
      <div className="text-4xl mb-4">Hello</div>
    </div>
  );
}

export default App;
