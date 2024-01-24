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
          {/* project one  */}
          {/* project one  */}
          {/* <li className="cardBuilt">
            <div>
              <h4 className="prjtTitle">React Calculator</h4>
              <div className="prjtDesc">
                <p>
                  A simple Digital Calculator .<br />
                </p>
                <ul className="tech-list">
                  <li className="techList-li">React-JS</li>
                  <li className="techList-li">JS</li>
                  <li className="techList-li">CSS</li>
                </ul>
              </div>

              <div className="cardIcon">
                <a
                  href="https://github.com/Godwin-NJ/sci-calculator.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://godwin-nj.github.io/sci-calculator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLink />
                </a>
              
              </div>
            </div>
          </li> */}
          <ProjectCard
            title="React Calculator"
            projectImage={SpotifyImage}
            imageAlt={"calculator"}
            textContent="A functional react calulator"
            projectUrlPath={"https://godwin-nj.github.io/sci-calculator/"}
            technologyUsed={["React", "CSS"]}
          />
          {/* end of preject 1 */}
          {/* end of preject 1 */}
          {/* project two  */}
          {/* <li className="cardBuilt">
            <div className="cardContent">
              <div>
                <h4 className="prjtTitle">Robo-Friends</h4>
                <div className="prjtDesc">
                  <p>Fetching Robo-Friends API with Fetch API + UI</p>

                  <ul className="tech-list">
                    <li className="techList-li">React-JS</li>
                    <li className="techList-li">API</li>
                    <li className="techList-li">CSS</li>
                  </ul>
                </div>
                <div className="cardIcon">
                  <a
                    href="https://github.com/Godwin-NJ/robofriends-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://godwin-nj.github.io/robofriends-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink />
                  </a>
                </div>
              </div>
            </div>
          </li> */}
          <ProjectCard
            title="Robotic Friends API display"
            projectImage={SpotifyImage}
            imageAlt={"robo-friends"}
            textContent="Fetching Robo-Friends API and displaying data"
            projectUrlPath={"https://godwin-nj.github.io/robofriends-2"}
            technologyUsed={["React-JS", "API", "CSS"]}
          />
          {/* end of project 2 */}
          {/* project 3  */}
          {/* <li className="cardBuilt">
            <div className="cardContent">
              <div>
                <h4 className="prjtTitle">Face-Recognition App</h4>
                <div className="prjtDesc">
                  <p>Web App using A.I to detect the face position of images</p>

                  <ul className="tech-list">
                    <li className="techList-li">React-JS</li>
                    <li className="techList-li">Node-JS</li>
                    <li className="techList-li">Postgres SQL</li>
                    <li className="techList-li">Heroku</li>
                  </ul>
                </div>
                <div className="cardIcon">
                  <a
                    href="https://github.com/Godwin-NJ/facerecognitionbrain"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://godwin-nj.github.io/robofriends-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink />
                  </a>
                </div>
              </div>
            </div>
          </li> */}
          <ProjectCard
            title="Face-Recognition App"
            projectImage={SpotifyImage}
            imageAlt={"Face-Recognition App"}
            textContent="Web App using A.I to detect the face position of images"
            projectUrlPath={"https://github.com/Godwin-NJ/facerecognitionbrain"}
            technologyUsed={["React-JS", "Node-JS", "Postgres SQL", "Heroku"]}
          />
          {/* end of project 3 */}
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
    gap: 10px;
    justify-content: space-around;
  }
`;
