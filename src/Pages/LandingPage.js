import React from "react";
import styled from "styled-components";
import gnjImage from "../images/gnj-pic.jpg";
import { FaTwitter } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  // AiFillMail,
  // AiFillTwitterCircle,
} from "react-icons/ai";
import BuiltRecently from "./BuiltRecent";
import SocialIcon from "../component/SocialIcon";

const LandingPage = () => {
  return (
    <Wrapper>
      <section className="briefAbout">
        <div>
          <img
            className="circular-image"
            // src="https://ltkdigital.com/img/avatar.svg"
            src={gnjImage}
            alt="godwin-amadi"
          />
        </div>

        <div className="about1">
          <h4 className="big-heading">Hi, I'm Godwin Amadi</h4>
          <p className="big-heading">Software Developer || Technical Writer</p>

          <p className="description">
            I build solutions for Individuals and Enterprise.
          </p>
          <p className="actionAbout">
            <span>Build-</span>
            <span>Improve-</span>
            <span>Web-</span>
            <span>API-</span>
            <span>Write</span>
          </p>
          <div className="socialContact">
            <SocialIcon
              href="http://twitter.com/godwin_nj"
              alt="twitter"
              ReactIcon={FaTwitter}
              iconColor="blue"
            />
            <SocialIcon
              href="https://github.com/Godwin-NJ"
              alt="Github"
              ReactIcon={AiFillGithub}
              // iconColor=""
            />
            <SocialIcon
              href="https://www.linkedin.com/in/amadigodwin7/"
              alt="LinkedIn"
              ReactIcon={AiFillLinkedin}
              iconColor="blue"
            />
          </div>
          {/* <div className="borderIcon">
            <a
              className="socialIcon"
              href="http://twitter.com/godwin_nj"
              alt="twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter
              // style={{ position: "absolute", top: "57.3%", left: "45%" }}
              />
              <span className="twiiterFollow">Follow</span>
            </a>
          </div> */}
        </div>
      </section>
      <BuiltRecently />
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  .briefAbout {
    background-color: #262525;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: -5%; */
    /* padding-top: 5%; */
    /* justify-content: center; */
  }
  .circular-image {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    /* margin-left: 10%; */
  }
  .about1 {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    text-align: center;
    /* padding: 5vw 3vw 6vw; */

    h4 {
      /* font-size: 25px; */
      font-size: 30px;
    }
    .description {
      /* width: 70%; */
      opacity: 0.8;
      /* font-size: 20px; */
    }
    .actionAbout {
      display: flex;
      justify-content: center;
      /* opacity: 1; */
      text-transform: uppercase;
      font-size: 13px;
      opacity: 0.9;
      span {
        color: #00ffff;
      }
      /* color: #fff; */
    }
  }

  .twiiterFollow {
    font-size: 12px;
    /* margin-top: -3%; */
  }
  .socialContact {
    display: flex;
  }
  @media (max-width: 480px) {
    .about1 {
      h4 {
        font-size: 25px;
      }
    }
  }
`;
