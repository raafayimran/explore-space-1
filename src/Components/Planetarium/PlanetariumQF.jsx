import { useRef } from "react";

function PlanetariumQF(props) {
  const planet = props.planet;
  const style = props.style;

  // Mapping out facts from planet
  const renderFacts = planet.quickFacts.map((fact) => {
    return (
      <li
        key={planet.quickFacts.indexOf(fact)}
        style={{ fontWeight: "600", fontSize: "18px" }}
      >
        {fact}
      </li>
    );
  });

  const ref = useRef();

  return (
    <div style={style} className="planetarium-quick-facts" ref={ref}>
      <h2>Quick Facts:</h2>
      <ul>{renderFacts}</ul>
    </div>
  );
}

export default PlanetariumQF;
