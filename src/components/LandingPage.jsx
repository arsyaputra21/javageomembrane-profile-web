import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EngineerImage from "../images/EngineerImage.svg";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import Layout from "../components/Layout";
import { color } from "../constants";

const LandingPageStyled = styled.div`
  div {
    padding-bottom: 2rem;
    div.left-col {
      text-align: justify;
      line-height: 2;
      h1 {
        font-size: 2.5rem;
      }

      div {
        margin: 1rem 0;
      }
      div.button-box {
        display: flex;

        align-items: center;
        width: 100%;
      }
    }
    div.right-col {
      img {
        max-width: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column-reverse;
      padding-bottom: 0;
      div.left-col {
        text-align: center;
        h1 {
          text-align: center;
          font-size: 2rem;
        }

        div.button-box {
          justify-content: center;
        }
      }
      div.right-col {
        margin-bottom: 0.75rem;
      }
    }
    @media only screen and (max-width: 400px) {
      div.left-col {
        h1 {
          font-size: 1.7rem;
        }
      }
    }
  }
`;

function LandingPage() {
  return (
    <Layout backgroundColor={color.mainWhite}>
      <LandingPageStyled>
        <Row>
          <Col className="left-col" lg={6}>
            <Row>
              <h1>Selamat Datang di PT. Java Geomembrane</h1>
            </Row>
            <Row>
              <p>
                Solusi Terbaik atas Kebutuhan Geomembrane dan Produk Geotextile.
                Memberikan Kualitas dan Kepuasan sejak 2010.
              </p>
            </Row>
            <Row className="button-box">
              <ActionButton
                backgroundColor="#ffaa46"
                width="60%"
                href="#about-us"
              >
                Lebih Lanjut
              </ActionButton>
            </Row>
          </Col>
          <Col lg={6} className="right-col">
            <img src={EngineerImage} alt="engineer illustration" />
          </Col>
        </Row>
      </LandingPageStyled>
    </Layout>
  );
}

export default LandingPage;
