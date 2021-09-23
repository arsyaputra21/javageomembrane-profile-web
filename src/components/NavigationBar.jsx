import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";

const NavbarStyled = styled.div`
  padding: 2rem 4rem;
  @media only screen and (max-width: 768px) {
    padding: 2rem 2rem 1rem;
    div.navbar-collapse {
      text-align: center;
    }
  }
`;

function NavigationBar() {
  return (
    <NavbarStyled>
      <Navbar expand="lg" variant="light">
        <Navbar.Brand href="/">Java Geomembrane</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ms-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <NavDropdown title="PRODUCTS">
              <NavDropdown.Item href="#">Product 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Product 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Product 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Product 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarStyled>
  );
}

export default NavigationBar;
