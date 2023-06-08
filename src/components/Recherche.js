import React, { useState } from "react";
import Movies from "./Movies";

const Recherche = () => {
  const [rech, setRech] = useState("code");
  const [latest, setLatest] = useState("discover");
  return (
    <div>
      <div className="recherche-container">
        <input
          type="text"
          id="textR"
          placeholder="Rechercher un film"
          className="rech"
          onChange={(e) => {
            if (e.target.value === "") {
              setRech("code");
              setLatest("discover");
            } else {
              setRech(e.target.value);
              setLatest("search");
            }
          }}
          rech="code"
          latest="discover"
        />
        <input type="submit" value="rechercher" className="rechbtn" />
        <Movies rech={rech} latest={latest} />
      </div>
    </div>
  );
};

export default Recherche;
