import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import ProductData from "../ProductData";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

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

  div.dropdown-menu {
    position: absolute;

    left: -70px;
    a.dropdown-item {
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 2rem 1rem;
    div.dropdown-menu {
      left: 5px;
    }
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
        <Link className="navbar-brand" to="/" exact>
          <img src={logo} alt="logo" />
        </Link>

        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/" exact>
              HOME
            </Link>

            <NavDropdown alignRight title="PRODUCTS">
              {ProductData.map((data, idx) => (
                <Link className="dropdown-item" to={`/product/${data.id}`}>
                  {data.name}
                </Link>
              ))}
            </NavDropdown>

            <Link className="nav-link" to="/project">
              PROJECT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarStyled>
  );
}

export default NavigationBar;
