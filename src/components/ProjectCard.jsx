import React from "react";
import styled from "styled-components";

const ProjectCardStyled = styled.div`
  border: solid rgba(0, 0, 0, 0.2) 0.5px;
  border-radius: 5px;

  img {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  div.caption-container {
    text-align: center;
    padding: 1rem 0.5rem 0;
    font-size: 0.9rem;
    p {
      min-height: 63px;
      margin-bottom: 0;
    }
  }
`;

const ProjectCard = ({ image, caption }) => {
  return (
    <ProjectCardStyled>
      <img src={image} alt="project-image" />

      <div className="caption-container">
        <p>{caption}</p>
      </div>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
