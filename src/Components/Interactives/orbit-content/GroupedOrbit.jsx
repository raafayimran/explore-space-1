import { useRef } from "react";
import planetData from "../../Planetarium/planetData";
import { Planet } from "./Planet";
import { Saturn } from "./Saturn";
import { Outlines } from "@react-three/drei";

function GroupedOrbit(props) {
  const groupRef = useRef();

  const spacingConstant = 0.09;

  const renderPlanets = planetData.map((data) => {
    const positionX = data.id * spacingConstant;
    let orbitSpeed = 25 / props.orbitSpeed;

    // Sizing
    let scale;

    {
      props.realisticSizing ? (scale = data.estSize) : (scale = 1.3);
    }

    // Sun is already being rendered so ignore it during mapping
    if (data.id == 0) {
      return <></>;
    } else {
      // Saturn has it's own component, so render that
      return data.id === 6 ? (
        <Saturn
          key={data.id}
          orbit={true}
          orbitSpeed={data.time * orbitSpeed}
          position={[positionX, 0, 0]}
          planetLink={data.planetLink}
          radius={positionX}
          scale={/* data.estSize / 250 */ scale / 250}
        />
      ) : (
        // Rendering all other components
        <Planet
          key={data.id}
          orbit={true}
          orbitSpeed={data.time * orbitSpeed}
          planetLink={data.planetLink}
          position={[positionX, 0, 10]}
          radius={positionX}
          scale={/* data.estSize / 25000 */ scale / 25000}
        />
      );
    }
  });

  const renderOrbits = planetData.map((data) => {
    const spacing = data.id * spacingConstant;
    return (
      <mesh position={[0, 0, 0]} rotation={[-1.57, 0, 0]} scale={1}>
        <ringGeometry args={[spacing, spacing + 0.002, 64]} />
      </mesh>
    );
  });

  return (
    <group ref={groupRef}>
      <Planet
        orbit={false}
        planetLink={planetData[0].planetLink}
        position={[0, 0, 0]}
        scale={0.1}
      />
      {renderPlanets}
      {props.showOrbit ? renderOrbits : null}
    </group>
  );
}

export default GroupedOrbit;
