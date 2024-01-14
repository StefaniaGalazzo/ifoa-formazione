/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import GalleryRow from "../organisms/GalleryRow";

export default function Home({ movies, movies_2, error }) {
  return (
    <Container fluid className="p-0 pb-5">
      <GalleryRow dataArr={movies} title={"Trend Now"} />
      <GalleryRow dataArr={movies_2} title={"Watched"} />
      <GalleryRow dataArr={movies_2} title={"For you"} />
      {error && <p>Errore nella richiesta dei dati</p>}
    </Container>
  );
}
