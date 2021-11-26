import React from "react";
import styled from "styled-components";

const TitleTextStyled = styled.h1`
  color: ${(props) => props.color};
  text-align: center;
  padding: 1rem 0;
`;

function TitleText(props) {
  return (
    <TitleTextStyled color={props.color || "#000"} className="title-text">
      {props.children}
    </TitleTextStyled>
  );
}

export default TitleText;
