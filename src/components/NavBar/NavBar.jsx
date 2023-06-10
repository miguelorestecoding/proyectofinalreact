import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand href="">MiTienda</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='/products'>Productos</Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <Link to='/category/smartphones'><NavDropdown.Item href="#action/3.1">Smartphones</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action/3.2">Tablets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Notebooks</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
