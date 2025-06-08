import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";
import styled from "styled-components";
import SocialIcon from "../component/SocialIcon";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <article className="footerStyle">
          <div className="footerContainer">
            <section className="userFooter-info">
              <p>@ Reach Out to me !</p>
            </section>
            <section className="footerIcon">
              <span>
                <SocialIcon
                  href="https://github.com/Godwin-NJ"
                  alt="github"
                  ReactIcon={AiFillGithub}
                />
              </span>
              <span>
                <SocialIcon
                  href="https://www.linkedin.com/in/amadigodwin7/"
                  alt="linkedIn"
                  ReactIcon={AiFillLinkedin}
                />
              </span>
              <span>
                <SocialIcon
                  href="http://twitter.com/godwin_nj"
                  alt="Twitter"
                  ReactIcon={AiFillTwitterCircle}
                />
              </span>
              <span className="emailAdd">
                <p>amadigodwin7@gmail.com</p>
              </span>
            </section>
          </div>
        </article>
      </footer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  footer {
    background-color: #262a2e;
    color: #f0f2f5;
    width: 100%;
    /* max-width: 100rem; */
    position: absolute;
    padding: 10px;
    /* left: 0px; */
    bottom: 0px;
    /* margin-top: 20%; */
  }
  .footerContainer {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 10px;
    .userFooter-info {
      opacity: 0.7;
      &:hover {
        opacity: 0.9;
        cursor: pointer;
      }
    }

    .footerIcon {
      display: flex;
      flex-direction: row;
      gap: 15px;
      font-size: 25px;
      margin-top: -5px;
      a {
        opacity: 0.7;
        &:hover {
          cursor: pointer;
          opacity: 0.9;
        }
      }
      .emailAdd {
        font-size: 20px;
        opacity: 0.9;
      }
    }
  }
`;
