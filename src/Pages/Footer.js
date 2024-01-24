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
          {/* <h4>
            <BiCaretDown />{" "}
          </h4> */}
          <div className="footerContainer">
            <section className="userFooter-info">
              <p>
                @ {new Date().getFullYear()} Godwin Amadi
                {/* @ 2021 Designed & built by Godwin Amadi */}
              </p>
              {/* <p>amadigodwin7@gmail.com</p> */}
            </section>
            <section className="footerIcon">
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
              {/* <span>
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&to=amadigodwin7@gmail.com&su=SUBJECT&body=BODY&tf=cm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillMail />
                </a>
              </span> */}
              <span>
                <a
                  href="http://twitter.com/godwin_nj"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillTwitterCircle />
                </a>
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
    justify-content: space-around;
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
      a {
        opacity: 0.7;
        &:hover {
          cursor: pointer;
          opacity: 0.9;
        }
      }
    }
  }
`;
