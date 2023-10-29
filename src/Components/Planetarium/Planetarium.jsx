import "../../Styles/Planetarium/Planetarium.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Html, PerspectiveCamera } from "@react-three/drei";
import RenderPlanets from "./RenderPlanets";
import PlanetariumTitle from "./PlanetariumTitle";
import PlanetariumQF from "./PlanetariumQF";
import { Suspense, useEffect, useState } from "react";

function Planetarium(props) {
  // Getting the planet
  const [planet, setPlanet] = useState({
    id: 0,
    quickFacts: ["hello world", "somethign world"],
  });

  function getPlanet(returnedPlanet) {
    setPlanet(returnedPlanet);
  }

  // Sending planet to parent
  props.currentPlanet(planet);

  // Switching planets
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  function handlePrev(state) {
    setPrevClicked(state);
  }

  function handleNext(state) {
    setNextClicked(state);
  }

  const [style, setStyle] = useState({ color: "transparent" });
  const [canvasStyle, setCanvasStyle] = useState({
    width: "100%",
    height: "700px",
    backgroundColor: "transparent",
    position: "relative",
    opacity: "0",
    transition: "1s",
  });

  setTimeout(() => {
    setStyle({ color: "unset" });
  }, 2000);

  setTimeout(() => {
    setCanvasStyle({
      width: "100%",
      height: "650px",
      backgroundColor: "transparent",
      position: "relative",
      opacity: "100",
      transition: "1s",
    });
  }, 1000);

  return (
    <div className="planetarium switcher-container">
      <PlanetariumTitle
        planet={planet}
        prev={handlePrev}
        next={handleNext}
        style={style}
      />
      <Canvas style={canvasStyle}>
        <Suspense>
          {/* Writing the html*/}
          <PerspectiveCamera makeDefault />
          <ambientLight intensity={5} />
          <Stars />
          <RenderPlanets
            currentPlanet={getPlanet}
            nextPlanet={nextClicked}
            prevPlanet={prevClicked}
            positionY={1}
          />
        </Suspense>
      </Canvas>
      <PlanetariumQF planet={planet} style={style} />
    </div>
  );
}

export default Planetarium;
