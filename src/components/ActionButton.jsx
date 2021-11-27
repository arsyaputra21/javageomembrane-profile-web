import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyled = styled.a`
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  color: #ffffff;
  font-family: "Ubuntu", sans-serif;
  padding: 1rem;
  background-color: ${(props) => props.backgroundColor};
  -webkit-box-shadow: 4px -2px 27px 0 #acacac;
  -moz-box-shadow: 4px -2px 27px 0 #acacac;
  box-shadow: 4px -2px 27px 0 #acacac;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  width: ${(props) => props.width};
  transition: 0.2s all ease-in-out;

  &:hover {
    color: #f0f0f0;
    opacity: 0.6;
    border: solid rgba(255, 255, 255, 0) 2px;
    -webkit-border-radius: 21px;
    -moz-border-radius: 21px;
    border-radius: 21px;
    text-decoration: none;
  }
  svg {
    margin-left: 8px;
  }
  @media (max-width: 400px) {
    font-size: 0.8rem;
    transform: scale(0.8);
  }
`;

function ActionButton(props) {
  return (
    <ButtonStyled
      backgroundColor={props.backgroundColor || "#4662ff"}
      width={props.width}
      href={props.href}
      role="button"
      target={props.target}
    >
      {props.children}
    </ButtonStyled>
  );
}

export default ActionButton;
