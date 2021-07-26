import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./styles/navbar.css";

export default function NavbarUI() {
  return (
    <div className="navbarUi">
      <Navbar bg="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="https://www.freepnglogos.com/uploads/j-letter-png/letter-j-letter-red-alphabet-letters-icon-7.png"
                width="30"
                height="30"
                className="d-inline-block align-top brand--logo"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/imdb-movies">IMDB Movies</NavLink>
              <NavLink to="/mac-movies">Mac Movies</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
