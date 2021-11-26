import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import ProductData from "../ProductData";
import logo from "../images/logo.png";

const NavbarStyled = styled.div`
  padding: 2rem 4rem;
  a.navbar-brand {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem 2rem 1rem;
    a.navbar-brand {
      flex-direction: column;
      img {
        width: 75px;
        height: 75px;
      }

      font-size: 0.8rem;
    }
    div.navbar-collapse {
      text-align: center;
    }
  }
`;

function NavigationBar() {
  return (
    <NavbarStyled>
      <Navbar expand="lg" variant="light">
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ms-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown align="right" title="PRODUCTS">
              {ProductData.map((data, idx) => (
                <NavDropdown.Item href={`/product/${data.id}`}>
                  {data.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="/project">PROJECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarStyled>
  );
}

export default NavigationBar;
