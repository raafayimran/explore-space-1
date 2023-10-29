// Libraries
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Spectra from "./Spectra";

// Data
import data from "./data";

function ContinuousSpectra() {
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
      <h2 style={h2Style}>Continuous Spectrum</h2>
      <div className="row">
        <div className="col-md-6">
          <Spectra datum={data[0]} />
        </div>
        <div className="col-md-6" style={{ margin: "25px auto" }}>
          <h4>What is a continuous spectrum?</h4>
          <p>
            A continuous spectrum encompasses all the wavelengths of light
            within a specific range. For instance, stars, as hot and dense light
            sources, emit an almost unbroken spectrum of light that extends in
            all directions and interacts with various materials in space.
          </p>
        </div>
      </div>
      <div className="row">
        <h5>What makes a spectrum 'continuous'?</h5>
        <p>
          A spectrum is continuous if it containss everything in a range between
          two values. E.g. light from a filament contains all light from
          wavelengths of about 350 nanometres to 650 nanometres
        </p>
        <h5>Star color and temperature</h5>
        <p>
          The variety of colors emitted by a star is contingent on its
          temperature. The hottest stars tend to have more of a blue-white
          color, while the coolest stars have an orange-red color.
        </p>
      </div>
    </div>
  );
}

export default ContinuousSpectra;
