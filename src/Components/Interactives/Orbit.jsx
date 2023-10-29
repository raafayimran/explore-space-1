import { useRef, useState } from "react";
import "../../Styles/Interactives/Interactive.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Camera from "./orbit-content/Camera";
import GroupedOrbit from "./orbit-content/GroupedOrbit";
import MovingStars from "./orbit-content/MovingStars";
import Controls from "./orbit-content/Controls";

function Orbit(props) {
  const [orbitSpeed, setOrbitSpeed] = useState(25);
  const getOrbitSpeed = (val) => setOrbitSpeed(val);

  const [showOrbit, setShowOrbit] = useState(false);
  const getShowOrbit = () => setShowOrbit((prev) => !prev);

  const [realisticSizing, setRealisticSizing] = useState(false);
  const getRealisticSizing = () => setRealisticSizing((prev) => !prev);

  return (
    <>
      <div className="interactive-row row">
        <div className="interactive-col col">
          <div className="interactive-container">
            <h1>Planet Orbit Simulator</h1>
            <p>
              Experience the wonders of space with our Planet Orbit Simulator.
              Take control of orbit speeds, toggle realistic planet sizes, and
              illuminate planetary orbits, all in one immersive tool. Explore
              the cosmos like never before!
            </p>

            <Canvas
              style={{
                height: "800px",
              }}
            >
              <Suspense>
                <ambientLight intensity={5} />
                <Camera />
                <GroupedOrbit
                  orbitSpeed={orbitSpeed}
                  showOrbit={showOrbit}
                  realisticSizing={realisticSizing}
                />
                <MovingStars speed={0.025} />
              </Suspense>
            </Canvas>
          </div>
          <h1 style={{ textAlign: "center" }}>Controls</h1>
          <Controls
            orbitSpeed={orbitSpeed}
            getOrbitSpeed={getOrbitSpeed}
            showOrbit={showOrbit}
            getShowOrbit={getShowOrbit}
            realisticSizing={realisticSizing}
            getRealisticSizing={getRealisticSizing}
          />
        </div>
      </div>
    </>
  );
}

export default Orbit;
