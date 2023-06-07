import React from "react";
import { NavLink } from "react-router-dom";

const Navigations = () => {
  return (
    <div className="navigation-container">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <li>Accueil</li>
      </NavLink>
      <NavLink
        to="/coup-de-coeur"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <li>
          Coup de coeur &nbsp; <i className="fa-solid fa-frog"></i>
        </li>
      </NavLink>
    </div>
  );
};

export default Navigations;
