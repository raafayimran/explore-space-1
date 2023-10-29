import "../../Styles/Planetarium/Planetarium.css";

function PlanetariumTitle(props) {
  // Switching planets
  function handlePrev() {
    props.prev(true);
    setTimeout(() => {
      props.prev(false);
    }, 10);
  }

  function handleNext() {
    props.next(true);
    setTimeout(() => {
      props.next(false);
    }, 10);
  }

  const planet = props.planet;

  return (
    <div style={props.style} className="planetarium-change-planet">
      <div className="col-3" onClick={handlePrev}>
        <h2>&lsaquo;</h2>
        <p>Previous</p>
      </div>
      <div className="plantarium-title col" style={{ textAlign: "center" }}>
        <h1>{planet.planetName}</h1>
      </div>
      <div className="col-3" onClick={handleNext}>
        <h2>&rsaquo;</h2>
        <p>Next</p>
      </div>
    </div>
  );
}

export default PlanetariumTitle;
