import React from "react";
import { NavLink } from "react-router-dom";

const Navigations = () => {
  return (
    <div className="navigation-container">
      <NavLink to="/">
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/coup-de-coeur">
        <li>
          Coup de coeur &nbsp; <i class="fa-solid fa-frog"></i>
        </li>
      </NavLink>
    </div>
  );
};

export default Navigations;
