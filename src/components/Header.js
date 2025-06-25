import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header">
      <h1>React Movies</h1>
      <nav>
        <ul>
          <NavLink
            to={"/film"}
            onClick={(e) => e.window.local.refresh()}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Accueil{" "}
          </NavLink>

          <NavLink
            to={"/favoris"}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            Coups de coeur{" "}
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
