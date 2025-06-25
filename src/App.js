import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favoris from "./pages/Favoris";

const App = () => {
  const [favorites, setFavorites] = useState(() => {
    // Charger depuis le localStorage à chaque changement de favoris
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Sauvegarder dans le localStorage à chaque changement de favoris
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Ajouter aux favoris
  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };
  // Supprimer des favoris
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
        <Route
          path="*"
          element={
            <Home
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
        <Route
          path="/favoris"
          element={
            <Favoris
              favorites={favorites}
              removeFromFavorites={removeFromFavorites}
              addToFavorites={addToFavorites}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
