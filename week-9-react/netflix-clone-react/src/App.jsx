/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import Home from "./components/pages/Home";
import NavBarCustom from "./components/organisms/NavBarCustom";
import Footer from "./components/organisms/Footer";
import { useEffect, useState } from "react";
import FilmCard from "./components/molecules/FilmCard";
import Favorite from "./components/pages/Favorite";
import { Routes, Route } from "react-router-dom";

function App() {
  const myKey = "3f6cf538";
  const baseURL = "http://www.omdbapi.com/";
  const dataURL = `${baseURL}?apikey=${myKey}&s=`;
  const [error, setError] = useState(null);
  //dati per search in navcustom
  const [query, setQuery] = useState("");
  const [searchedFilms, setSearchedFilms] = useState([]);
  // dati per home page
  const [movies, setMovies] = useState([]);
  const [movies_2, setMovies_2] = useState([]);
  const [movies_3, setMovies_3] = useState([]);
  //dati per favorite page
  const [allMovies, setAllMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = allMovies.filter((el) => el.Liked === true);
    setFavoriteMovies(filteredMovies);
    console.log(favoriteMovies, "favoriteMovies");
  }, [allMovies, favoriteMovies]);

  const handleRemoveCard = (filmId) => {
    setFavoriteMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.imdbID !== filmId)
    );
  };
  // end favorite page

  // create one single data array
  useEffect(() => {
    const totalMovies = [...movies, ...movies_2, ...movies_3];
    setAllMovies(
      totalMovies.map((obj) => ({
        ...obj,
        Liked: false,
      }))
    );
    console.log(allMovies, "all movies");
  }, [movies, movies_2, movies_3]);

  // search
  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (query.length <= 2) return;
    const filteredCategory = searchedFilms.filter((film) =>
      film.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedFilms(filteredCategory);
    fetchData(dataURL, query, setSearchedFilms, setError);
  };

  useEffect(() => {
    const delayedSearch = debounce(async () => {
      if (query.length >= 2) {
        const data = fetchData(dataURL, query, setSearchedFilms, setError);
        console.log(data, "searched hanlder");
      }
    }, 800);

    delayedSearch();
  }, [query]);

  // main data
  useEffect(() => {
    let src_1 = "cia";
    let src_2 = "lord";
    let src_3 = "potter";

    fetchData(dataURL, src_1, setMovies, setError);
    fetchData(dataURL, src_2, setMovies_2, setError);
    fetchData(dataURL, src_3, setMovies_3, setError);
  }, []);

  return (
    <>
      <NavBarCustom searchVal={query} searchHandler={handleSearch} />
      {error && <p>Data Error</p>}

      {query.length <= 2 && (
        <Routes>
          <Route index path="/" element={<Home allMovies={allMovies} />} />
          <Route
            path="/favourite"
            element={<Favorite favoriteMovies={favoriteMovies} />}
          />
        </Routes>
      )}
      <div className="d-flex flex-wrap p-5 mb-5">
        {searchedFilms &&
          searchedFilms.length >= 0 &&
          query.length > 2 &&
          searchedFilms.map((film, indx) => (
            <FilmCard
              key={indx}
              film={film}
              onRemoveCard={() => handleRemoveCard(film.imdbID)}
            />
          ))}
      </div>
      <Footer />
    </>
  );

  // funzione di debounce
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }
  function fetchData(url, src, setGroup, setError) {
    fetch(`${url}${src}`)
      .then((response) => response.json())
      .then((data) => {
        setGroup(data.Search);
      })
      .catch((error) => {
        setError(error);
        console.error("Errore nella richiesta:", error);
      });
  }
}
export default App;
