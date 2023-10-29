// I tried making a dynamic component but it's not worth it for this since the
// planet data varies so much from planet to planet that it's nearly impossible

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Saturn(props) {
  const { nodes, materials } = useGLTF("/assets/6-saturn.glb");
  let scale; // = 0.0015;
  {
    props.median === true ? (scale = 0.0024) : (scale = 0.0012);
  }

  const planet = useRef();
  const ringsTop = useRef();
  const ringsBottom = useRef();

  useFrame(({ clock }) => {
    const z_axis = 0.3;
    const y_axis = clock.getElapsedTime() / 1.5;

    // three separate references because each element needs it's own reference

    // rotation of the planet itself
    planet.current.rotation.z = z_axis;
    planet.current.rotation.y = y_axis;

    // rotation of the top rings
    ringsTop.current.rotation.z = z_axis;
    ringsTop.current.rotation.y = y_axis;

    // rotation of the bottom rings
    ringsBottom.current.rotation.z = z_axis;
    ringsBottom.current.rotation.y = y_axis;
  });

  return (
    <group {...props} dispose={null}>
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

useGLTF.preload("/assets/6-saturn.glb");
