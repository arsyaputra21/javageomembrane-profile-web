import React from "react";
import styled from "styled-components";

const LayoutStyled = styled.div`
  overflow: hidden;
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
