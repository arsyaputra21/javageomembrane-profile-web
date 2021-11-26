import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

const YoutubeVideoStyled = styled.div`
  padding: 2rem 0;
  div.video-row {
    justify-content: center;
    div.video-responsive {
      overflow: hidden;
      padding-bottom: 56.25%;
      position: relative;
      height: 0;
    }

    div.video-responsive iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }
`;

const YoutubeEmbed = ({ embedId }) => (
  <YoutubeVideoStyled
    data-aos="zoom-in"
    data-aos-anchor-placement="center-bottom"
  >
    <Row className="video-row">
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Row>
  </YoutubeVideoStyled>
);

export default YoutubeEmbed;
