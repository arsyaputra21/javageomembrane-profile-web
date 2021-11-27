import React from "react";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import ActionButtonLink from "./ActionButtonLink";
import { Col, Row } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardStyled = styled.div`
  color: #fff;
  backdrop-filter: blur(10px) saturate(74%);
  -webkit-backdrop-filter: blur(10px) saturate(74%);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  padding: 3rem 2rem;
  div.card-row {
    align-items: center;
    padding: 2rem 1rem 2rem 2rem;
    div.desc-col {
      div.desc-text {
        padding: 1rem 0;
      }
      div.button-group {
        display: flex;
        gap: 1rem;
      }
      h4 {
        font-family: "Ubuntu", sans-serif;
        font-weight: bold;
      }
      text-align: justify;
      padding: 2rem;
    }
    div.img-col {
      div.img-box {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 100%;
      }
      img {
        max-width: 100%;
        height: auto;
        box-shadow: -1px 4px 18px -4px rgba(0, 0, 0, 0.66);
        -webkit-box-shadow: -1px 4px 18px -4px rgba(0, 0, 0, 0.66);
        -moz-box-shadow: -1px 4px 18px -4px rgba(0, 0, 0, 0.66);
        border-radius: 20px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    div.card-row {
      flex-direction: column-reverse;
      padding: 2rem 0 0;
      div.desc-col {
        div.desc-text {
          padding: 0;
          text-align: center;
          p {
            font-size: 0.9rem;
          }
        }
        div.button-group {
          flex-direction: column;
          align-items: center;
        }
      }
      div.img-col {
        padding-top: 1rem;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    div.card-row {
      div.desc-col {
        div.desc-text {
          p {
            font-size: 0.6rem;
          }
        }
      }
    }
  }
`;
function ProductCard({ namaProduk, shortDesc, thumbnail, id }) {
  return (
    <CardStyled>
      <Row className="card-row">
        <Col md={6} className="desc-col">
          <div className="desc-text">
            <h4 className="product-name">{namaProduk}</h4>
            <p className="product-desc">{shortDesc}</p>
          </div>
          <div className="button-group">
            <ActionButtonLink backgroundColor="#ffaa46" to={`/product/${id}`}>
              Lebih Lanjut
            </ActionButtonLink>

            <ActionButton
              backgroundColor="#20b038"
              href={`https://wa.me/6281310646381?text=Halo,%20saya%20ingin%20bertanya%20tentang%20${namaProduk}`}
              target="_blank"
            >
              Hubungi Kami
              <BsWhatsapp size={24} />
            </ActionButton>
          </div>
        </Col>
        <Col md={6} className="img-col">
          <div className="img-box">
            <Link to={`/product/${id}`}>
              <img src={thumbnail} alt="thumbnail" />
            </Link>
          </div>
        </Col>
      </Row>
    </CardStyled>
  );
}

export default ProductCard;
