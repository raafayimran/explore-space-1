import "../../Styles/Interactives/InteractiveSwitcher.css";
import "../../Styles/Interactives/SpectraInfo.css";

import switcherData from "./switcherData";
import React, { useState } from "react";

// Components
import LineSpectra from "./LineSpectra";
import Orbit from "./Orbit.jsx";

function InteractiveSwitcher() {
  const [currentComponent, setCurrentComponent] = useState(null);
  const cards = switcherData.map((data) => {
    const [selected, setSelected] = useState(false);
    return (
      <div
        className="col-md-4 info-card"
        style={{
          margin: "18px 0px 20px 0px",
          padding: "0px 8px",
          transition: "0.3s ease-in",
        }}
        key={data.id}
      >
        <div
          className="card-top-half"
          style={{
            backgroundAttachment: "unset",
            backgroundImage: `url(${data.img})`,
            backgroundPosition: "center",
            backgroundSize: "60%",
          }}
        ></div>
        <div className="img-curved-cutoff">
          <h3>{data.name}</h3>
        </div>
        <div className="card-bottom-half" style={{ paddingBottom: "28px" }}>
          <div className="hyphen"></div>
          <p>{data.desc}</p>
          <button
            className={
              data.name === "coming soon"
                ? "btn btn-secondary disabled"
                : "btn btn-primary"
            }
            style={{ textTransform: "capitalize" }}
            onClick={() => {
              setCurrentComponent(data.component),
                setHeight({ maxHeight: "1000px !important", width: "100%" });
            }}
          >
            {data.name === "coming soon" ? "Coming soon" : `Begin ${data.name}`}
          </button>
        </div>
      </div>
    );
  });

  const map = {
    Orbit: Orbit,
    LineSpectra: LineSpectra,
  };

  const [height, setHeight] = useState({
    maxHeight: "0px !important",
    width: "100%",
  });

  const [display, setDisplay] = useState({ display: "none" });

  return (
    <>
      <div
        className="interactive-switcher-container container-fluid"
        style={{ transition: "1s" }}
      >
        <div className="interactive-switcher-row row">{cards}</div>
        <div className="current-interactive container-lg" style={height}>
          {currentComponent === null ? (
            <></>
          ) : (
            React.createElement(map[currentComponent], { style: display })
          )}
        </div>
      </div>
    </>
  );
}

export default InteractiveSwitcher;
