import React from "react";

const Card = ({ movie }) => {
  if (!movie) {
    return null;
  }
  // picture path
  const link = "https://image.tmdb.org/t/p/original/";
  const path = movie.poster_path;
  const final = link + path;

  // change english date to French date format
  const originalDate = movie.release_date;
  const parts = originalDate.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  const invertedDate = day + "-" + month + "-" + year;

  // Movie genre by id
  const movieGenre = () => {
    let arraygenre = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          arraygenre.push("Action");
          break;
        case 12:
          arraygenre.push("Adventure");
          break;
        case 16:
          arraygenre.push("Animation");
          break;
        case 35:
          arraygenre.push("Comedy");
          break;
        case 80:
          arraygenre.push("Crime");
          break;
        case 99:
          arraygenre.push("Documentary");
          break;
        case 18:
          arraygenre.push("Drama");
          break;
        case 10751:
          arraygenre.push("Family");
          break;
        case 14:
          arraygenre.push("Fantasy");
          break;
        case 36:
          arraygenre.push("History");
          break;
        case 27:
          arraygenre.push("Horror");
          break;
        case 10402:
          arraygenre.push("Music");
          break;
        case 9648:
          arraygenre.push("Mystery");
          break;
        case 10749:
          arraygenre.push("Romance");
          break;
        case 878:
          arraygenre.push("S-F");
          break;
        case 10770:
          arraygenre.push("TV Movie");
          break;
        case 53:
          arraygenre.push("Thriller");
          break;
        case 10752:
          arraygenre.push("War");
          break;
        case 37:
          arraygenre.push("Western");
          break;
        default:
          break;
      }
    }
    return arraygenre.map((genre) => <li key={genre}>{genre}</li>);
  };

  return (
    <div className="container-card">
      <div className="container-img">
        <img src={final} alt={movie.title} />
      </div>
      <div className="container-info">
        <h3>{movie.title}</h3>
        <p>{invertedDate}</p>
        <h3>
          {movie.vote_average}&nbsp;&nbsp;
          <i className="fa-solid fa-star note"></i>
        </h3>
        <div className="container-span">
          <ul>
            <span>{movieGenre()}</span>
          </ul>
        </div>
        <div className="container-synop">
          <h3>Synopsis</h3>
          <p>{movie.overview}</p>
        </div>
        <div className="ctn-btn">
          <div className="addbtn">
            Ajouter aux coup de coeur&nbsp;
            <i className="fa-solid fa-frog"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
