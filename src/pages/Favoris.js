import Card from "../components/Card";
import Header from "../components/Header";

const Favoris = ({ favorites, addToFavorites, removeFromFavorites }) => {
  return (
    <div className="fav">
      <Header />
      <div className="user-list-page">
        <h2>
          Coups de coeur{" "}
          <span>
            <i className="fa-solid fa-heart"></i>
          </span>
        </h2>
      </div>
      <div className="list-page">
        {favorites.length > 0 ? (
          <div className="card-container">
            {favorites.map((movie) => (
              <Card
                key={movie.id}
                movie={movie}
                favorites={favorites}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavoritePage={true}
              />
            ))}
          </div>
        ) : (
          <p>Aucun film ajouté aux favoris.</p>
        )}
      </div>
    </div>
  );
};

export default Favoris;
