import "../../Styles/Planetarium/PlanetariumDescription.css";
import { useState } from "react";

function PlanetariumDescription(props) {
  const [style, setStyle] = useState({
    backgroundColor: "black",
    color: "black",
  });

  setTimeout(() => {
    setStyle({
      backgroundColor: "transparent",
      color: "rgb(230, 230, 230)",
    });
  }, 2000);
  return (
    <section style={style} className="planetarium-desc">
      <div style={style} className="planetarium-desc col">
        <h1>More info</h1>
        <p>{props.desc}</p>
      </div>
    </section>
  );
}

export default PlanetariumDescription;
