import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import TitleText from "./TitleText";
import { color } from "../constants";
import YoutubeEmbed from "./YoutubeEmbed";

const VideoSectionStyled = styled.div`
  color: var(--mainWhite);
  h1 {
    text-align: center;
  }
  div.about-us-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;
    line-height: 2;
    h3 {
      font-weight: bold;
      margin-bottom: 1rem;
      font-size: 2rem;
    }
    div.profile {
      padding: 1rem 3rem;
    }
  }
  @media only screen and (max-width: 768px) {
    div.about-us-text {
      p {
        text-align: justify;
        font-size: 0.9rem;
      }
      h3 {
        text-align: center;
        font-size: 1.3rem;
      }
      div.profile {
        padding: 1rem 0rem;
      }
    }
  }
  @media only screen and (max-width: 448px) {
    div.about-us-text {
      p {
        text-align: center;
      }
    }
  }
`;

function VideoSection() {
  return (
    <Layout backgroundColor={color.mainBlue}>
      <VideoSectionStyled id="about-us">
        <TitleText color="#fff">Know us better</TitleText>
        <YoutubeEmbed embedId="_8En3sdynnk" />
        <div className="about-us-text">
          <div className="profile deskripsi">
            <h3>Tentang Kami</h3>
            <p>
              Berdiri sejak 2010, PT Javageomembrane adalah perusahaan yang
              bergerak di bidang jasa pemasangan dan distributor produk-produk
              Geosynthetic antara lain Geomembrane, Geotextile woven, Geotextile
              non woven, Geogrid, Geobag, Geotube, maupun Terpal serta produk
              sejenis lainnya untuk konstruksi perbaikan tanah, jalan tol,
              tambak udang, embung, kolam, dan berbagai proyek lainnya.
            </p>
          </div>
          <div className="profile visi">
            <h3>Visi</h3>
            <p>
              Menjadi perusahaan aplikator serta distributor kebutuhan bahan
              konstruksi terbesar di Indonesia.
            </p>
          </div>
          <div className="profile misi">
            <h3>Misi</h3>
            <p>
              Memberikan pelayanan terbaik kepada pelanggan dengan memberikan
              pelayanan jasa dan mutu produk berkualitas tinggi. Pengalaman
              pekerjaan Sejak berdiri dari tahun 2010 PT JavaGeomembrane telah
              mengerjakan ribuan proyek konstruksi di puluhan kota Indonesia
              dari berbagai klien perusahaan swasta dan BUMN. Selama lebih dari
              10 tahun kami berhasil mendapatkan kepercayaan dan kepuasan
              pelanggan dengan selalu memberikan pelayanan terbaik melalui
              prinsip kami yaitu respon cepat, pelayanan prima, kualitas tinggi,
              dan harga bersaing.
            </p>
          </div>
        </div>
      </VideoSectionStyled>
    </Layout>
  );
}

export default VideoSection;
