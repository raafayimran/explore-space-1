import { useState } from "react";
import "../Styles/Header.css";

function Header(props) {
  return (
    <>
      <header className="header container-fluid">
        <div className="header-row row">
          <div className="header--logo col">
            <h1>
              Explore<span>Space</span>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
