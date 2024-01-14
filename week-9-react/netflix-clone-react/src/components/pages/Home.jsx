import { Container } from "react-bootstrap";
import GalleryRow from "../organisms/GalleryRow";
import { useEffect, useState } from "react";

export default function Home() {
  const myKey = "3f6cf538";
  const baseURL = "http://www.omdbapi.com/";
  const dataURL = `${baseURL}?apikey=${myKey}&s=`;
  const [error, setError] = useState(null);

  const [movies, setMovies] = useState([]);
  const [movies_2, setMovies_2] = useState([]);

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
    fetchData(dataURL, src_1, setMovies);
    fetchData(dataURL, src_2, setMovies_2);
  }, []);

  return (
    <Container fluid className="p-0 pt-5 pb-5">
      <GalleryRow dataArr={movies} title={"Trend Now"} />
      <GalleryRow dataArr={movies_2} title={"Watched"} />
      <GalleryRow dataArr={movies_2} title={"For you"} />
      {error && <p>Errore nella richiesta dei dati</p>}
    </Container>
  );
}
