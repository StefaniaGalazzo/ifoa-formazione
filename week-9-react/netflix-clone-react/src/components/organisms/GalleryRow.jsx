import { useEffect, useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
// import FilmCard from "../molecules/FilmCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GalleryRow() {
  const myKey = "3f6cf538";
  const baseURL = "http://www.omdbapi.com/";
  const dataURL = `${baseURL}?apikey=${myKey}&s=`;
  const [error, setError] = useState(null);

  //carousel state
  const [moviesGroup_1, setMoviesGroup_1] = useState([]);
  const [moviesGroup_2, setMoviesGroup_2] = useState([]);
  const [isActiveCarousell, setActiveCarousell] = useState("prev"); // bootstrap test

  //fetch
  const fetchData = (url, src, setGroup) => {
    fetch(`${url}${src}`)
      .then((response) => response.json())
      .then((data) => {
        setGroup(data.Search);
      })
      .catch((error) => {
        setError(error);
        console.error("Errore nella richiesta:", error);
      });
  };
  useEffect(() => {
    let src_1 = "cia";
    let src_2 = "lord";
    fetchData(dataURL, src_1, setMoviesGroup_1);
    fetchData(dataURL, src_2, setMoviesGroup_2);
  }, []);

  const hanlderCarousel = (arrow) => {
    setActiveCarousell(arrow);
  };
  console.log(moviesGroup_1, "moviesGroup_1");
  console.log(moviesGroup_2, "moviesGroup_2");
  return (
    <Container fluid className="position-relative mb-5 mt-5 ps-5">
      <h5 className="mb-4 text-white">Trending now</h5>
      <div
        id="carouselTrending"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-inner overflow-hidden">
          <div
            className={`carousel-item ${
              isActiveCarousell === "prev" ? "active" : ""
            }`}
          >
            <div className="ms-2 g-2 row row-cols-sm-4 justify-content-center flex-nowrap row-cols-md-6">
              {/* QUI COL CARD */}
              {moviesGroup_1.map((film, indx) => (
                <Col key={indx}>
                  <Card
                    id="movieCard"
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0 25%, transparent 65% 100%), url(${film.Poster})`,
                    }}
                  >
                    <h4
                      className="text-white fs-6"
                      style={{ marginTop: "23%", width: "80%" }}
                    >
                      {film.Title}
                    </h4>
                    {error && <p>{error}</p>}
                  </Card>
                </Col>
              ))}
            </div>
          </div>
          <div
            className={`carousel-item ${
              isActiveCarousell === "next" ? "active" : ""
            }`}
          >
            <div className="ms-2 g-2 row row-cols-sm-4 justify-content-center flex-nowrap row-cols-md-6">
              {moviesGroup_2.map((film, indx) => (
                <Col key={indx}>
                  <Card
                    id="movieCard"
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0 25%, transparent 65% 100%), url(${film.Poster})`,
                    }}
                  >
                    <h4
                      className="text-white fs-6"
                      style={{ marginTop: "23%", width: "80%" }}
                    >
                      {film.Title}
                    </h4>

                    {error && <p>{error}</p>}
                  </Card>
                </Col>
              ))}
            </div>
          </div>
          {/* <!-- qui più carousel-item con altre cards se necessario --> */}
        </div>
        <button
          className="carousel-control-prev ps-2 carousel-prev h-100 position-absolute shadow end-0 opacity-100 text-secondary"
          type="button"
          data-bs-target="#carouselTrending"
          data-bs-slide="prev"
          onClick={() => hanlderCarousel("prev")}
        >
          <FaChevronLeft color="white" size={"20px"} />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next pe-2 carousel-next h-100 position-absolute shadow end-0 opacity-100 text-secondary"
          type="button"
          data-bs-target="#carouselTrending"
          data-bs-slide="next"
          onClick={() => hanlderCarousel("next")}
        >
          <FaChevronRight color="white" size={"20px"} />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Container>
  );
}
