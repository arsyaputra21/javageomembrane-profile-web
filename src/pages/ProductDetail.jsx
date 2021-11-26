import React from "react";
import Layout from "../components/Layout";
import { color } from "../constants";
import styled from "styled-components";

import ActionButton from "../components/ActionButton";
import { BsWhatsapp } from "react-icons/bs";
import ProductData from "../ProductData";
import ListBox from "../components/ListBox";

const ProductDetailStyled = styled.div`
  margin: 0 3rem;
  div.product-image {
    display: flex;
    padding: 2rem 0rem;

    img {
      width: 100%;
      border-radius: 20px;

      height: auto;
      max-height: 70vh;
    }
  }
  h1 {
    text-align: center;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
  }
  div.paragraph-section {
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      display: inline-block;
      padding-top: 1rem;
      margin: 0 auto;
      text-align: justify;
      font-size: 1.3rem;
      line-height: 2;
    }
  }
  div.list-section {
    padding-top: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  div.button-box {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
    div.paragraph-section {
      p {
        font-size: 0.9rem;
      }
    }
    div.list-section {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

function ProductDetail({ match }) {
  const productID = match.params.id;
  const Data = ProductData.filter((data) => {
    return data.id == productID;
  });
  const productData = Data[0];

  return (
    <>
      <Layout backgroundColor={color.mainWhite}>
        <ProductDetailStyled>
          <h1>{productData.name}</h1>
          <div className="product-image">
            <img src={productData.thumbnail} alt="" />
          </div>

          <div className="paragraph-section">
            <p>{productData.desc}</p>
          </div>
          <div className="list-section">
            <ListBox data={productData.keunggulan} title="Keunggulan" />
            <ListBox data={productData.aplikasi} title="Aplikasi" />
          </div>
          <div className="button-box">
            {/* <ActionButton
              width="50%"
              backgroundColor="#ffaa46"
              href={productData.linkShopee}
              target="_blank"
            >
              Beli Sekarang
            </ActionButton> */}

            <ActionButton
              target="_blank"
              width="50%"
              href={`https://wa.me/6281310646381?text=Halo,%20saya%20ingin%20bertanya%20tentang%20${productData.name}`}
            >
              Hubungi Kami
              <BsWhatsapp size={24} />
            </ActionButton>
          </div>
        </ProductDetailStyled>
      </Layout>
    </>
  );
}

export default ProductDetail;
