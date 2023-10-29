// Libraries
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Style
import "../../../Styles/Interactives/SpectraInfo.css";

function SpectraInfo() {
  // useEffect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const data = [
    {
      title: "composition",
      text: `By analyzing the positions and intensities of these spectral lines, 
      scientists can identify the composition of a gas with precision. Each 
      element has a distinct set of energy levels, resulting in characteristic 
      lines in its spectrum, allowing for the recognition of its presence. The 
      intensity of these lines also reveals the concentration of each element 
      in the gas. This spectroscopic method finds wide application in analytical 
      chemistry, astrophysics, and various scientific and industrial fields, 
      enabling us to explore the composition of distant celestial bodies like 
      stars and galaxies.`,
      img: "https://images.pexels.com/photos/5984612/pexels-photo-5984612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "temperature",
      text: `
        Line spectra can reveal the temperature of a gas through the phenomenon 
        known as Doppler broadening. At higher temperatures, gas particles 
        exhibit a wider range of velocities due to increased thermal kinetic 
        energy. As these particles move towards or away from an observer, the 
        Doppler effect causes spectral lines to broaden. The broader the lines, 
        the greater the temperature of the gas, as it indicates a wider 
        distribution of particle velocities. Therefore, by analyzing the width 
        of spectral lines, scientists can estimate the temperature of a gas, a 
        crucial technique for understanding the thermal properties of celestial 
        objects.`,
      img: "https://images.pexels.com/photos/5995225/pexels-photo-5995225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Pressure",
      text: `When a gas is subjected to high pressure, the proximity of gas 
      particles leads to more frequent collisions between them. These collisions 
      can affect the energy levels of 
      the gas atoms or molecules, causing them to shift slightly. As a result, 
      spectral lines become broader due to the range of energy levels involved. 
      The broader the lines in the spectrum, the higher the pressure of the gas. 
      By analyzing the width of the spectral lines, scientists can estimate the 
      pressure of a gas, making pressure broadening an essential tool in 
      understanding the conditions within gaseous environments, such as those 
      found in Earth's atmosphere or distant celestial bodies.`,
      img: "https://images.pexels.com/photos/5600225/pexels-photo-5600225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const mapping = data.map((datum) => {
    const [expand, setExpand] = useState(false);
    console.log(expand);

    return (
      <div
        className="col-md-4 info-card"
        style={{ height: expand ? "100%" : "500px" }}
      >
        <div
          className="card-top-half"
          style={{ backgroundImage: `url(${datum.img})` }}
        ></div>
        <div className="img-curved-cutoff">
          <h3>{datum.title}</h3>
        </div>

        <div
          className="card-bottom-half"
          style={{ maxHeight: expand ? "100%" : "25%" }}
        >
          <div className="hyphen"></div>
          <p>{datum.text}</p>

          <div className="expansion" onClick={() => setExpand(!expand)}>
            {expand ? <h4>Shrink &uarr;</h4> : <h4>Expand &darr;</h4>}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      data-aos="fade-up"
      className="row"
      style={{ marginTop: "50px", textAlign: "center", transition: "2s" }}
    >
      {mapping}
    </div>
  );
}

export default SpectraInfo;
