/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* Auto-generated by: https://github.com/pmndrs/gltfjsx */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import IslandScene from "../assets/3d/hobbit_house_-_low_poly.glb";
import { a } from "@react-spring/three";

function Model({ isRotating, setIsRotating, setCurrentStage, ...props }) {
  const { nodes, materials } = useGLTF(IslandScene);
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const [initialPopupShown, setInitialPopupShown] = useState(false);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      console.log("Normalized Rotation: ", normalizedRotation);

      if (!initialPopupShown) {
        if (normalizedRotation >= 4.25 && normalizedRotation <= 4.75) {
          setInitialPopupShown(true);
        } else {
          setCurrentStage(null);
        }
      } else {
        if (normalizedRotation >= 0.85 && normalizedRotation <= 1.3) {
          setCurrentStage(3);
        } else if (normalizedRotation >= 2.4 && normalizedRotation <= 2.6) {
          setCurrentStage(2);
        } else if (normalizedRotation >= 4.25 && normalizedRotation <= 4.75) {
          setCurrentStage(1);
        } else if (normalizedRotation >= 5.45 && normalizedRotation <= 5.85) {
          setCurrentStage(4);
        } else {
          setCurrentStage(null);
        }
      }
    }
  });

  return (
    <a.group ref={islandRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.014}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Doors_and_Windows_Texture_Material_0.geometry}
              material={materials.Texture_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Doors_and_Windows_Glow_0.geometry}
              material={materials.Glow}
            />
          </group>
          <group
            position={[11.677, 110.352, -49.61]}
            rotation={[-1.415, 0.068, -0.095]}
            scale={4.175}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Terrain_Terrain_top_mat_0.geometry}
              material={materials.Terrain_top_mat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Terrain_Terrain_bottom_mat_0.geometry}
              material={materials.Terrain_bottom_mat}
            />
          </group>
          <group
            position={[-412.77, 136.939, -72.832]}
            rotation={[1.158, 0.574, 2.292]}
            scale={13.303}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Trees_Texture_Material_0.geometry}
              material={materials.Texture_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Trees_bush_1_0.geometry}
              material={materials.bush_1}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fences_Texture_Material_0.geometry}
            material={materials.Texture_Material}
            position={[-23.045, 150.109, -216.8]}
            rotation={[-1.525, 0.081, 2.844]}
            scale={[2.901, 2.901, 2.88]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Roof_Texture_Material_0.geometry}
            material={materials.Texture_Material}
            position={[11.677, 110.352, -49.61]}
            rotation={[-1.415, 0.068, -0.095]}
            scale={4.175}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stairs_Bricks_0.geometry}
            material={materials.Bricks}
            position={[-128.335, 73.174, -154.82]}
            rotation={[-Math.PI / 2, 0, -0.967]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Walls_Bricks_0.geometry}
            material={materials.Bricks}
            position={[298.898, 14.957, -32.494]}
            rotation={[-Math.PI / 2, 0, -0.967]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Well_Texture_Material_0.geometry}
            material={materials.Texture_Material}
            position={[162.027, 12.176, -25.63]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={31.143}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fireflies_Glow_0.geometry}
            material={materials.Glow}
            position={[-75.749, 147.576, -396.968]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.984}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Flat_Grass_Final_Grass_0.geometry}
            material={materials.Final_Grass}
            position={[334.479, 9.345, -118.476]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Flowers_Final_Grass_0.geometry}
            material={materials.Final_Grass}
            position={[-95.88, 12.207, -39.938]}
            rotation={[-1.496, 0.143, 0.681]}
            scale={2.204}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rocks_Texture_Material_0.geometry}
            material={materials.Texture_Material}
            position={[20.577, -3.536, -44.211]}
            rotation={[-1.462, 0.096, -1.241]}
            scale={9.811}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Grass_Final_Grass_0.geometry}
            material={materials.Final_Grass}
            position={[-35.316, 40.398, 70.605]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </a.group>
  );
}

export default Model;