import React from "react";

const Card = () => {
  return (
    <div className="container-card">
      <div className="container-img">
        <img src="./assets/img/3551739.jpg" alt="toto" />
      </div>
      <div className="container-info">
        <h3>Titre film</h3>
        <p>date de sortie</p>
        <h3>note</h3>
        <div className="container-span">
          <span>Catégorie</span>
          <span>Catégorie</span>
          <span>Catégorie</span>
        </div>
        <h3>Synopsis</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          neque eveniet consequuntur sed sit. Hic quibusdam reiciendis molestias
          esse tempora?
        </p>
      </div>
    </div>
  );
};

export default Card;
