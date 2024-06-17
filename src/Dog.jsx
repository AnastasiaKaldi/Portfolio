/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// Ensure the path is correct and points to the public directory or correct assets folder

const DogModelPath = "../src/assets/3d/shiba_inu_doggy.glb";

export function Model({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(DogModelPath);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (currentAnimation && actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
    }
    return () => {
      actions[currentAnimation]?.fadeOut(0.5);
    };
  }, [currentAnimation, actions]);

  // Define your custom hex color
  const customColor = "#FFCFAA"; // Hex color for hot pink

  // Apply the custom color to the materials
  useEffect(() => {
    Object.keys(materials).forEach((key) => {
      materials[key].color.set(customColor);
    });
  }, [materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.629}
        >
          <group
            name="52e67df98ad649b7a49e32f16a11dbccfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Dog" scale={0.01}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_54"
                      geometry={nodes.Object_54.geometry}
                      material={materials.rusty}
                      skeleton={nodes.Object_54.skeleton}
                    />
                    <skinnedMesh
                      name="Object_55"
                      geometry={nodes.Object_55.geometry}
                      material={materials.white}
                      skeleton={nodes.Object_55.skeleton}
                    />
                    <skinnedMesh
                      name="Object_56"
                      geometry={nodes.Object_56.geometry}
                      material={materials.blend}
                      skeleton={nodes.Object_56.skeleton}
                    />
                    <skinnedMesh
                      name="Object_57"
                      geometry={nodes.Object_57.geometry}
                      material={materials.black}
                      skeleton={nodes.Object_57.skeleton}
                    />
                    <skinnedMesh
                      name="Object_58"
                      geometry={nodes.Object_58.geometry}
                      material={materials.pink}
                      skeleton={nodes.Object_58.skeleton}
                    />
                    <group
                      name="Object_53"
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.01}
                    />
                  </group>
                </group>
                <group
                  name="Model"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Model;
