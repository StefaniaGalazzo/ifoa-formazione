import { Container } from "react-bootstrap";
import NavBarCustom from "../organisms/NavbarCustom";
import Footer from "../organisms/Footer";
import CardsCategoriesTemplate from "../templates/CardsCategoriesTemplate";
import Jumbo from "../organisms/Jumbo";

export default function HomePage() {
  return (
    <Container fluid className="p-0">
      <NavBarCustom />
      <Jumbo />
      <hr />
      <CardsCategoriesTemplate />
      <Footer />
    </Container>
  );
}
