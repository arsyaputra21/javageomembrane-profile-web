import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
const ImageSliderStyled = styled.div`
  padding: 3rem 0;

  div.carousel.slide {
    span.carousel-control-prev-icon {
      backdrop-filter: blur(10px) saturate(72%);
      -webkit-backdrop-filter: blur(8px) saturate(72%);
      background-color: rgba(9, 9, 10, 0.6);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.125);
    }
    span.carousel-control-next-icon {
      backdrop-filter: blur(10px) saturate(72%);
      -webkit-backdrop-filter: blur(8px) saturate(72%);
      background-color: rgba(9, 9, 10, 0.6);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.125);
    }
    div.carousel-item {
      text-align: center;
      div.carousel-caption {
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.9rem;
        max-height: 70px;
        padding: 1rem;
      }
      img {
        margin: 0 auto;
        border-radius: 10px;
        max-width: 100%;
        height: auto;
      }
    }
  }
  @media (max-width: 590px) {
    div.carousel-caption {
      font-size: 0.5rem;
    }
  }
`;
function ImageSlider({ slides }) {
  return (
    <ImageSliderStyled>
      <Carousel interval={10000}>
        {slides.map((slide, idx) => {
          return (
            <Carousel.Item key={idx}>
              <img src={slide.image} alt={`slide ${idx}`} />
              <Carousel.Caption>
                <p>{slide.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </ImageSliderStyled>
  );
}

export default ImageSlider;
