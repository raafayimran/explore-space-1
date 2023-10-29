import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
let link;

export function Planet(props) {
  link = props.planetLink;
  const { nodes, materials } = useGLTF(link);

  // This is to get the correct materials and geometry mapping for each object
  // Gets list of nodes, and selects the second one
  const nodeKeys = Object.keys(nodes);
  const node = nodeKeys[1];

  // Gets list of materials, and selects the first one
  let materialKeys = Object.keys(materials);
  const material = materialKeys[0];

  // Animating the planet
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() / 2;
    meshRef.current.rotation.x = clock.getElapsedTime() / 2;
  });

  return (
    <>
      <mesh
        {...props}
        dispose={null}
        geometry={nodes[node].geometry}
        material={materials[material]}
        ref={meshRef}
        scale={props.scale}
      />
    </>
  );
}

useGLTF.preload(link);
