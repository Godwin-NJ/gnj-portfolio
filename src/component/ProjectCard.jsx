import React from "react";
import styled from "styled-components";

//note below types to be passed as props
/* interface projectProps {
title : string ,
projectImage : string | any ,
content : string ,
urlPath : string,
technologyUsed : string[]
}*/

const ProjectCard = (props) => {
  const {
    title,
    projectImage,
    imageAlt,
    textContent,
    projectUrlPath,
    technologyUsed,
  } = props;
  //grid of two , image and content
  return (
    <Wrapper href={projectUrlPath} target="_blank">
      <content>
        <div className="imageBox">
          {/* //image */}
          <img src={projectImage} alt={imageAlt} className="imageResize"></img>
        </div>
        <header>
          <p className="titleOfProject">{title}</p>
        </header>
        <div className="contentLayout">
          {/* //content */}
          {/* //add max-content */}
          <p className="textContent">{textContent}</p>
          <div className="techItemBox">
            {technologyUsed &&
              technologyUsed.map((item) => {
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
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.2);
  margin: 10px;
  width: 30vw;
  max-height: 75vh;
  overflow: auto;
  .imageResize {
    height: 210px;
    width: 100%;
  }
  .imageBox {
    /* margin: 2px; */
  }
  .titleOfProject {
    font-weight: 550;
    font-size: 18px;
  }
  .textContent {
    font-size: 15px;
    opacity: 0.8;
    height: 115px;
    overflow: hidden;
    /* max-height: 50px; */
  }
  .techItem {
    border: 0px solid black;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    color: #7bcf7b;
    outline: none;
    background-color: black;
  }
  .contentLayout {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .techItemBox {
    /* margin: 5%; */
  }
`;
