import React from "react";
import { NavLink } from "react-router-dom"; // comme si on avait creer une balise <a>, sauf qu'en react c un navlink

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        {/* to est l'url qui sera taper et correspond a ce qu'on a mis dans le router, nav active injecte la barre en dessous de accueil et a propos (52.35) */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
