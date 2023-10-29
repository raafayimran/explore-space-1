// Libraries
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Spectra from "./Spectra";
import ElementSlider from "./ElementSlider";

// Data
import data from "./data";

function AbsorptionSpectra() {
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
      <h2 style={h2Style}>Absorption Spectrum</h2>

      <div className="row">
        <div className="col-md-6">
          <Spectra datum={data[value]} showAbsorption={true} />
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
          <h4>What is an absorption spectrum?</h4>
          <p>
            In the presence of a gas cloud, starlight undergoes absorption, with
            some of the light being absorbed while the rest passes through the
            gas. The wavelengths of light that are subject to absorption depend
            on the composition of elements and compounds within the gas. This
            absorption process gives rise to an absorption spectrum, which is
            characterized by dark lines or gaps in the spectrum corresponding to
            the wavelengths that have been absorbed by the gas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AbsorptionSpectra;
