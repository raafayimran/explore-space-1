import React, { Component } from "react";
import { useRef, useState, useEffect } from "react";
import "../../Styles/Planetarium/PlanetariumContainer.css";
import Planetarium from "./Planetarium";
import PlanetariumDescription from "./PlanetariumDescription";
import useWindowDimensions from "../useWindowDimensions";

function PlanetariumContainer() {
  // Getting planet data from Planetarium
  const [planet, setPlanet] = useState({});

  function getPlanet(currentPlanet) {
    useEffect(() => {
      setPlanet(currentPlanet);
    });
  }

  const { height, width } = useWindowDimensions();

  const [display, setDisplay] = useState("none");

  useEffect(() => {
    if (width > 700) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }, width);

  return (
    <div className="planetarium-container container-fluid">
      <div className="planetarium-planets-container">
        <div
          className="planetarium-lr-fade"
          style={{
            left: 0,
            background:
              "linear-gradient(to right, black, rgba(255, 255, 255, 0)",
            transition: "2s",
            zIndex: 1,
            display: display,
          }}
        ></div>
        <div
          className="planetarium-lr-fade"
          style={{
            right: 0,
            background:
              "linear-gradient(to left, black, rgba(255, 255, 255, 0)",
            transition: "2s",
            zIndex: 1,
            display: display,
          }}
        ></div>
        <Planetarium currentPlanet={getPlanet} />
      </div>
      <PlanetariumDescription desc={planet.description} />
    </div>
  );
}

export default PlanetariumContainer;
