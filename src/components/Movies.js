import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Movies = ({ rech }) => {
  const [data, setData] = useState([]);
  const [top, setTop] = useState(null);
  const [flop, setFlop] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=c9e98c1841bd2c13313ad35797a31570&query=${rech}&language=fr-FR`
      )
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
      });
  }, [rech]);

  return (
    <div>
      <div className="container-movies">
        <div className="container-anglobe">
          <div className="top" onClick={() => setTop("goodtobad")}>
            Top <i className="fa-solid fa-arrow-up"></i>
          </div>
          <div
            className="cancel"
            onClick={() => {
              setTop(null);
              setFlop(null);
            }}
          >
            Cancel
          </div>
          <div className="flop" onClick={() => setFlop("badtogood")}>
            <i className="fa-solid fa-arrow-down"></i> Flop
          </div>
        </div>
      </div>
      <div className="lastmovie">
        <h1>Les 20 dernières sorties</h1>
      </div>
      <div className="cardmovie">
        <div className="container-crd">
          {data.length > 0 ? (
            <ul>
              {data
                .sort((a, b) => {
                  if (top === "goodtobad") {
                    return b.vote_average - a.vote_average;
                  } else if (flop === "badtogood") {
                    return a.vote_average - b.vote_average;
                  }
                })
                .map((movie) => (
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
