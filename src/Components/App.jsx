import { useRef, useState, useEffect } from "react";
import "../Styles/App.css";
import Header from "./Header";
import Footer from "./Footer";

// Home components
import HomeHero from "./Home/HomeHero";

// Interactives components
import InteractiveHero from "./Interactives/InteractiveHero";
import InteractiveSwitcher from "./Interactives/InteractiveSwitcher";

// Planetarium components
import PlanetariumHero from "./Planetarium/PlanetariumHero";
// import PlanetariumContainer from "./Planetarium/PlanetariumContainer";
import Planetarium from "./Planetarium/Planetarium";
import PlanetariumContainer from "./Planetarium/PlanetariumContainer";

import Switcher from "./Switcher";

function App() {
  function startPlanetarium(ready) {
    setTimeout(() => {
      setPlanetariumState(ready);
    }, 2000);
  }
  console.log(8 / 2 - 1);
  return (
    <>
      <div className="header-hero-container">
        <Header />
        <HomeHero />
      </div>
      <Switcher />
      <Footer />

      {/*
      INTERACTIVE
      <div className="header-hero-container">
        <Header />
        <InteractiveHero />
      </div>
      <InteractiveSwitcher />
      <Footer />
      */}

      {/*
      PLANETARIUM
      <div className="header-hero-container">
        <Header />
        {planetariumState ? (
          <PlanetariumContainer />
        ) : (
          <PlanetariumHero ready={startPlanetarium} />
        )}
      </div>
      <Footer />
      */}
      {/*
      HOME PAGE
      <div className="header-hero-container">
        <Header />
        <Hero />
      </div>
      <HomeCards />
      <Footer />
      */}
    </>
  );
}

export default App;
