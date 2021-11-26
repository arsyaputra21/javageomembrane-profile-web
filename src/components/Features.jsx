import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import TitleText from "./TitleText";
import Layout from "./Layout";
import loyalImg from "../images/loyal.svg";
import jujurImg from "../images/jujur.svg";
import inovatifImg from "../images/inovatif.svg";
import unggulImg from "../images/unggul.svg";
import FeatureCard from "./FeatureCard";

const FeatureStyled = styled.div`
  h1 {
    text-align: center;
    padding-bottom: 2rem;
  }
  div.row {
    justify-content: space-around;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      padding-bottom: 0;
    }
  }
`;

function Features() {
  return (
    <Layout backgroundColor="#fff">
      <FeatureStyled>
        <TitleText>Our Features</TitleText>
        <Row sm={12}>
          <Col lg={6}>
            <FeatureCard
              aos="fade-right"
              image={unggulImg}
              title="Unggul"
              description="Terdepan dalam memberikan pelayanan dan kualitas terbaik kepada kustomer"
            />
          </Col>
          <Col lg={6}>
            <FeatureCard
              aos="fade-left"
              image={inovatifImg}
              title="Inovatif"
              description="Kreatif dan inovatif terhadap masalah baru yang dihadapi"
            />
          </Col>
          <Col lg={6}>
            <FeatureCard
              aos="fade-right"
              image={loyalImg}
              title="Loyal"
              description="Setia terhadap prinsip perusahaan, kolega, dan kustomer"
            />
          </Col>
          <Col lg={6}>
            <FeatureCard
              aos="fade-left"
              image={jujurImg}
              title="Jujur"
              description="Memiliki integritas terhadap stakeholder perusahaan"
            />
          </Col>
        </Row>
      </FeatureStyled>
    </Layout>
  );
}

export default Features;
