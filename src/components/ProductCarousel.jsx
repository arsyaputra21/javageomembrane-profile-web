import react from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import ProductData from "../ProductData";

const CarouselStyled = styled.div`
  margin-top: 2rem;
  div.carousel.slide {
    position: relative;
    span.carousel-control-prev-icon {
      backdrop-filter: blur(8px) saturate(72%);
      -webkit-backdrop-filter: blur(8px) saturate(72%);
      background-color: rgba(17, 25, 40, 0.44);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.125);
      margin-right: 2rem;
      position: absolute;
      top: 2rem;
      left: 3rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    span.carousel-control-next-icon {
      backdrop-filter: blur(8px) saturate(72%);
      -webkit-backdrop-filter: blur(8px) saturate(72%);
      background-color: rgba(17, 25, 40, 0.44);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.125);
      margin-left: 2rem;
      position: absolute;
      top: 2rem;
      right: 3rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    a.carousel-control-prev {
      height: 100px;
    }
    a.carousel-control-next {
      height: 100px;
    }
  }
`;

function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselStyled data-aos="zoom-in" data-aos-offset="300">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={7000}>
        {ProductData.map((data, idx) => {
          return (
            <Carousel.Item key={idx}>
              <ProductCard
                id={data.id}
                namaProduk={data.name}
                shortDesc={data.shortdesc}
                thumbnail={data.thumbnail}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </CarouselStyled>
  );
}

export default ProductCarousel;
