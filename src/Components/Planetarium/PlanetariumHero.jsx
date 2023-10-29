import { useState } from "react";
import "../../Styles/Planetarium/PlanetariumHero.css";
import { BooleanKeyframeTrack } from "three";

function PlanetariumHero(props) {
  const [divStyle, setDivStyle] = useState({});
  const [hideStyle, setHideStyle] = useState({});

  function handleClick() {
    setDivStyle({
      backgroundColor: "transparent",
      color: "black",
      minHeight: "1000px",
    });
    setHideStyle({
      backgroundColor: "transparent",
      color: "transparent",
      WebkitTextStrokeColor: "transparent",
      borderColor: "transparent",
    });
    props.ready(true);
  }

  return (
    <div style={divStyle} className="planetarium-hero-container container">
      <div className="planetarium-hero-row row">
        <div className="planetarium-hero-col col">
          <h1 style={hideStyle}>Planetarium</h1>
          <p style={hideStyle}>
            In this immersive 3D planet viewer, we invite you to explore the
            wonders of the universe, right from the comfort of your screen. As
            you navigate this digital observatory, you'll encounter a treasure
            trove of fascinating facts and captivating information about each
            celestial body. From the scorching surface of Venus to the frigid
            ice caps of Mars, we've curated a wealth of knowledge to satisfy
            your astronomical curiosity.
          </p>
          <button
            style={hideStyle}
            onClick={handleClick}
            className="btn btn-primary"
          >
            Start Planetarium &#128640;
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanetariumHero;
