// Local components
import Intro from "./Intro";
import IntroData from "./IntroData";
import ContinuousSpectra from "./line-spectra-content/ContinuousSpectra";
import AbsorptionSpectra from "./line-spectra-content/AbsorptionSpectra";
import EmissionSpectra from "./line-spectra-content/EmissionSpectra";
import SpectraSpace from "./line-spectra-content/SpectraSpace";

function LineSpectra() {
  return (
    <div>
      <div className="row">
        <div className="col" style={{ minHeight: "500px" }}>
          <Intro
            name={IntroData[0].name}
            intro={IntroData[0].intro}
            howto={IntroData[0].howto}
          />
          <ContinuousSpectra />
          <EmissionSpectra />
          <AbsorptionSpectra />
          <SpectraSpace />
        </div>
      </div>
    </div>
  );
}

export default LineSpectra;
