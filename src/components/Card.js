import React from "react";

const Card = ({ movie }) => {
  if (!movie) {
    return null;
  }
  const lolo = "(https://image.tmdb.org/t/p/original/)";
  const roro = movie.poster_path;
  const final = lolo + roro;
  console.log(final);
  return (
    <div className="container-card">
      <div className="container-img">
        <img src={final} alt={movie.title} />
      </div>
      <div className="container-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <h3>{movie.vote_average}</h3>
        <div className="container-span">
          <span>Catégorie</span>
          <span>Catégorie</span>
          <span>Catégorie</span>
        </div>
        <h3>Synopsis</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Card;
