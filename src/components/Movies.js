import axios from "axios";
import React, { createElement, useEffect, useState } from "react";
import Card from "./Card";

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c9e98c1841bd2c13313ad35797a31570&with_genres=28,12"
      )
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      });
  }, []);

  return (
    <div>
      <div className="container-movies">
        <div className="container-anglobe">
          <p className="top">
            Top <i className="fa-solid fa-arrow-up"></i>
          </p>
          <p className="flop">
            <i className="fa-solid fa-arrow-down"></i> Flop
          </p>
        </div>
      </div>
      <div className="lastmovie">
        <h1>Les 20 dernières sorties</h1>
      </div>
      <div className="cardmovie">
        <div className="container-crd">
          {data.length > 0 ? (
            <ul>
              {data.map((movie) => (
                <Card movie={movie} key={movie.id} />
              ))}
            </ul>
          ) : (
            <div className="container-honey">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
