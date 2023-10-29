import Slider from "./Slider";

function Controls(props) {
  const handleOrbit = (e) => {
    props.getShowOrbit(e.target.value);
  };

  const handleSizing = (e) => {
    props.getRealisticSizing(e.target.value);
  };

  return (
    <div className="controls-row row" style={{ paddingBottom: "40px" }}>
      <div className="slider-column col-6" style={{ paddingRight: "24px" }}>
        <div className="slider-label">
          <h4>Speed</h4>
        </div>
        <Slider
          defaultValue={props.orbitSpeed}
          max={50}
          min={1}
          setValue={props.getOrbitSpeed}
        />
      </div>
      <div className="switch-column col-6" style={{ paddingLeft: "24px" }}>
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleOrbit}
            role="switch"
            value={props.showOrbit}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Show Orbit
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleSizing}
            role="switch"
            value={props.showOrbit}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Realistic Sizing
          </label>
        </div>
      </div>
    </div>
  );
}

export default Controls;
