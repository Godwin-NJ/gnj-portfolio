// // import {  Card, CardText,CardTitle,CardActions} from 'react-mdl';
// import {
//     AiFillGithub,
//     AiOutlineLink,
//     AiOutlineFolder,
//     AiTwotoneTool,
//     AiOutlineSetting,
//   } from "react-icons/ai";
//   import { Link } from "react-router-dom";
//   import styled from "styled-components";
//   import ProjectCard from "../component/ProjectCard";
//   import SpotifyImage from "../images/spotify-1759471_1280.jpg";

//   const Built = () => {
//     return (
//       <Wrapper className="prjtTemp">
//         {/* <div className="cardLayout"> */}
//         <h6 className="spotlight-info">
//           Spotlight Articles & PROJECTS
//           {/* -<AiOutlineSetting /> */}
//           {/* <AiTwotoneTool /> BELOW */}
//         </h6>

//         <div>
//           <ul className="cardLayout">
//             {/* <ul className="project-grid"> */}
//             {/* <ProjectCard
//               title="Build a spotify connected App"
//               projectImage={SpotifyImage}
//               imageAlt={"spotify image"}
//               textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               Voluptate impedit iure eos neque consequuntur magni nostrum
//               praesentium quas obcaecati ab?praesentium quas obcaecati ab?
//               praesentium quas obcaecati ab? praesentium quas obcaecati
//               ab? Voluptate impedit iure eos neque consequuntur magni
//               nostrum"
//               projectUrlPath={"&"}
//               technologyUsed={[
//                 "React",
//                 "Vue",
//                 "Sass",
//                 "Animation",
//                 "c#",
//                 "sql",
//                 "sequel-orm",
//               ]}
//             /> */}
//             {/* project one  */}
//             {/* <li className="cardBuilt">
//               <div>
//                 <h4 className="prjtTitle">React Calculator</h4>
//                 <div className="prjtDesc">
//                   <p>
//                     A simple Digital Calculator .<br />
//                   </p>
//                   <ul className="tech-list">
//                     <li className="techList-li">React-JS</li>
//                     <li className="techList-li">JS</li>
//                     <li className="techList-li">CSS</li>
//                   </ul>
//                 </div>

//                 <div className="cardIcon">
//                   <a
//                     href="https://github.com/Godwin-NJ/sci-calculator.git"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiFillGithub />
//                   </a>
//                   <a
//                     href="https://godwin-nj.github.io/sci-calculator/"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <AiOutlineLink />
//                   </a>
//                 </div>
//               </div>
//             </li> */}

//             {/* end of preject 1 */}
//             {/* project two  */}
//             {/* <li className="cardBuilt">
//               <div className="cardContent">
//                 <div>
//                   <h4 className="prjtTitle">Robo-Friends</h4>
//                   <div className="prjtDesc">
//                     <p>Fetching Robo-Friends API with Fetch API + UI</p>

//                     <ul className="tech-list">
//                       <li className="techList-li">React-JS</li>
//                       <li className="techList-li">API</li>
//                       <li className="techList-li">CSS</li>
//                     </ul>
//                   </div>
//                   <div className="cardIcon">
//                     <a
//                       href="https://github.com/Godwin-NJ/robofriends-2"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <AiFillGithub />
//                     </a>
//                     <a
//                       href="https://godwin-nj.github.io/robofriends-2"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <AiOutlineLink />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </li> */}

//             {/* end of project 2 */}
//             {/* project 3  */}
//             {/* <li className="cardBuilt">
//               <div className="cardContent">
//                 <div>
//                   <h4 className="prjtTitle">Face-Recognition App</h4>
//                   <div className="prjtDesc">
//                     <p>Web App using A.I to detect the face position of images</p>

//                     <ul className="tech-list">
//                       <li className="techList-li">React-JS</li>
//                       <li className="techList-li">Node-JS</li>
//                       <li className="techList-li">Postgres SQL</li>
//                       <li className="techList-li">Heroku</li>
//                     </ul>
//                   </div>
//                   <div className="cardIcon">
//                     <a
//                       href="https://github.com/Godwin-NJ/facerecognitionbrain"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <AiFillGithub />
//                     </a>
//                     <a
//                       href="https://godwin-nj.github.io/robofriends-2"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <AiOutlineLink />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </li> */}
//             {/* redeploy this  this a major project*/}

//             {/* end of project 3 */}
//             {/* project 4  */}
//             {/* <li className="cardBuilt">
//               <div className="cardContent">
//                 <div>
//                   <h4>React Calculator</h4>
//                   <div>
//                     <p>
//                       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                       Voluptate impedit iure eos neque consequuntur magni nostrum
//                       praesentium quas obcaecati ab?praesentium quas obcaecati ab?
//                       praesentium quas obcaecati ab? praesentium quas obcaecati
//                       ab? Voluptate impedit iure eos neque consequuntur magni
//                       nostrum
//                     </p>
//                   </div>
//                   <ul className="tech-list">
//                     <li>React</li>
//                     <li>JS</li>
//                     <li>CSS</li>
//                   </ul>
//                   <div className="cardIcon">
//                     <a
//                       href="https://github.com/Godwin-NJ/sci-calculator.git"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <AiFillGithub />
//                     </a>
//                     <a
//                       href="https://godwin-nj.github.io/sci-calculator/"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <AiOutlineLink />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </li> */}
//             {/* end of project 4 */}
//           </ul>
//         </div>
//         {/* <button style={{marginTop:'5%'}} >See More</button> */}
//         <button className="btnProject">
//           <Link to="/projects" style={{ textDecoration: "none", color: "white" }}>
//             See More Projects
//           </Link>
//         </button>
//       </Wrapper>
//     );
//   };

//   export default Built;

//   const Wrapper = styled.section`
//     /* margin-top: 20px; */
//     height: 100%;
//     .prjtTemp {
//     }
//     .spotlight-info {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       text-transform: uppercase;
//       font-size: 20px;
//     }
//   `;
