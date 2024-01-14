import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import FilmCardHover from "./FilmCardHover";

/* eslint-disable react/prop-types */
export default function FilmCard({ film }) {
  const [isHovered, setIsHovered] = useState(false); // se la card è in hover

  return (
    <>
      <Col
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="position-relative"
      >
        <Card
          id="movieCard"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0 25%, transparent 65% 100%), url(${film.Poster})`,
          }}
        >
          <h4 title={film.Title} className="text-white fs-6 title-card">
            {film.Title}
          </h4>
        </Card>
        {isHovered && <FilmCardHover film={film} />}
      </Col>
    </>
  );
}
