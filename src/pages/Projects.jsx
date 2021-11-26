import React, { useEffect } from "react";

import { ProjectData } from "../ProductData";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import ProjectCard from "../components/ProjectCard";

const ProjectStyled = styled.div`
  margin: 0 auto;
  padding: 0 1rem;

  div.project-gallery {
    padding: 1rem 2rem;
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 0.6rem;
  }
  div.project-list {
    padding: 1rem 2rem;
    text-align: start;
    ul {
      line-height: 2;
      list-style: square;
      li {
        padding: 0.5rem 0;
      }
    }
  }
  @media (max-width: 600px) {
    div.project-gallery {
      padding: 1rem 0;
    }
    div.project-list {
      font-size: 0.9rem;
    }
  }
`;

// const slides = [illustration1, illustration2, illustration3, illustration4];
function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <ProjectStyled>
      <TitleText>Projects</TitleText>
      <div className="project-gallery">
        {ProjectData.map((proj, idx) => (
          <ProjectCard key={idx} image={proj.image} caption={proj.caption} />
        ))}
      </div>
      <div className="project-list">
        <h3>Experiences</h3>
        <ul>
          <li>
            Pekerjaan Pemasangan Geotextile Non Woven 300 gr dan Geomembrane 1,5
            mm untuk Terowongan IJO di Rowokele Purwokerto dari PT. Waskita
            Karya
          </li>
          <li>
            Pekerjaan pemasangan Geotextile Non Woven 300 gr dan Geomembrane 1,5
            mm untuk Terowongan Kebasen di Kebasen Purwokerto dari PT. Adhi
            Karya
          </li>
          <li>
            Pekerjaan pemasangan Geotextile Non Woven 200 gr dan Geomembrane 1
            mm pada Embung Watu Gajah di Boyolali
          </li>
          <li>
            Pekerjaan pemasangan geomembrane 1 mm dan Bronjong pada Trans Tol
            Sigli Banda Aceh dari PT. Adhi Karya
          </li>
          <li>
            Pekerjaan instalasi Geomembrane 1mm pada proyek Embung Sleman di
            Yogyakarta, Jawa Timur
          </li>
          <li>
            Pekerjaan pemasangan pada proyek Embung di Kabupaten Barru, Makassar
          </li>
          <li>
            Pekerjaan pemasangan Geotextile dan Geomembrane di PLTU Bangkayang,
            Pontianak, Kalimantan Barat
          </li>
          <li>
            Pekerjaan pemasangan alas Geotextile dan Geomembrane pada kolam
            Rumah Makan Mang Engking di Bandara Soekarno Hatta, Cengkareng,
            Jakarta
          </li>
          <li>
            Support Geotextile Non Woven 200 gr untuk tambak udang di Gresik
          </li>
          <li>
            Support Material Geotextile Non Woven 300 gr dan Geomembrane 1,5 mm
            pada Proyek TPA Winong, Boyolali, Jawa Tengah
          </li>
          <li>
            Instalasi Geomembrane 1,5 mm untuk Kolam Limbah Semen Indonesia di
            Cilegon, Banten
          </li>
          <li>Support Material Geogrid di Batang, Jawa Tengah</li>
          <li>
            Pemasangan Geomembrane 0,5 mm di Pangkalan Bun, Kalimantan Tengah
          </li>
          <li>
            Ribuan pekerjaan pemasangan geomembrane dan produk geotextile
            lainnya di pulau Jawa maupun diluar pulau Jawa{" "}
          </li>
        </ul>
      </div>
    </ProjectStyled>
  );
}

export default About;
