import { AiFillLinkedin,AiOutlineGithub, AiOutlineMail} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";
import AnimateText from './AnimateText'
// import Contact from './Contact'
import BuiltRecently from './BuiltRecent'
// import {Route,Switch} from 'react-router-dom'

const About = () => {
    return ( 
    <div >
                {/* Into about me  */}
        <main >
            <section className="about">
                <div className="about1">
                    <h5 className="big-heading">Hi, I'm Godwin Amadi</h5>
                    <h4 className="big-heading">Web Developer</h4>
                    <span>
                         < AnimateText />
                    </span>
                </div>
                <div className="img1">
                      <IconContext.Provider value={{ className: 'iconSize' }}>
                    <div className="socials">
                        <a className="socialIcon" href='/' alt='linkedin' target='_blank'>< AiFillLinkedin /></a>
                        <a className="socialIcon" href='/' alt='github' target='_blank'>< AiOutlineGithub /></a>
                        <a className="socialIcon" href='/' alt='twitter' target='_blank'>< FaTwitter /></a>
                        <a className="socialIcon" href='/' alt='gmail' target='_blank'>< AiOutlineMail /></a>
                    </div>
                    </IconContext.Provider>
                     <img className="circular-image" 
                        src="https://ltkdigital.com/img/avatar.svg" 
                        alt="godwin-amadi"/>
                </div>
            </section>

                {/* About me  section*/}
            <section className="profileAbout">
                <h4>About Me</h4>
                <p>
                    Hello! I am Godwin , a web developer passionate about providing solutions 
                    for things that live on the internet. My interest in web developement started 
                    back in 2017 when I coded through a freecode camp tutorial using HTML and CSS. 
                </p>
                <p>
                    I love providing web solutions through learning consistently, solving problems
                    and building web apps/sites.
                    I'm very adaptable to new technology, a good communicator and a team player.
                    {/* I've been fortunate to grow through the years , resulting from consistently
                    learning, building web apps/sites , solving problems and majorly because of my 
                    passion and enthusiasm about programming as it relates to value addition. 
                    I'm very adaptable to new technology, a good communicator and a team player.   */}
                </p>
                <p>
                    My focus these days is providing database administraor support, 
                    building accessible and inclusive products with user 
                    experinece focus for businesses. 
                </p>
            </section>

             {/* skill section */}
            <section className="skill" >
                <h4>Skills || Technologies </h4>
                <IconContext.Provider value={{ className: 'skillIcon' }}>
                <div className="iconFlex">
                    <ul className="skillIcon2">
                        <li > JavaScript (ES6+) </li>
                        <li>React JS </li>
                        <li>GIT </li>
                        <li> Node JS </li>
                        <li> CSS </li>
                        <li>Ms Dynamics</li>
                        <li> Wordpress </li>
                        
                    </ul>
                </div>
                </IconContext.Provider>
            </section>
            </main> 
                {/* <Switch>
                <Route exact path="/contact" component={Contact}></Route>
                </Switch> */}
                < BuiltRecently />
                {/* < Contact /> */}
                
    </div>
     );
}
 
export default About;
