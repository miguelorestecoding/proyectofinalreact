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
            <Nav.Link><Link to='/'>Home</Link></Nav.Link> 
           <Nav.Link><Link to='/products'>Productos</Link></Nav.Link> 
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <Link to='/category/smartphones'><NavDropdown.Item href="#action/3.1">Smartphones</NavDropdown.Item></Link>
              <Link to='/category/laptops'><NavDropdown.Item href="#action/3.2">Tablets</NavDropdown.Item></Link>
              <Link to='/category/notebooks'><NavDropdown.Item href="#action/3.3">Notebooks</NavDropdown.Item></Link>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
