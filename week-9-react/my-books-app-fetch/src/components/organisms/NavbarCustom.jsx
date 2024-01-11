/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarCustom({ bg }) {
  return (
    <>
      <Navbar bg={bg || "dark"} data-bs-theme={bg ? "" : "dark"}>
        <Container>
          <Navbar.Brand className="fw-bold" href="#home">
            BOOKATRON
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">On Sale</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarCustom;
