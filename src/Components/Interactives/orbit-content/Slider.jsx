import { useState } from "react";

function Slider(props) {
  const value = props.defaultValue;

  const handleSlide = (e) => {
    props.setValue(e.target.value);
  };

  return (
    <div className="slide-container">
      <input
        className="form-range"
        min={props.min}
        max={props.max}
        onChange={handleSlide}
        step={1}
        type="range"
        value={value}
      />
    </div>
  );
}
export default Slider;
