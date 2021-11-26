import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const LayoutStyled = styled.div`
  background-color: ${(props) => props.backgroundColor};
  padding: 4rem;
`;

function Layout(props) {
  return (
    <LayoutStyled backgroundColor={props.backgroundColor || "#fff"}>
      {props.children}
    </LayoutStyled>
  );
}

export default Layout;
