import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function MovingStars(props) {
  const groupRef = useRef();

  useFrame(() => {});

  return (
    <group ref={groupRef}>
      <Stars />
    </group>
  );
}

export default MovingStars;
