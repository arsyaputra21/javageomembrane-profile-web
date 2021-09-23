import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyled = styled.div`
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  color: #ffffff;
  font-family: Helvetica;
  padding: 15px;
  background-color: #4662ff;
  -webkit-box-shadow: 4px -2px 27px 0 #acacac;
  -moz-box-shadow: 4px -2px 27px 0 #acacac;
  box-shadow: 4px -2px 27px 0 #acacac;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #6c80ef;
    border: solid rgba(255, 255, 255, 0) 2px;
    -webkit-border-radius: 21px;
    -moz-border-radius: 21px;
    border-radius: 21px;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

function ActionButton(props) {
  return (
    <ButtonStyled width={props.width}>
      <Link to={props.to}>{props.children}</Link>
    </ButtonStyled>
  );
}

export default ActionButton;
