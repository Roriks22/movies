"/img/poster.jpg";

const Card = ({
  movie,
  favorites,
  isFavoritePage,
  addToFavorites,
  removeFromFavorites,
}) => {
  const isFavorite =
    Array.isArray(favorites) && favorites.some((fav) => fav.id === movie.id);

  const handleClick = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };
  const genres = {
    28: "Action",
    12: "Aventure",
    16: "Animation",
    35: "Comédie",
    80: "Crime",
    99: "Documentaire",
    18: "Drame",
    10751: "Familial",
    14: "Fantastique",
    36: "Histoire",
    27: "Horreur",
    10402: "Musique",
    9648: "Mystère",
    10749: "Romance",
    878: "Science-Fiction",
    10770: "Téléfilm",
    53: "Thriller",
    10752: "Guerre",
    37: "Western",
  };

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "/img/poster.jpg"
        }
        alt={"Affiche" + movie.title}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? (
        <h5>
          Sorti le :{" "}
          {new Date(movie.release_date).toLocaleString("fr-FR", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
        </h5>
      ) : null}
      <h4>
        {movie.vote_average === 0
          ? "Non noté"
          : parseFloat(movie.vote_average.toFixed(1)) + "/10"}
        <span>
          {movie.vote_average === 0 ? "" : <i className="fa-solid fa-star"></i>}
        </span>
      </h4>
      <ul>
        {movie.genre_ids.map((id) => (
          <li key={id}>{genres[id]}</li>
        ))}
      </ul>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p>
      <div className="btn" onClick={handleClick}>
        {isFavoritePage || isFavorite
          ? "Retirer des coups de coeur"
          : "Ajouter aux coups de coeur"}
      </div>
    </div>
  );
};

export default Card;
