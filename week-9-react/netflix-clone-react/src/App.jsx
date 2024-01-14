/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import Home from "./components/pages/Home";
import NavBarCustom from "./components/organisms/NavBarCustom";
import Footer from "./components/organisms/Footer";
import { useEffect, useState } from "react";
import FilmCard from "./components/molecules/FilmCard";

function App() {
  const myKey = "3f6cf538";
  const baseURL = "http://www.omdbapi.com/";
  const dataURL = `${baseURL}?apikey=${myKey}&s=`;
  const [error, setError] = useState(null);

  const [movies, setMovies] = useState([]);
  const [movies_2, setMovies_2] = useState([]);
  const [movies_3, setMovies_3] = useState([]);

  const [query, setQuery] = useState("");
  const [searchedFilms, setSearchedFilms] = useState([]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log(query.length, "query lenght");
    if (query.length <= 2) return;
    const filteredCategory = searchedFilms.filter((film) =>
      film.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedFilms(filteredCategory);
    fetchData(dataURL, query, setSearchedFilms, setError);
    console.log(searchedFilms, "searched hanlder");
  };

  useEffect(() => {
    let src_1 = "cia";
    let src_2 = "lord";
    let src_3 = "potter";
    fetchData(dataURL, src_1, setMovies, setError);
    fetchData(dataURL, src_2, setMovies_2, setError);
    fetchData(dataURL, src_3, setMovies_3, setError);
  }, []);

  useEffect(() => {
    const delayedSearch = debounce(async () => {
      if (query.length >= 2) {
        const data = fetchData(dataURL, query, setSearchedFilms, setError);
        console.log(data, "searched hanlder");
      }
    }, 500);

    delayedSearch();
  }, [query]);

  return (
    <>
      <NavBarCustom searchVal={query} searchHandler={handleSearch} />
      {error && <p>Data Error</p>}

      {query.length <= 2 && (
        <Home movies={movies} movies_2={movies_2} movies_3={movies_3} />
      )}
      <div className="d-flex flex-wrap p-5 mb-5">
        {searchedFilms &&
          searchedFilms.length >= 0 &&
          query.length > 2 &&
          searchedFilms.map((film, indx) => (
            <FilmCard key={indx} film={film} />
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
