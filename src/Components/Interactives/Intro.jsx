function Intro(props) {
  const sectionStyle = {
    textAlign: "center",
  };

  const howtoStyle = {
    marginTop: "20px",
    textAlign: "left",
  };

  return (
    <section className="row" style={sectionStyle}>
      <div>
        <h1>{props.name}</h1>
        <p style={howtoStyle}>{props.intro}</p>
      </div>
      <div style={howtoStyle}>
        <h4>How to use this interactive:</h4>
        <p>{props.howto}</p>
      </div>
    </section>
  );
}

export default Intro;
