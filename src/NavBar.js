import React from "react";
import "./styles/App.css";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

const NavBar = ({ showInstructions, setShowInstructions }) => {
  return (
    <nav className="nav-bar">
      <InformationCircleIcon
        className="info-icon"
        onClick={() => setShowInstructions(!showInstructions)}
      />
      <div className="nav-title">Wordle</div>
      <div></div>
    </nav>
  );
};

export default NavBar;
