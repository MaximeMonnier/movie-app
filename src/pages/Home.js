import React from "react";
import Navigations from "../components/Navigations";
import Title from "../components/Title";
import Recherche from "../components/Recherche";
import TopFlop from "../components/TopFlop";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Navigations />
      <Title />
      <Recherche />
      <TopFlop />
      <Card />
    </div>
  );
};

export default Home;
