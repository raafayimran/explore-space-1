import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

let link;

export function Saturn(props) {
  link = props.planetLink;
  const { nodes, materials } = useGLTF(link);
  let scale = props.scale; // = 0.0015;

  const planet = useRef();
  const ringsTop = useRef();
  const ringsBottom = useRef();
  const groupRef = useRef();

  // Waiting to start animation on load
  let startAnimation = false;

  setTimeout(() => {
    startAnimation = true;
  }, 500);

  let angle = 0;

  useFrame(({ clock }) => {
    const z_axis = 0.3;
    const y_axis = clock.getElapsedTime() / 1.5;

    // three separate references because each element needs it's own reference

    // rotation of the planet itself
    planet.current.rotation.y = y_axis;

    // rotation of the top rings
    ringsTop.current.rotation.y = y_axis;

    // rotation of the bottom rings
    ringsBottom.current.rotation.y = y_axis;

    const radius = props.radius;

    if (props.orbit && startAnimation) {
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);

      groupRef.current.position.x = x;
      groupRef.current.position.z = z;

      angle += 10 / props.orbitSpeed;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Saturn001.geometry}
        material={materials.None}
        ref={planet}
        scale={scale}
      />
      <mesh
        geometry={nodes.RingsTop.geometry}
        material={materials.SaturnRings}
        ref={ringsTop}
        scale={scale}
      />
      <mesh
        geometry={nodes.RingsBottom.geometry}
        material={materials.SaturnRings}
        ref={ringsBottom}
        scale={scale}
      />
    </group>
  );
}

useGLTF.preload(link);
