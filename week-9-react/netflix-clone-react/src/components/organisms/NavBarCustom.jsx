/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/media/netflix_logo.png";
import kidsIcon from "../../assets/media/kids_icon.png";
import avatar from "../../assets/media/avatar.png";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function NavBarCustom({ bg }) {
  return (
    <>
      <Navbar bg={bg || "dark"} data-bs-theme={bg ? "" : "dark"}>
        <Container fluid className="ps-5 pe-5">
          <Navbar.Brand className="fw-bold" href="#home">
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="fw-bold text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Series</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <div
              className="border border-light rounded-pill pb-1 position-relative"
              style={{ width: "100px", height: "30px" }}
            >
              <FaSearch
                color="white"
                size="18px"
                className="position-absolute"
                style={{ top: "5px", right: "5px" }}
              />
            </div>

            <DropdownButton
              id="dropdown-basic-button"
              variant="black"
              title={<img src={kidsIcon} alt="profiles" width="35px" />}
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic-button"
              variant="black"
              title={<img src={avatar} alt="profiles" width="35px" />}
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarCustom;
