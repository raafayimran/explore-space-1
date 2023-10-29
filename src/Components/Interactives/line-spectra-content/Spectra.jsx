import "../../../Styles/Interactives/Spectra.css";

function Spectra(props) {
  const datum = props.datum;

  let color = "black";

  if (props.color != undefined) {
    color = props.color;
  }

  const renderAbsorption = datum.lines.map((line) => {
    if (line == 0 || line == 100) {
      return null;
    } else {
      return (
        <div
          className="absorption-line"
          style={{ backgroundColor: color, left: `${line}%` }}
        ></div>
      );
    }
  });

  const renderEmission = datum.lines.map((line) => {
    const index = datum.lines.indexOf(line);
    const nextLine = datum.lines[index + 1];
    const left = line + 1;
    const width = nextLine - left;

    if (line == 0) {
      return (
        <div
          className="emission-gap"
          style={{ left: 0, minWidth: `${nextLine}%`, opacity: 1 }}
        ></div>
      );
    } else {
      return (
        <div
          className="emission-gap"
          style={{ left: `${line + 1}%`, minWidth: `${width}%`, opacity: 1 }}
        ></div>
      );
    }
  });

  if (props.showEmission) {
    return <div className="continuous-spectra">{renderEmission}</div>;
  } else if (props.showAbsorption) {
    return <div className="continuous-spectra">{renderAbsorption}</div>;
  } else {
    return <div className="continuous-spectra"></div>;
  }
}

export default Spectra;
