import styled from "styled-components";
import TechStackIconInfo from "../component/TechStackIconInfo";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiNodejsSmall,
  DiMsqlServer,
} from "react-icons/di";
import { SiJavascript, SiNestjs } from "react-icons/si";
import { FaDatabase, FaBoltLightning } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaReact, FaLightbulb } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { IoLogoDocker } from "react-icons/io5";
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";

const About = () => {
  return (
    <Wrapper>
      {/* Intro about me  */}
      <main className="aboutHeader">
        {/* <section className="about"></section> */}

        {/* About me  section*/}
        <section className="profileAbout">
          <h4 style={{ fontSize: "20px" }}>About Me</h4>
          <p style={{ fontSize: "18px", opacity: "0.7" }}>
            <ul>
              <li>
                <FaBoltLightning
                  style={{ color: "red", fontSize: "20px", paddingTop: "5px" }}
                />
                Professional software engineer, developing and optimizing
                solutions that makes a real difference in peoples life.
              </li>
              <li>
                <FaBoltLightning
                  style={{ color: "red", fontSize: "20px", paddingTop: "5px" }}
                />
                Microsoft Navision Technical consultant with credible industry
                experience
              </li>
              <li>
                {" "}
                <FaBoltLightning
                  style={{ color: "red", fontSize: "20px", paddingTop: "5px" }}
                />
                Technical writer
              </li>
            </ul>
          </p>
          <br />

          <div className="stackInfo">
            <section>
              <img
                src="/yoggie-programmer.png"
                alt="dev-image"
                width="400"
                height="400"
              />
            </section>

            <section className="iconSec">
              <h4>Tech Stack</h4>
              <div className="iconTechInfo">
                <TechStackIconInfo icon={<DiHtml5 />} techInfo={"html-5"} />
                <TechStackIconInfo icon={<DiCss3 />} techInfo={"css3"} />
                <TechStackIconInfo icon={<DiSass />} techInfo={"sass"} />
                {/* <TechStackIconInfo icon={<DiSass />} techInfo={"sass"} /> */}
                <TechStackIconInfo
                  icon={<SiJavascript />}
                  techInfo={"JavaScript"}
                />
                <TechStackIconInfo icon={<TbBrandCSharp />} techInfo={"C#"} />
                <TechStackIconInfo icon={<FaReact />} techInfo={"reactjs"} />
                <TechStackIconInfo
                  icon={<AiOutlineDotNet />}
                  techInfo={"dotnet"}
                />
                <TechStackIconInfo
                  icon={<DiNodejsSmall />}
                  techInfo={"nodejs"}
                />
                <TechStackIconInfo
                  icon={<SiExpress />}
                  techInfo={"expressjs"}
                />
                <TechStackIconInfo icon={<SiNestjs />} techInfo={"nestjs"} />
                <TechStackIconInfo icon={<DiMsqlServer />} techInfo={"MsSQL"} />
                <TechStackIconInfo
                  icon={<FaDatabase />}
                  techInfo={"sql-database"}
                />
                <TechStackIconInfo icon={<VscAzure />} techInfo={"azure"} />
                <TechStackIconInfo
                  icon={<IoLogoDocker />}
                  techInfo={"docker"}
                />
              </div>
            </section>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  .profileAbout {
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-top: 10px;
  }

  .stackInfo {
    display: flex;
    flex-direction: row;
    gap: 70px;
  }
  .iconSec {
    margin-top: 3%;
    /* width: 100%; */
  }
  .iconTechInfo {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    /* gap: -10px; */
  }

  @media (max-width: 1024px) {
    .stackInfo {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
    .iconSec {
      margin-top: -3%;
      padding: 30px;
    }
    .iconTechInfo {
      width: 100%;
      /* gap: -10px; */
    }
  }
`;
