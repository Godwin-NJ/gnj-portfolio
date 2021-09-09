// import {  Card, CardText,CardTitle,CardActions} from 'react-mdl';
import { AiFillGithub,AiOutlineLink,AiOutlineFolder } from "react-icons/ai";

const Project = () => {
    return ( 
        <div className="cardProject">
            <section className="cardLayout">
            <ul className="project-grid">
                {/* project one  */}
                <li className="cardBuilt">
                    <div className="cardContent">
                        <div>
                        <h4>React Calculator</h4>
                        <div>
                            <p>  
                                A simple Digital Calculator .<br/>
                               You can carry out multiple calculator functions using this simple React calculator.
                               Built Using React-JS. 
                            </p>
                        </div>
                        <ul className="tech-list">
                            <li>React-JS</li>
                            <li>JS</li>
                            <li>CSS</li>
                        </ul>
                        <div className="cardIcon">
                            <a href="https://github.com/Godwin-NJ/sci-calculator.git" target="_blank" rel="noreferrer">
                            <AiFillGithub /> 
                            </a>
                             <a href="https://godwin-nj.github.io/sci-calculator/" target="_blank" rel="noreferrer">
                            <AiOutlineLink /> 
                            </a>
                            <a href="/" target="_blank" rel="noreferrer">
                            <AiOutlineFolder /> 
                            </a>
                        </div>
                        </div>    
                    </div>
                </li>
                 {/* end of preject 1 */}
                 {/* project two  */}
                <li className="cardBuilt">
                    <div className="cardContent">
                        <div>
                        <h4>Robo-Friends</h4>
                        <div>
                            <p>
                                Using robofriends APi to display several robots on a screen while 
                                dynamically searching them with related alphabets.  
                            </p>
                        </div>
                        <ul className="tech-list">
                            <li>React-JS</li>
                            <li>API</li>
                            <li>CSS</li>
                        </ul>
                        <div className="cardIcon">
                            <a href="https://github.com/Godwin-NJ/robofriends-2" target="_blank" rel="noreferrer">
                            <AiFillGithub /> 
                            </a>
                             <a href="https://godwin-nj.github.io/robofriends-2" target="_blank" rel="noreferrer">
                            <AiOutlineLink /> 
                            </a>
                        </div>
                        </div>    
                    </div>
                </li>
                {/* end of project 3 */}
                {/* project 3  */}
                <li className="cardBuilt">
                    <div className="cardContent">
                        <div>
                        <h4>Face-Recognition App</h4>
                        <div>
                            <p>
                                Web App that is utilized to detect the face of humans.<br/>
                                Fully incoprated with a backend that uses authentication
                                for  both registration and login. <br/>
                                Register and login to experience this API
                            </p>
                        </div>
                        <ul className="tech-list">
                            <li>React-JS</li>
                            <li>Node-JS</li>
                            <li>Postgres SQL</li>
                            <li>Heroku</li>
                        </ul>
                        <div className="cardIcon">
                            <a href="https://github.com/Godwin-NJ/facerecognitionbrain" target="_blank" rel="noreferrer">
                            <AiFillGithub /> 
                            </a>
                             <a href="https://smart-brain-gnj.herokuapp.com/" target="_blank" rel="noreferrer">
                            <AiOutlineLink /> 
                            </a>
                        </div>
                        </div>    
                    </div>
                </li>
                {/* end of project 3 */}
                {/* project 4  */}
                <li className="cardBuilt">
                    <div className="cardContent">
                        <div>
                        <h4>React Calculator</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Voluptate impedit iure eos neque consequuntur magni nostrum 
                                praesentium quas obcaecati ab?praesentium quas obcaecati ab?
                                praesentium quas obcaecati ab? praesentium quas obcaecati ab?
                                Voluptate impedit iure eos neque consequuntur magni nostrum 
                                
                            </p>
                        </div>
                        <ul className="tech-list">
                            <li>React</li>
                            <li>JS</li>
                            <li>CSS</li>
                        </ul>
                        <div className="cardIcon">
                            <a href="https://github.com/Godwin-NJ/sci-calculator.git" target="_blank" rel="noreferrer">
                            <AiFillGithub /> 
                            </a>
                             <a href="https://godwin-nj.github.io/sci-calculator/" target="_blank" rel="noreferrer">
                            <AiOutlineLink /> 
                            </a>
                        </div>
                        </div>    
                    </div>
                </li>
                {/* end of project 4 */}
            </ul>
           </section> 
        </div>
     );
}
 
export default Project;