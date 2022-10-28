import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button1 from "../Images/0-3button.png";
import Button2 from "../Images/4-5button.png";
import Button3 from "../Images/6-7button.png";
import Logo from "../Images/kidify-logo.png";
import Modal from "react-bootstrap/Modal";
import LoginSignup from "./LoginSignup";
import Avatar from "react-avatar";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/profile`, {
        withCredentials: true,
      })
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const logout = () => {
    axios
      .get(`http://localhost:4000/auth/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar">
      {!loading && (
        <>
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
                  <NavLink to="/preschool">
                    <img src={Button1} width="130px" alt="preschool" />
                  </NavLink>{" "}
                  <NavLink to="/grade-k">
                    <img src={Button2} width="130px" alt="grade-k" />
                  </NavLink>{" "}
                  <NavLink to="/grade-1">
                    <img
                      src={Button3}
                      width="130px"
                      style={{ paddingTop: 5 }}
                      alt="grade-1"
                    />
                  </NavLink>{" "}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <form className="search-form">
            <input className="search" type="search" placeholder="Search..." />
          </form>
          <Nav className="right-navbar justify-content-end" navbarScroll>
            <NavLink className="navbar-item text-white" href="/">
              Home
            </NavLink>
            <NavLink className="navbar-item text-white" href="about">
              About Us
            </NavLink>
            {user ? (
              <>
                <NavLink className="navbar-item text-white" to="/" onClick={logout}>
                  Logout
                </NavLink>
                <NavLink to="/profile">
                  <Avatar name={user.first_name} size="45" round="30px" />
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className="navbar-item text-white"
                  onClick={handleShow}
                >
                  Login/Signup
                </NavLink>
                <Modal show={showLogin} onHide={handleClose}>
                  <LoginSignup setUser={setUser} handleClose={handleClose} />
                </Modal>
              </>
            )}
          </Nav>
        </>
      )}
    </div>
  );
}

export default Header;