import { Container } from "react-bootstrap";
import Footer from "../organisms/Footer";
import NavBarCustom from "../organisms/NavBarCustom";
import GalleryRow from "../organisms/GalleryRow";

export default function Home() {
  return (
    <Container fluid className="p-0">
      <NavBarCustom />
      <GalleryRow />
      <Footer />
    </Container>
  );
}
