// import {  Card, CardText,CardTitle,CardActions} from 'react-mdl';
import { AiFillGithub, AiOutlineLink, AiOutlineFolder } from "react-icons/ai";
import ProjectCard from "../component/ProjectCard";
import SpotifyImage from "../images/spotify-1759471_1280.jpg";
import styled from "styled-components";

const Project = () => {
  return (
    <Wrapper>
      <section className="prjtTempt">
        <ul className="cardLayout">
          <ProjectCard
            title="React Calculator"
            imageAlt={"calculator"}
            textContent="A functional react calulator"
            projectUrlPath={"https://godwin-nj.github.io/sci-calculator/"}
            technologiesUsed={["React", "CSS"]}
          />

          <ProjectCard
            title="Robotic Friends API display"
            imageAlt={"robo-friends"}
            textContent="Fetching Robo-Friends API and displaying data"
            projectUrlPath={"https://godwin-nj.github.io/robofriends-2"}
            technologiesUsed={["React-JS", "API", "CSS"]}
          />

          <ProjectCard
            title="Face-Recognition App"
            imageAlt={"Face-Recognition App"}
            textContent="Web App using A.I to detect the face position of images"
            projectUrlPath={"https://github.com/Godwin-NJ/facerecognitionbrain"}
            technologiesUsed={["React-JS", "Node-JS", "Postgres SQL", "Heroku"]}
          />
        </ul>
      </section>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.section`
  .cardLayout {
    display: flex;
    flex-wrap: wrap;
    /* gap: 5px; */
    justify-content: space-around;
  }
`;
