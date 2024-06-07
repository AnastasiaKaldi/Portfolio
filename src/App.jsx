/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Island from "../src/models/Island.jsx";
import Dragon from "./models/Dragon.jsx"; // Ensure correct import path
import PopupInfo from "./PopupInfo.jsx";

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
        {currentStage && <PopupInfo currentStage={currentStage} />}
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
