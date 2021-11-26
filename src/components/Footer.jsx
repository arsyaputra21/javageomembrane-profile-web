import React from "react";
import styled from "styled-components";

import {
  BsFillTelephoneFill,
  BsYoutube,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #2c2c2c;

  h2 {
    padding: 2rem;
    font-weight: bold;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
  }

  div.contact-logo {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  div.social-link {
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    p {
      font-size: 1.2rem;
      font-weight: bold;
    }
    div.social-icon {
      display: flex;
      padding: 1rem;
      justify-content: space-evenly;
    }
  }
  div.copyright {
    display: block;
    width: 100%;
    background-color: #5f6060;
    text-align: center;
    color: #fff;
    p {
      padding-top: 1rem;
      font-family: "Roboto", sans-serif;
      font-weight: 800;
    }
  }
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
      padding: 0 1rem;
    }
  }
`;
function Footer() {
  return (
    <FooterStyled>
      <h2>PT Java Geomembrane</h2>
      <div className="alamat">
        <p>
          Ruko Berkah Jaya 1 No. B-4 JL. Kapten Piere Tendean Pasar Banjardewa,
          Kecamatan Taman, Kabupaten Pemalang, Jawa Tengah.
        </p>
      </div>

      <div className="contact-logo">
        <AiFillMail size={20} />
        <p>javageomembran@gmail.com</p>
      </div>
      <div className="contact-logo">
        <BsFillTelephoneFill size={20} />

        <p>(+62)81310646381 (Toni)</p>
      </div>
      <div className="contact-logo">
        <BsFillTelephoneFill size={20} />
        <p>(+62)8180621119 (Amar)</p>
      </div>
      <div className="social-link">
        <p>Check Our Social Media!</p>
        <div className="social-icon">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCql4nPz58RgzL8qkaB6GgRg/featured"
            style={{ color: "#ff2d2d" }}
          >
            <BsYoutube size={42} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/javageomembrane/"
            style={{ color: "white" }}
          >
            <BsInstagram size={42} />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2021 PT. Java Geomembrane - Indonesia</p>
      </div>
    </FooterStyled>
  );
}

export default Footer;
