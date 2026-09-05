import React from "react";
import styled from "styled-components";
import gnjImage from "../images/portfolio.jpeg";
import { FaTwitter } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  // AiFillTwitterCircle,
} from "react-icons/ai";
import BuiltRecently from "./BuiltRecent";
import SocialIcon from "../component/SocialIcon";

const LandingPage = () => {
  return (
    <Wrapper>
      <section className="landingPage">
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
            <h4 className="big-heading">Godwin Amadi</h4>
            <p className="my-header">
              Software Engineer, Technical Writer and Erp Specialist.
            </p>
            <span className="description">
              <AiFillMail
                // size={21}
                style={{ opacity: "0.8" }}
                className="mail-icon"
              />
              <p>amadigodwin7@gmail.com</p>
            </span>

            <div className="socialContact">
              <SocialIcon
                href="http://twitter.com/godwin_nj"
                alt="twitter"
                ReactIcon={FaTwitter}
                iconColor="black"
              />
              <SocialIcon
                href="https://github.com/Godwin-NJ"
                alt="Github"
                ReactIcon={AiFillGithub}
                iconColor="black"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/amadigodwin7/"
                alt="LinkedIn"
                ReactIcon={AiFillLinkedin}
                iconColor="black"
              />
            </div>
          </div>
        </section>

        <p className="moreInfo">
          I am a lead software Engineer at iTAP solutions, a remote-first
          company based in Nigeria. I have a passion for problem solving, and a
          relentless drive for continuous improvement which I apply in team &
          technical leadership.
          <br />I also provide software development services, technical writing,
          mentorship and consulting services to individuals and organizations. I
          am always open to new opportunities and collaborations. Feel free to
          reach out to me via email or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/amadigodwin7/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {" "}
            LinkedIn{" "}
          </a>{" "}
          .
        </p>
      </section>
      <BuiltRecently />
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  /* max-width: 100%; */
  .landingPage {
    /* width: 70%; */
    /* display: flex; */
    /* flex-direction: column; */
    .moreInfo {
      width: 70%;
      margin: 0 auto;
      font-size: 19px;
      line-height: 1.5;
      text-align: center;
      /* margin-top: 20px; */

      /* padding: 20px; */
    }
    /* align-items: center; */
    /* justify-content: center; */
    /* text-align: center; */
  }
  .briefAbout {
    /* background-color: #262525; */
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    /* margin-top: -5%; */
    padding-top: 1%;
    justify-content: center;
  }
  .circular-image {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    /* margin-left: 10%; */
  }
  .about1 {
    /* color: #fff; */
    color: #000;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 10px;
    /* text-align: center; */
    /* padding: 5vw 3vw 6vw; */

    h4 {
      /* font-size: 25px; */
      font-size: 35px;
      font-weight: 500;
    }
    .my-header {
      font-size: 19px;
      font-weight: 400;
      opacity: 0.8;
    }
    .description {
      display: flex;
      gap: 10px;
      /* width: 70%; */
      opacity: 0.8;
      /* font-size: 20px; */
      .mail-icon {
        font-size: 21px;
      }
    }
    .actionAbout {
      display: flex;
      justify-content: center;
      /* opacity: 1; */
      text-transform: uppercase;
      font-size: 13px;
      opacity: 0.9;
      span {
        color: #000;
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
        font-size: 20px;
        font-weight: 500;
      }
      .my-header {
        font-size: 14px;
        font-weight: 70;
        /* opacity: 0.75; */
      }
      .description {
        font-size: 13px;
        .mail-icon {
          font-size: 18px;
        }
      }
    }
    .circular-image {
      height: 100px;
      width: 100px;
      /* border-radius: 50%; */
      /* margin-left: 10%; */
    }

    .landingPage {
      .moreInfo {
        width: 100%;
        /* margin: 0 auto; */
        font-size: 17px;
        line-height: 1.3;
        padding: 10px;
        /* text-align: center; */
      }
    }
  }
`;
