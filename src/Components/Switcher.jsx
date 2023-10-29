import { useState } from "react";
import "../Styles/Switcher.css";

import PlanetariumHero from "./Planetarium/PlanetariumHero";
import PlanetariumContainer from "./Planetarium/PlanetariumContainer";

import InteractiveSwitcher from "./Interactives/InteractiveSwitcher";

function Switcher() {
  const [interactive, setInteractive] = useState(true);
  const [planetarium, setPlanetarium] = useState(false);

  const [planetariumState, setPlanetariumState] = useState(false);

  const activeStyle = {
    color: "#0d6efd",
    textDecoration: "underline",
    textUnderlineOffset: "1px",
  };

  function startPlanetarium(ready) {
    setTimeout(() => {
      setPlanetariumState(ready);
    }, 2000);
  }

  return (
    <div className="switcher-container container-fluid">
      <div className="header-transition row"></div>
      <div className="switcher-row row">
        <div className="switcher-col col">
          <h3
            onClick={() => {
              setPlanetarium(true);
              setInteractive(false);
            }}
            style={planetarium ? activeStyle : {}}
          >
            Planetarium
          </h3>
          <h3
            onClick={() => {
              setInteractive(true);
              setPlanetarium(false);
              setPlanetariumState(false);
            }}
            style={interactive ? activeStyle : {}}
          >
            Interactives
          </h3>
        </div>
      </div>
      <div className="selected-row row">
        {planetarium ? (
          <>
            {" "}
            {planetariumState ? (
              <PlanetariumContainer />
            ) : (
              <PlanetariumHero ready={startPlanetarium} />
            )}
          </>
        ) : (
          <InteractiveSwitcher />
        )}
      </div>
    </div>
  );
}

export default Switcher;
