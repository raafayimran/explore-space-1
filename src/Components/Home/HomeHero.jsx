import "../../Styles/Home/HomeHero.css";

function HomeHero(props) {
  return (
    <>
      <div className="hero container-lg">
        <div className="hero-row row">
          <div className="hero-intro col-md">
            <p>Welcome, to the home of all</p>
            <div className="hero-intro-wrapper">
              <h1>space</h1>
              <h2>exploration</h2>
            </div>
          </div>
          <div className="hero-description col-md">
            <p>
              Welcome to our cosmic gateway! Dive into the mysteries of the
              universe with our array of captivating interactives, allowing you
              to unravel the secrets of celestial phenomena. Alternatively,
              embark on an awe-inspiring journey through our digital
              planetarium, where you can explore the planets that are home to
              our solar system, and marvel at the wonders of the cosmos. Prepare
              to be spellbound by the endless wonders of space exploration!
            </p>
          </div>
        </div>
        <div className="hero-transition row">
          <h1>Ready to explore?</h1>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
