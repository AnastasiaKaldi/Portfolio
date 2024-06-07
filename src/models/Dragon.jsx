/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AmbientLight, Color, SpotLight } from "three"; // Import SpotLight

// Make sure the path to your GLB file is correct
import BirdScene from "../assets/3d/dragon_flying.glb";

const Dragon = ({ isRotating, ...props }) => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(BirdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    console.log("Available animations:", actions);
    if (actions && actions["flying"]) {
      actions["flying"].play();
    } else {
      console.error("Animation 'flying' not found!");
    }

    // Set all materials to pink
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color = new Color("#FFBBA4");
      }
    });
  }, [actions, scene]);

  return (
    <mesh {...props}>
      <primitive ref={birdRef} object={scene} />
      {/* Add a SpotLight */}
      <spotLight
        position={[30, 30, 30]}
        intensity={0.5}
        angle={Math.PI / 6}
        penumbra={0.5}
      />
    </mesh>
  );
};

export default Dragon;
