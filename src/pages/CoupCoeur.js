import React, { useEffect, useState } from "react";
import Navigations from "../components/Navigations";
import Title from "../components/Title";
import axios from "axios";
import CardCoeur from "../components/CardCoeur";

const CoupCoeur = () => {
  const [listData, setListData] = useState([]);
  console.log(listData);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=c9e98c1841bd2c13313ad35797a31570`
        )
        .then((res) => {
          setListData((listData) => [...listData, res.data]);
          console.log(res);
        });
    }
  }, []);

  const deleteStorage = () => {
    const containerCoeur = document.getElementById("container-elementCoeur");
    window.localStorage.clear();
    containerCoeur.remove();
  };

  return (
    <div>
      <Navigations />
      <Title />
      <div className="btn-vider">
        <button onClick={deleteStorage}>vider les favoris</button>
      </div>
      <div id="container-elementCoeur">
        <div className="cardmovie">
          <div className="container-crd">
            {listData.length > 0 ? (
              <ul>
                {listData.map((coeur) => (
                  <CardCoeur coeur={coeur} key={coeur.id} />
                ))}
              </ul>
            ) : (
              <div className="result">
                <div className="container-honey">
                  <h2>Aucun coup de coeur pour le moments</h2>
                  <div className="honeycomb">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupCoeur;
