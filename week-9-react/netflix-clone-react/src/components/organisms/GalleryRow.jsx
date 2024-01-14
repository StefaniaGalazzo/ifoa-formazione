/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GalleryRow({ dataArr, title }) {
  const [activeIndex, setActiveIndex] = useState(0); // traccio l'indice attivo del carousel
  const itemsPerSlide = 5; // n di elementi del carousel per slide
  const totalItems = dataArr.length; // tot elementi nella dataArr
  const totalSlides = Math.ceil(totalItems / itemsPerSlide); // n tot slide necessarie

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <Container fluid className="position-relative mb-5 mt-5 ps-5">
      <h5 className="mb-4 text-white">{title}</h5>
      <div
        // #1 trasformare il titolo in una stringa che viene utilizzata come identificatore unico per l'id del carousel
        id={`carousel-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-inner overflow-hidden">
          {/* #2 */}
          {Array.from({ length: totalSlides }).map((_, index) => {
            const start = index * itemsPerSlide; // calcolo gli indici di inizio e fine per ogni slide
            const end = start + itemsPerSlide;
            const slideItems = dataArr.slice(start, end); // estraggo gli elementi da dataArr per la slide corrente

            return (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <div className="ms-2 g-2 row row-cols-sm-4 justify-content-center flex-nowrap row-cols-md-6">
                  {slideItems.map((film, indx) => (
                    <Col key={indx}>
                      <Card
                        id="movieCard"
                        style={{
                          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0 25%, transparent 65% 100%), url(${film.Poster})`,
                        }}
                      >
                        <h4
                          title={film.Title}
                          className="text-white fs-6 title-card"
                        >
                          {film.Title}
                        </h4>
                      </Card>
                    </Col>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {/* Pulsante di controllo "Prev" */}
        <button
          className="carousel-control-prev ps-2 carousel-prev h-100 position-absolute shadow end-0 opacity-100 text-secondary"
          type="button"
          data-bs-target={`#carousel-${title
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          data-bs-slide="prev"
          onClick={handlePrev}
        >
          <FaChevronLeft color="white" size={"20px"} />
          <span className="visually-hidden">Previous</span>
        </button>
        {/* Pulsante di controllo "Next" */}
        <button
          className="carousel-control-next pe-2 carousel-next h-100 position-absolute shadow end-0 opacity-100 text-secondary"
          type="button"
          data-bs-target={`#carousel-${title
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
          data-bs-slide="next"
          onClick={handleNext}
        >
          <FaChevronRight color="white" size={"20px"} />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Container>
  );
}

/*
#1 title..replace(/\s+/g, "-"): 
con il metodo replace sostituisco tutte gli spazi bianchi (\s+) con il -. 
metodo spesso utilizzato per creare URL-friendly e identificatori unici.
es: il titolo "Trend Now" > title.replace(/\s+/g, "-").toLowerCase() = "trend-now". 
lo uso come parte dell'id del carousel per garantire un id unico e formattato correttamente.

#2 Array.from({ length: totalSlides })
creo un array di lunghezza totalSlides, 
dove totalSlides è calcolato in base alla lunghezza dell'array di dati (dataArr) 
e al numero di elementi desiderati per slide (itemsPerSlide).
Questo nuovo array viene quindi utilizzato in un blocco di mapping per generare dinamicamente 
i carousel items per ciascuna slide. La funzione map viene applicata su ciascun elemento dell'array 
appena creato, e la lunghezza di totalSlides determina quante slide ci saranno nel carousel.
L'underscore del map è utilizzato come segnaposto quando l'argomento è necessario per la sintassi ma non è realmente utilizzato nel blocco di codice.

*/
