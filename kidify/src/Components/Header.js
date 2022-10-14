import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Images/kidify-logo.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import Login from "./Login";

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  return (
    <div className="navbar">
      <Navbar expand="lg">
        <a href="/" className="d-flex align-items-center p-0 text-dark">
          <img className="logo" src={Logo} alt="logo" />
        </a>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                title="Categories"
                classname="dropdown category-menu"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="preschool">Age 0-3</NavDropdown.Item>
                <NavDropdown.Item href="grade-k">Age 4-5</NavDropdown.Item>
                <NavDropdown.Item href="grade-1">Age 6-7</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <form className="search-form">
        <input className="search" type="search" placeholder="Search..." />
        <i class="fa fa-search" aria-hidden="true"></i>
      </form>
      <Nav className="right-navbar justify-content-end" navbarScroll>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="about">About Us</Nav.Link>
        <Nav.Link href="signup">Sign up</Nav.Link>
        <Nav.Link onClick={handleShow}>Login</Nav.Link>
        <Modal show={showLogin} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="warning" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
        <Nav.Link href="/:username">User Profile</Nav.Link>
      </Nav>
    </div>
  );
}

export default Header;
