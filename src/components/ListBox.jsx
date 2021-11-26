import React from "react";
import styled from "styled-components";

const ListStyled = styled.div`
  padding: 0 2rem;

  ul {
    line-height: 2;
  }
  @media (max-width: 768px) {
    ul {
      font-size: 0.85rem;
    }
  }
`;

const ListBox = ({ title, data }) => {
  return (
    <ListStyled>
      <h4>{title}</h4>
      <ul>
        {data.map((list, idx) => {
          return <li key={idx}>{list}</li>;
        })}
      </ul>
    </ListStyled>
  );
};

export default ListBox;
