import React from "react";
import Navigations from "../components/Navigations";
import Title from "../components/Title";
import Recherche from "../components/Recherche";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Navigations />
      <Title activePage="home" />
      <Recherche />
      <Card />
    </div>
  );
};

export default Home;
