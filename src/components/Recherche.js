import React, { useState } from "react";
import Movies from "./Movies";

const Recherche = () => {
  const [rech, setRech] = useState("code");
  return (
    <div className="recherche-container">
      <input
        type="text"
        id="textR"
        placeholder="Rechercher un film"
        className="rech"
        onChange={(e) => {
          if (e.target.value === "") {
            setRech("code");
          } else {
            setRech(e.target.value);
          }
        }}
        rech={rech}
      />
      <input type="submit" value="rechercher" className="rechbtn" />
      <Movies rech={rech} />
    </div>
  );
};

export default Recherche;
