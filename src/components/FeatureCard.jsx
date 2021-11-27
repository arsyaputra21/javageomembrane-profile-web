import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  h4 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
  }
  p {
    text-align: center;
    font-size: 1rem;
  }
  div.img-box {
    padding: 2rem 2rem 1rem;
    transform: scale(0.7);
    img {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
function FeatureCard({ image, title, description, aos }) {
  return (
    <CardStyled data-aos={aos} data-aos-offset="500">
      <div className="img-box">
        <img src={image} alt="img" />
      </div>

      <h4>{title}</h4>

      <p>{description}</p>
    </CardStyled>
  );
}

export default FeatureCard;
