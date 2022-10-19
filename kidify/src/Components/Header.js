import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button1 from "../Images/0-3button.png";
import Button2 from "../Images/4-5button.png";
import Button3 from "../Images/6-7button.png";
import Logo from "../Images/kidify-logo.png";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import Avatar from "react-avatar";

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
              <a href="/preschool">
                <img src={Button1} width="130px" />
              </a>{" "}
              <a href="/grade-k">
                <img src={Button2} width="130px" />
              </a>{" "}
              <a href="/grade-1">
                <img src={Button3} width="130px" style={{ paddingTop: 5 }} />
              </a>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <form className="search-form">
        <input className="search" type="search" placeholder="Search..." />
        <i className="fa fa-search" aria-hidden="true"></i>
      </form>
      <Nav className="right-navbar justify-content-end" navbarScroll>
        <Nav.Link className="navbar-item" href="/">
          Home
        </Nav.Link>
        <Nav.Link className="navbar-item" href="about">
          About Us
        </Nav.Link>
        <Nav.Link className="navbar-item" onClick={handleShow}>
          Login/Signup
        </Nav.Link>
        <Modal show={showLogin} onHide={handleClose}>
          <Login />
        </Modal>
        <Nav.Link href="/:username">
          <Avatar name="Wim Mostmans" size="50" round="30px" />
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Header;
