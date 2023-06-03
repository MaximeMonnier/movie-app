import React, { useState } from "react";
import Movies from "./Movies";

const Recherche = () => {
  const [rech, setRech] = useState("");
  return (
    <div className="recherche-container">
      <input
        type="text"
        placeholder="Rechercher un film"
        className="rech"
        onChange={(e) => setRech(e.target.value)}
        rech={rech}
      />
      <input type="submit" className="rechbtn" />
      <Movies rech={rech} />
    </div>
  );
};

export default Recherche;
