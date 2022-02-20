import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";
// import AnimateText from './AnimateText'
// import Contact from './Contact'
import BuiltRecently from "./BuiltRecent";
// import {Route,Switch} from 'react-router-dom'
import gnjImage from "../images/gnj-pic.jpg";

const About = () => {
  return (
    <div>
      {/* Into about me  */}
      <main>
        <section className="about">
          <div className="about1">
            <h4 className="big-heading">Hi, I'm Godwin Amadi</h4>
            <h6>
              A software Developer that build web applications and provide
              enterprise solutions for businesses.
            </h6>
          </div>
          <div className="img1">
            <IconContext.Provider value={{ className: "iconSize" }}>
              <div>
                <a
                  className="socialIcon"
                  href="https://www.linkedin.com/in/amadigodwin7/"
                  alt="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="socialIcon"
                  href="https://github.com/Godwin-NJ"
                  alt="github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  className="socialIcon"
                  href="http://twitter.com/godwin_nj"
                  alt="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  className="socialIcon"
                  href="https://mail.google.com/mail/u/0/?fs=1&to=amadigodwin7@gmail.com&su=SUBJECT&body=BODY&tf=cm"
                  alt="gmail"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineMail />
                </a>
              </div>
            </IconContext.Provider>
            <div>
              <img
                className="circular-image"
                // src="https://ltkdigital.com/img/avatar.svg"
                src={gnjImage}
                alt="godwin-amadi"
              />
            </div>
          </div>
        </section>

        {/* About me  section*/}
        <section className="profileAbout">
          <h4>About Me</h4>
          <p>
            I am web developer passionate about providing solutions for things
            that live on the internet. My interest in software devlopment was
            innate due to my interest in developing dynamic solutions for people
            without constrain of environment
          </p>
          <p>
            I love providing web solutions through learning consistently,
            solving problems and building web apps/sites. I'm very adaptable to
            new technology, a good communicator and a team player.
          </p>
          <p>
            My focus these days is providing database administraor support,
            building accessible and inclusive products with user experinece
            focus for businesses.
          </p>
        </section>

        {/* skill section */}
        <section className="skill">
          <h4>Skills || Technologies </h4>
          <IconContext.Provider value={{ className: "skillIcon" }}>
            <div className="iconFlex">
              <ul className="skillIcon2">
                <li> JavaScript(ES6+) </li>
                <li>React JS </li>
                <li>GIT </li>
                <li> Node JS </li>
                <li> CSS </li>
                <li>Ms Dynamics</li>
                <li> Wordpress </li>
                <li> ERP </li>
                <li> Azuri </li>
              </ul>
            </div>
          </IconContext.Provider>
        </section>
      </main>
      {/* <Switch>
                <Route exact path="/contact" component={Contact}></Route>
                </Switch> */}
      <BuiltRecently />
      {/* < Contact /> */}
    </div>
  );
};

export default About;
