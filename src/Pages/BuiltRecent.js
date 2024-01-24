// import {  Card, CardText,CardTitle,CardActions} from 'react-mdl';
import {
  AiFillGithub,
  AiOutlineLink,
  AiOutlineFolder,
  AiTwotoneTool,
  AiOutlineSetting,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectCard from "../component/ProjectCard";
import SpotifyImage from "../images/spotify-1759471_1280.jpg";

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
          {/* <ProjectCard
            title="Build a spotify connected App"
            projectImage={SpotifyImage}
            imageAlt={"spotify image"}
            textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptate impedit iure eos neque consequuntur magni nostrum
            praesentium quas obcaecati ab?praesentium quas obcaecati ab?
            praesentium quas obcaecati ab? praesentium quas obcaecati
            ab? Voluptate impedit iure eos neque consequuntur magni
            nostrum"
            projectUrlPath={"&"}
            technologyUsed={[
              "React",
              "Vue",
              "Sass",
              "Animation",
              "c#",
              "sql",
              "sequel-orm",
            ]}
          /> */}

          <ProjectCard
            title="React Calculator"
            projectImage={SpotifyImage}
            imageAlt={"calculator"}
            textContent="A functional react calulator"
            projectUrlPath={"https://godwin-nj.github.io/sci-calculator/"}
            technologyUsed={["React", "CSS"]}
          />

          <ProjectCard
            title="Robotic Friends API display"
            projectImage={SpotifyImage}
            imageAlt={"robo-friends"}
            textContent="Fetching Robo-Friends API and displaying data"
            projectUrlPath={"https://godwin-nj.github.io/robofriends-2"}
            technologyUsed={["React-JS", "API", "CSS"]}
          />

          {/* redeploy this  this a major project*/}
          <ProjectCard
            title="Face-Recognition App"
            projectImage={SpotifyImage}
            imageAlt={"Face-Recognition App"}
            textContent="Web App using A.I to detect the face position of images"
            projectUrlPath={"https://github.com/Godwin-NJ/facerecognitionbrain"}
            technologyUsed={["React-JS", "Node-JS", "Postgres SQL", "Heroku"]}
          />
        </ul>
      </div>

      <button className="btnProject">
        <Link to="/projects" style={{ textDecoration: "none", color: "white" }}>
          View More
        </Link>
      </button>
      {/* <button style={{marginTop:'5%'}} >See More</button> */}
    </Wrapper>
  );
};

export default Built;

const Wrapper = styled.section`
  /* position: relative; */
  margin-top: 20px;
  height: 100%;
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
    flex-wrap: wrap;
    /* gap: 10px; */
    justify-content: space-around;
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
    background-color: rgb(26 26 26);
    color: #f6f7f9;
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
