import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import TitleText from "./TitleText";
import YoutubeEmbed from "./YoutubeEmbed";

const VideoSectionStyled = styled.div`
  color: var(--mainWhite);
  h1 {
    text-align: center;
  }
`;

function VideoSection() {
  return (
    <Layout backgroundColor="#4662FF">
      <VideoSectionStyled>
        <TitleText>Know us better</TitleText>
        <YoutubeEmbed embedId="_8En3sdynnk" />
      </VideoSectionStyled>
    </Layout>
  );
}

export default VideoSection;
