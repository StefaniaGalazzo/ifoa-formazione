/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { IoPlayCircle } from "react-icons/io5";
export default function FilmCardHover({ film }) {
  const [isLiked, setIsLiked] = useState(false);

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
          <div
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          >
            {!isLiked ? (
              <GoHeart size={"35px"} />
            ) : (
              <GoHeartFill size={"35px"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
