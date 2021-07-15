// import {  Card, CardText,CardTitle,CardActions} from 'react-mdl';
import { AiFillGithub,AiOutlineLink,AiOutlineFolder } from "react-icons/ai";

const Built = () => {
    return ( 
        <div className="cardLayout">
             <h5>Some things I've built recently</h5>
             <div className="houseDiv" style={{overflowY:"scroll",border:'1px solid black', height:"500px",padding:"20px"}}>
            <ul className="project-grid" >
                {/* project one  */}
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
                            <a href="#" target="_blank" rel="noreferrer">
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
                {/* end of project 3 */}
                {/* project 3  */}
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
            </div>
            <button>See More</button>
        </div>
     );
}
 
export default Built
