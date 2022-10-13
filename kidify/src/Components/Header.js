import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Images/kidify-logo.png';

function Header () {
    return(
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
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Categories" classname="dropdown category-menu" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="preschool">Age 0-3</NavDropdown.Item>
                                <NavDropdown.Item href="grade-k">Age 4-5</NavDropdown.Item>
                                <NavDropdown.Item href="grade-1">Age 6-7</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <form className='search-form'>
        <input className='search' type="search" placeholder="Search..."  />
        <i class='fa fa-search' aria-hidden='true'></i>
    </form>
            <Nav className="right-navbar justify-content-end" navbarScroll>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="about">About Us</Nav.Link>
                <Nav.Link href="signup">Sign up</Nav.Link>
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/:username">User Profile</Nav.Link>
            </Nav>
        </div>
    )
}

export default Header;