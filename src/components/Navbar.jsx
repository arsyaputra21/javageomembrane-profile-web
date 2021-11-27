import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import logo from "../images/logo.png";
import { color } from "../constants";
import { IoIosArrowDropdown } from "react-icons/io";
import ProductData from "../ProductData";

const NavbarStyled = styled.nav`
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 4rem 2rem 2rem;
  z-index: 10;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    backdrop-filter: blur(3px);
    transition: 0.3s ease-in;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    right: 0;
    width: 50%;
    height: 100vh;
    background-color: rgba(15, 15, 15, 0.6);
    z-index: 20;
  }
`;

const NavlinkStyled = styled(NavLink)`
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem 0.3rem;
  cursor: pointer;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  &:hover:not(.navbar-brand) {
    border-color: ${color.mainBlue};
  }

  &.navbar-brand {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000;
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 991px) {
    &.navbar-brand {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 768px) {
    color: #fff;
    &.navbar-brand {
      font-size: 1rem;
    }
  }
`;

const NavDropBtn = styled.div`
  position: relative;
  p.title {
    margin: 0;
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 1rem 0.3rem;
    cursor: pointer;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    &:hover {
      border-color: ${color.mainBlue};
    }
  }
`;

const NavDropMenu = styled.div`
  border-radius: 10px;
  background-color: lightgray;
  position: absolute;
  /* position: ${({ isOpen }) => (isOpen ? "absolute" : "fixed")}; */
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem 0.7rem;
  right: 34px;
  top: 40px;
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translate(0, 0)" : "translate(0, -200px)"};
  @media screen and (max-width: 768px) {
    color: #fff;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: ${({ isOpen }) => (isOpen ? "fixed" : "absolute")};
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 21;
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [dropMenuOpen, setDropMenuOpen] = useState(false);
  return (
    <NavbarStyled>
      <NavlinkStyled to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </NavlinkStyled>
      <MobileMenu
        isOpen={burgerOpen}
        onClick={() => setBurgerOpen(!burgerOpen)}
      >
        {burgerOpen ? <MdClose color="#fff" /> : <FaBars color="#000" />}
      </MobileMenu>
      <NavMenu isOpen={burgerOpen}>
        <NavlinkStyled onClick={() => setBurgerOpen(!burgerOpen)} to="/" exact>
          Home
        </NavlinkStyled>
        <NavDropBtn onClick={() => setDropMenuOpen(!dropMenuOpen)}>
          <p className="title">
            PRODUCT <IoIosArrowDropdown />
          </p>
          <NavDropMenu isOpen={dropMenuOpen}>
            {ProductData.map((data, idx) => (
              <Link to={`/product/${data.id}`}>{data.name}</Link>
            ))}
          </NavDropMenu>
        </NavDropBtn>

        <NavlinkStyled
          to="/projects"
          onClick={() => setBurgerOpen(!burgerOpen)}
        >
          PROJECT
        </NavlinkStyled>
      </NavMenu>
    </NavbarStyled>
  );
};

export default Navbar;
