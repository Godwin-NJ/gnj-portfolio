import React from "react";
import styled from "styled-components";
import { ImBooks } from "react-icons/im";
import SocialIcon from "./SocialIcon";
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";

//note below types to be passed as props
/* interface projectProps {
title : string ,
projectImage : string | any ,
content : string ,
urlPath : string,
technologiesUsed : string[]
}*/

const ProjectCard = (props) => {
  const {
    title,
    isArticle = false,
    ProjectIcon,
    projectIconColor,
    textContent,
    projectUrlPath,
    technologiesUsed,
    githubProjectLink,
    websiteProjectLink,
  } = props;
  //grid of two , image and content
  return (
    <Wrapper
      href={projectUrlPath}
      target="_blank"
      $projectIconColor={projectIconColor}
    >
      <content>
        <header>
          <span>
            <ImBooks className="defaultIcon" />
          </span>
          <p className="titleOfProject">
            {title} {isArticle ? <FaPenClip /> : ""}
          </p>
        </header>
        <div className="contentLayout">
          <div className="projectInfo">
            <span>
              {ProjectIcon && <ProjectIcon className="projectIcon" />}
              {/* {<ProjectIcon className="projectIcon" />} */}
            </span>
            <p className="textContent">{textContent}</p>
          </div>

          <section className="projectLinks">
            {/* github link */}
            <span>
              <SocialIcon
                href={githubProjectLink}
                // href=${"githubProjectLink"}
                alt="Github project link"
                ReactIcon={AiFillGithub}
                iconColor="#000"
              />
            </span>
            {/* website link */}
            <span>
              <SocialIcon
                href={websiteProjectLink}
                alt="project website link"
                ReactIcon={FaLink}
                iconColor="#000"
              />
            </span>
          </section>

          <div className="techItemBox">
            {technologiesUsed &&
              technologiesUsed.map((item) => {
                return <button className="techItem">{item}</button>;
              })}
          </div>
        </div>
      </content>
    </Wrapper>
  );
};

export default ProjectCard;

const Wrapper = styled.a`
  display: block;
  color: black;
  border: 1px solid "";
  border-radius: 5px;
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2);
  margin: 10px;
  width: 550px;
  max-width: 450px;
  max-height: 75vh;
  overflow: auto;
  padding: 10px;
  &:hover {
    box-shadow: 1px 1px 3px 5px rgba(0, 0, 0, 0.2);
  }
  .imageResize {
    height: 210px;
    width: 100%;
  }
  header {
    display: flex;
    /* padding: 10px; */
    /* padding-left: 15px; */
    .defaultIcon {
      font-size: 20px;
    }
  }
  .titleOfProject {
    font-weight: 600;
    font-size: 17px;
  }
  .textContent {
    /* font-size: 20px; */
    opacity: 0.6;
    /* height: 115px; */
    overflow: hidden;
    /* max-height: 50px; */
  }
  .techItem {
    border: 0px solid black;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    /* color: #7bcf7b; */
    color: #e6dede;
    opacity: 0.8;
    outline: none;
    background-color: black;
  }
  .contentLayout {
    display: flex;
    flex-direction: column;
    /* gap: 7px; */
  }
  .projectIcon {
    color: ${(props) => props.$projectIconColor};
    font-size: 30px;
  }
  .projectInfo {
    display: flex;
    /* padding: 10px; */
  }
  .projectLinks {
    display: flex;
    gap: 10px;
    span {
      &:hover {
        background-color: none;
      }
    }
  }

  @media (max-width: 480px) {
    width: 410px;
    max-width: 420px;
  }
`;
