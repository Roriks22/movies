import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import axios from "axios";
import Card from "../components/Card";

const Home = ({ favorites, addToFavorites, removeFromFavorites }) => {
  const [moviesData, setMoviesData] = useState([]); // Mes résultats
  const [searchTerm, setSearchTerm] = useState(""); // Ce que je recherche
  const [sortType, setSortType] = useState("");

  // Afficher les films populaires au chargement
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=fafa97126ae034b0e6faca44d7066cf9&query=code&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results))
      .catch((err) => console.log("Erreur API :", err));
  }, []);

  // Déclenché uniquement quand searchTerm change, quand Rechercher est cliqué
  useEffect(() => {
    if (!searchTerm.trim()) return;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=fafa97126ae034b0e6faca44d7066cf9&query=${searchTerm}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results))
      .catch((err) => console.log("Erreur API :", err));
  }, [searchTerm]);

  // Fonction appelée depuis Form.js
  const handleSearch = (term) => {
    setSearchTerm(term); // Cela déclenche le useEffect
  };

  const baseMovies =
    searchTerm.trim() === ""
      ? moviesData
      : moviesData.filter(
          (movie) =>
            movie.title &&
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const sortedMovies = [...baseMovies];

  if (sortType === "top") {
    sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
  } else if (sortType === "flop") {
    sortedMovies.sort((a, b) => a.vote_average - b.vote_average);
  }

  return (
    <div>
      <Header />
      <Form onSearch={handleSearch} onSortChange={setSortType} />
      <div className="home-page">
        {sortedMovies.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            favorites={favorites}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            isFavoritePage={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
