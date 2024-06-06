/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Island from "../src/models/Island.jsx";
import Bird from "../src/models/Bird.jsx"; // Ensure correct import path

function App() {
  return (
    <div className="Background w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ position: [0, 0, 10], fov: 75, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={0.9} />
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
        />
        <Bird />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
