import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import useWindowDimensions from "../../useWindowDimensions";

function Camera() {
  const cam = useRef();

  const { height, width } = useWindowDimensions();

  let y;

  if (width < 1200) {
    y = 900 / width;
  } else {
    y = 1;
  }

  return (
    <PerspectiveCamera
      far={1000}
      fov={75}
      makeDefault
      near={0.1}
      position={[0, y, 0]}
      ref={cam}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  );
}

export default Camera;
