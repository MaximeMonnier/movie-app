import React from "react";

const CardCoeur = ({ coeur }) => {
  // picture path
  const link = "https://image.tmdb.org/t/p/original/";
  const path = coeur.poster_path;
  const final = link + path;

  // change english date to French date format
  const originalDate = coeur.release_date;
  const parts = originalDate.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  const invertedDate = day + "-" + month + "-" + year;

  // Movie genre by id
  const coeurGenre = () => {
    let arraygenre = [];
    for (let i = 0; i < coeur.genre; i++) {
      switch (coeur.genre[i]) {
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

    return arraygenre.map((genre) => (
      <li key={genre} className="liste-genre">
        {genre}
      </li>
    ));
  };

  const deleteIdStorage = (id) => {
    const ero = document.getElementById(coeur.id);
    let storage = window.localStorage.movies;
    let movieIds = storage ? storage.split(",") : [];

    let movieIdString = String(id);
    let index = movieIds.indexOf(movieIdString);

    if (index !== -1) {
      movieIds.splice(index, 1); // Supprimer l'ID du tableau
      let updatedStorage = movieIds.join(","); // Convertir le tableau en une chaîne de caractères avec une virgule comme séparateur
      window.localStorage.movies = updatedStorage; // Mettre à jour le local storage avec la nouvelle chaîne de caractères d'IDs
      ero.remove();
    }
  };

  return (
    <div id={coeur.id}>
      <div className="container-crd">
        <div className="container-card">
          <div className="container-img">
            <img src={final} alt={coeur.title} />
          </div>
          <div className="container-info">
            <h3>{coeur.title}</h3>
            <p>{invertedDate}</p>
            <h3>
              {coeur.vote_average.toFixed(1)}&nbsp;&nbsp;
              <i className="fa-solid fa-star note"></i>
            </h3>
            <div className="container-span">
              <ul>{coeurGenre()}</ul>
            </div>
            <h3>Synopsis</h3>
            <div className="container-synop">
              <p>{coeur.overview}</p>
            </div>
            <div className="ctn-btn">
              <button
                className="addbtn"
                onClick={() => deleteIdStorage(coeur.id)}
              >
                Suprimer de la liste&nbsp;
                <i className="fa-solid fa-frog"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCoeur;
