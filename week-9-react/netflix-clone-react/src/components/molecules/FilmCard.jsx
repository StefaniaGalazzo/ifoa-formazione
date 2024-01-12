import { useState } from "react";

/* eslint-disable react/prop-types */
export default function FilmCard({ film, index }) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered, "ishovered");
  console.log(index, "index");
  return (
    <div
      className="listItem"
      style={{ left: index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4
        className="text-white fs-6"
        style={{ marginTop: "23%", width: "80%" }}
      >
        {film.Title}
      </h4>
      <img src={film.Poster} alt="" />
      {/* <>
        {isHovered && (
          <>
            <video src={film.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{film.duration}</span>
                <span className="limit">+{film.limit}</span>
                <span>{film.year}</span>
              </div>
              <div className="desc">{film.desc}</div>
              <div className="genre">{film.genre}</div>
            </div>
          </>
        )}
      </> */}
    </div>
  );
}
