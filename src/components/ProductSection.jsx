import React from "react";
import Layout from "./Layout";
import { color } from "../constants";
import ProductCarousel from "./ProductCarousel";
import styled from "styled-components";
import TitleText from "./TitleText";

const Base = styled.div`
  position: relative;

  div.orange-circle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ffaa46;
    left: -50px;
    bottom: -50px;
    opacity: 0.7;
  }
  div.green-circle {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #20b038;
    right: -50px;
    top: 30px;
    opacity: 0.7;
  }
  @media only screen and (max-width: 768px) {
    div.green-circle {
      width: 100px;
      height: 100px;
      top: 50px;
    }
    div.orange-circle {
      width: 100px;
      height: 100px;
    }
  }
`;

function ProductSection() {
  return (
    <Layout backgroundColor={color.mainBlue}>
      <Base className="base" id="product-section">
        <TitleText color="#fff">Our Products</TitleText>
        <div data-aos="fade-right" className="orange-circle" />
        <div data-aos="fade-left" className="green-circle" />
        <ProductCarousel />
      </Base>
    </Layout>
  );
}

export default ProductSection;
