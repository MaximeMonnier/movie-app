import React from "react";

const Title = ({ activePage }) => {
  return (
    <div className="title-content">
      <h1>{activePage === "home" ? "MOVINEA" : "Coup de coeur"}</h1>
    </div>
  );
};

export default Title;
