import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <article className="footerStyle">
          <h4>
            <BiCaretDown />{" "}
          </h4>
          <div className="footerIcon">
            <span>
              <a
                href="https://github.com/Godwin-NJ"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/amadigodwin7/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </span>
            <span>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=amadigodwin7@gmail.com&su=SUBJECT&body=BODY&tf=cm"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillMail />
              </a>
            </span>
            <span>
              <a
                href="http://twitter.com/godwin_nj"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
            </span>
          </div>
          <p>amadigodwin7@gmail.com</p>
          <h5>Lagos, Nigeria </h5>
          <p>@ {new Date().getFullYear()} Designed & built by Godwin Amadi</p>
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
    left: 0px;
    bottom: 0px;
    /* margin-top: 20%; */
  }
  /* .footerIcon {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 25%;
    font-size: 20px;
    margin: 0 auto;
  } */
  /* .footerIcon a {
    text-decoration: none;
    color: inherit;
    font-size: x-large;
    padding: 10px;
  } */
  /* .footerStyle {
    text-align: center;
  }
  .footerStyle > p {
    width: 350px;
    margin: 0 auto;
  } */
`;
