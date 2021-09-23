import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EngineerImage from "../images/EngineerImage.svg";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import Layout from "../components/Layout";
import { color } from "../constants";
import TitleText from "./TitleText";

const LandingPageStyled = styled.div`
  div {
    div.left-col {
      text-align: justify;
      div {
        margin: 0.5rem 0;
      }
      div.button-box {
        div {
          width: 50%;
          font-size: 1.2rem;
          font-weight: bold;
        }
      }
    }
    div.right-col {
      img {
        width: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column-reverse;
      div.left-col {
        div.button-box {
          div {
            width: 100%;
          }
        }
      }
      div.right-col {
        margin-bottom: 0.75rem;
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
              <TitleText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
                doloremque.
              </TitleText>
            </Row>
            <Row>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam commodi asperiores voluptatibus reprehenderit est
                exercitationem odio doloribus! Architecto illum illo provident
                iure unde culpa inventore asperiores voluptas, mollitia debitis
                corporis.
              </p>
            </Row>
            <Row className="button-box">
              <ActionButton>Lihat Catalog</ActionButton>
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
