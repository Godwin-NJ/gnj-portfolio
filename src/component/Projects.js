// import {  Card, CardText,CardTitle,CardActions} from 'react-mdl';
import { AiFillGithub, AiOutlineLink, AiOutlineFolder } from "react-icons/ai";

const Project = () => {
  return (
    <div className="cardProject">
      <section className="prjtTempt">
        <ul className="cardLayout">
          {/* project one  */}
          {/* project one  */}
          <li className="cardBuilt">
            <div>
              <h4 className="prjtTitle">React Calculator</h4>
              <div className="prjtDesc">
                <p>
                  A simple Digital Calculator .<br />
                </p>
                <ul className="tech-list">
                  <li>React-JS</li>
                  <li>JS</li>
                  <li>CSS</li>
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
                {/* <a href="/#" target="_blank" rel="noreferrer">
                            <AiOutlineFolder /> 
                            </a> */}
              </div>
            </div>
          </li>
          {/* end of preject 1 */}
          {/* end of preject 1 */}
          {/* project two  */}
          <li className="cardBuilt">
            <div className="cardContent">
              <div>
                <h4 className="prjtTitle">Robo-Friends</h4>
                <div className="prjtDesc">
                  <p>Fetching Robo-Friends API with Fetch API + UI</p>

                  <ul className="tech-list">
                    <li>React-JS</li>
                    <li>API</li>
                    <li>CSS</li>
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
          </li>
          {/* end of project 2 */}
          {/* project 3  */}
          <li className="cardBuilt">
            <div className="cardContent">
              <div>
                <h4 className="prjtTitle">Face-Recognition App</h4>
                <div className="prjtDesc">
                  <p>Web App using A.I to detect the face position of images</p>

                  <ul className="tech-list">
                    <li>React-JS</li>
                    <li>Node-JS</li>
                    <li>Postgres SQL</li>
                    <li>Heroku</li>
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
          </li>
          {/* end of project 3 */}
          {/* project 4  */}
          {/* <li className="cardBuilt">
            <div className="cardContent">
              <div>
                <h4>React Calculator</h4>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Voluptate impedit iure eos neque consequuntur magni nostrum
                    praesentium quas obcaecati ab?praesentium quas obcaecati ab?
                    praesentium quas obcaecati ab? praesentium quas obcaecati
                    ab? Voluptate impedit iure eos neque consequuntur magni
                    nostrum
                  </p>
                </div>
                <ul className="tech-list">
                  <li>React</li>
                  <li>JS</li>
                  <li>CSS</li>
                </ul>
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
            </div>
          </li> */}
          {/* end of project 4 */}
        </ul>
      </section>
    </div>
  );
};

export default Project;
