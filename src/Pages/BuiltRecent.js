import { IoCalculatorOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectCard from "../component/ProjectCard";
// import SpotifyImage from "../images/spotify-1759471_1280.jpg";

const Built = () => {
  return (
    <Wrapper className="prjtTemp">
      <h6 className="spotlight-info">
        Spotlight Articles & PROJECTS
        {/* -<AiOutlineSetting /> */}
        {/* <AiTwotoneTool /> BELOW */}
      </h6>

      <div>
        <ul className="cardLayout">
          <ProjectCard
            title="Inventory Management API-Article"
            textContent="Medium enterprize Inventory Management Soln."
            projectUrlPath={
              "https://godwinamadi-nj.hashnode.dev/build-and-dockerize-a-node-js-inventory-app"
            }
            githubProjectLink={"https://github.com/Godwin-NJ/Unit-Inventory"}
            websiteProjectLink={
              "https://godwinamadi-nj.hashnode.dev/build-and-dockerize-a-node-js-inventory-app"
            }
            technologiesUsed={[
              "Node JS",
              "MongoDb",
              "authentication",
              "docker",
              "authorization",
            ]}
          />
          {/* <ProjectCard
            title="React Calculator"
            ProjectIcon={IoCalculatorOutline}
            imageAlt={"calculator"}
            textContent="Functional Digital calulator "
            projectUrlPath={"https://godwin-nj.github.io/sci-calculator/"}
            githubProjectLink={"https://github.com/Godwin-NJ/sci-calculator"}
            websiteProjectLink={"https://godwin-nj.github.io/sci-calculator/"}
            technologiesUsed={["React", "CSS"]}
          /> */}

          <ProjectCard
            title="Robo-Friends Web App"
            imageAlt={"robo-friends"}
            textContent="Robo-Friends search web platform using the Robo-friends API"
            projectUrlPath={"https://godwin-nj.github.io/robofriends-2"}
            githubProjectLink={"https://github.com/Godwin-NJ/robofriends-2"}
            websiteProjectLink={"https://godwin-nj.github.io/robofriends-2"}
            technologiesUsed={["React-JS", "API", "CSS"]}
          />

          {/* redeploy this  this a major project*/}
          <ProjectCard
            title="Face-Recognition App"
            imageAlt={"Face-Recognition App"}
            textContent="A Smart face-recognition web app"
            projectUrlPath={"https://github.com/Godwin-NJ/facerecognitionbrain"}
            githubProjectLink={
              "https://github.com/Godwin-NJ/facerecognitionbrain"
            }
            websiteProjectLink={
              "https://github.com/Godwin-NJ/facerecognitionbrain"
            }
            technologiesUsed={["React-JS", "Node-JS", "Postgres SQL", "Heroku"]}
          />
        </ul>
      </div>

      <button className="btnProject">
        <Link to="/projects" style={{ textDecoration: "none", color: "white" }}>
          See More
        </Link>
      </button>
    </Wrapper>
  );
};

export default Built;

const Wrapper = styled.section`
  /* position: relative; */
  margin-top: 1%;
  /* height: 100%; */
  .prjtTemp {
  }
  .spotlight-info {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 20px;
  }
  .cardLayout {
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    /* justify-content: space-around; */
    /* margin: 35px; */
  }
  .btnProject {
    display: flex;
    margin: 20px auto;
    /* margin-top: 5vh; */
    font-size: 15px;
    border: 1px solid black;
    padding: 10px;
    text-decoration: none;
    border-radius: 15px;
    border-color: transparent;
    background-color: #441696;
    color: #f6f7f9;
    &:hover {
      box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);
    }
    /* margin-left: 18%; */
  }

  @media (min-width: 840px) {
    /* .cardLayout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0%;
  } */
    /* .cardBuilt:hover {
    transform: scale(1.1);
    height: 100%;
  } */
  }
`;
