/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { IoPlayCircle } from "react-icons/io5";

export default function FilmCardHover({ film, onRemoveCard }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
    film.Liked = !isLiked;
    onRemoveCard(film.imdbID);
    console.log(film.Liked, "updatedfilm.liked");
  };

  return (
    <div id="itemInfo">
      <div className="itemTop">
        <img src={film.Poster} width={"100%"} />
      </div>
      <div className="itemBottom">
        <h6>{film.Title}</h6>
        <div className="d-flex">
          <p className="tag">Category: {film.Type}</p>
          <p className="tag">Year: {film.Year}</p>
        </div>
        <div className="d-flex justify-content-between itemFooter">
          <IoPlayCircle size={"35px"} />
          <div onClick={() => handleLike()}>
            {film && film.Liked ? (
              <GoHeartFill size={"35px"} />
            ) : (
              <GoHeart size={"35px"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
