/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FilmCard from "../molecules/FilmCard";

export default function Favorite({ allMovies }) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = allMovies.filter((el) => el.Liked === true);
    setFavoriteMovies(filteredMovies);
    console.log(favoriteMovies, "favoriteMovies");
  }, [allMovies]);

  const handleRemoveCard = (filmId) => {
    setFavoriteMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.imdbID !== filmId)
    );
  };

  return (
    <>
      <h2 className="text-white ps-5">My favorite </h2>
      <div
        className={`p-5 mb-5 ${favoriteMovies.length !== 0 && "grid"}`}
        style={{}}
      >
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((film, indx) => (
            <FilmCard
              key={indx}
              film={film}
              onRemoveCard={() => handleRemoveCard(film.imdbID)}
            />
          ))
        ) : (
          <h3 className="text-white mb-5 pb-5">
            There are no favorites here. Add your favorites films and series.
          </h3>
        )}
      </div>
    </>
  );
}
