// Libraries
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Spectra from "./Spectra";
import ElementSlider from "./ElementSlider";

// Data
import data from "./data";

function EmissionSpectra() {
  const [value, setValue] = useState(0);
  const h2Style = {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
    textDecoration: "underline 1px",
    textUnderlineOffset: "5px",
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" style={{ margin: "100px auto" }}>
      <h2 style={h2Style}>Emission Spectrum</h2>

      <div className="row">
        <div className="col-md-6">
          <Spectra datum={data[value]} showEmission={true} />
          <h6 style={{ textTransform: "capitalize" }}>
            Element: {data[value].name}
          </h6>
          <ElementSlider
            min={0}
            max={4}
            defaultValue={value}
            setValue={setValue}
          />
        </div>
        <div className="col-md-6" style={{ margin: "25px auto" }}>
          <h4>What is an Emission spectrum?</h4>
          <p>
            The emission spectrum of a chemical element or compound refers to
            the range of frequencies of electromagnetic radiation released when
            an atom or molecule shifts from a state of higher energy to one of
            lower energy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmissionSpectra;
