/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import GalleryRow from "../organisms/GalleryRow";
import Hero from "../organisms/Hero";
import trailer from "../../assets/media/trailer.mp4";

export default function Home({ allMovies, error }) {
  const firstGroup = allMovies.slice(0, 10);
  const secondGroup = allMovies.slice(10, 20);
  const thirdGroup = allMovies.slice(20, 30);
  return (
    <Container fluid className="p-0 pb-5">
      <Hero video={trailer} isVideo />
      <GalleryRow dataArr={firstGroup} title={"Trend Now"} />
      <GalleryRow dataArr={secondGroup} title={"Watched"} />
      <GalleryRow dataArr={thirdGroup} title={"For you"} />
      {error && <p>Errore nella richiesta dei dati</p>}
    </Container>
  );
}
