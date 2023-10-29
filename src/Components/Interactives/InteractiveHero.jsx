import React, { Component } from "react";
import "../../Styles/Interactives/InteractiveHero.css";

function InteractiveHero() {
  return (
    <>
      <div className="interactive-hero-container container-fluid">
        <div className="interactive-hero-row row">
          <div className="interactive-hero-col col">
            <h1>
              Inter<span className="interactive-hero-span">actives</span>
            </h1>
            <p>
              Welcome to a cosmic journey like no other! Prepare to embark on an
              awe-inspiring adventure through the vast and mysterious expanse of
              space. Our interactive space exploration webpage invites you to
              discover the wonders of the universe in ways you've never
              imagined. From breathtaking images of distant galaxies to
              mind-boggling facts about celestial bodies, you're about to
              experience the cosmos like never before. Whether you're an
              aspiring astronaut or a casual stargazer, this immersive journey
              will leave you starstruck and craving more. Buckle up and get
              ready to explore the final frontier &mdash; the cosmos awaits!
            </p>
            <button className="interactive-hero-btn btn btn-primary">
              Explore Now &darr;
            </button>
          </div>
        </div>
        <div className="interactive-hero-transition row"></div>
      </div>
    </>
  );
}

export default InteractiveHero;
