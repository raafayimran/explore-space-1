// Libraries
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Spectra from "./Spectra";
import ElementSlider from "./ElementSlider";
import SpectraInfo from "./SpectraInfo";

// Data
import data from "./data";

function SpectraSpace(props) {
  // Style
  const h2Style = {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
    textDecoration: "underline 1px",
    textUnderlineOffset: "5px",
  };

  // Data
  const hydrogen = data[0];
  const helium = data[4];
  const allLines = hydrogen.lines.concat(helium.lines);
  const array = [
    {
      name: `${hydrogen.name} and ${helium.name}`,
      lines: allLines,
    },
    {
      name: hydrogen.name,
      lines: hydrogen.lines,
    },
    {
      name: helium.name,
      lines: helium.lines,
    },
  ];

  // State
  const [value, setValue] = useState(0);

  // useEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div data-aos="fade-up" style={{ margin: "100px auto 0px auto" }}>
      <h2 style={h2Style}>Spectra and Space</h2>
      <div className="row">
        <div className="col-md-5">
          <h3 style={{ marginTop: "30px" }}>
            How does the concept of line spectra relate to space?
          </h3>
          <p>
            Let's use our Sun and it's absorption lines as an example. By
            analyzing the positions and intensities of these absorption lines in
            the solar spectrum, astronomers can determine the elements present
            in the Sun's outer layers. Hydrogen, for instance, produces a set of
            distinct lines in the visible part of the spectrum, while other
            elements like helium, oxygen, and iron contribute their unique
            spectral signatures.
          </p>
        </div>

        <div className="col-md-7">
          <p style={{ marginTop: "30px" }}>
            Here we have the combined absorption spectrum of the two major gases
            that make up the majority of the sun:{" "}
            <span style={{ fontWeight: "bold" }}>Hydrogen and Helium</span>
          </p>
          <Spectra datum={array[value]} showAbsorption={true} />
          <h4 style={{ textTransform: "capitalize" }}>{array[value].name}</h4>
          <ElementSlider
            defaultValue={value}
            min={0}
            max={2}
            setValue={setValue}
          />
        </div>
      </div>
      <SpectraInfo />
    </div>
  );
}

export default SpectraSpace;
