import React from "react";

const Recherche = () => {
  return (
    <div className="recherche-container">
      <input type="text" placeholder="rechercher un film" className="rech" />
      <input type="submit" className="rechbtn" />
    </div>
  );
};

export default Recherche;
