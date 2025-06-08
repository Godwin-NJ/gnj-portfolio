import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Cross as Hamburger } from 'hamburger-react'

const NavHome = ({ navToggle, isNavOpen }) => {
  return (
    <Wrapper>
      <main className="relativeToNav">
        <div className="navClosure">
          <header className="nav">
            <div>
              <Link className="navGNJ  navbar-brand" to="/">
                Godwin Amadi
              </Link>
            </div>
            {/*Start --> Hamburger icon for smaller screen */}
            <button className="icon" onClick={navToggle}>
              <a href="/" style={{ color: "#fffcfc", fontWeigth: "300" }}>
                <AiOutlineAlignLeft />
              </a>
            </button>
            {/*End --> Hamburger icon for smaller screen */}
            <nav className={`${isNavOpen ? "navInfo showNav" : "navInfo"}`}>
              {/* <Link className="navAnker navbar-brand" to="/about"></Link> */}
              <Link className="navAnker" to="/projects">
                Projects
              </Link>
              {/* <a className="navAnker" href='/#'>Contact</a> */}

              <Link className="navAnker" to="/articles">
                Blog
              </Link>
              <Link className="navAnker" to="/about">
                About
              </Link>
              {/* <a
                className="navAnker"
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/16HoRYdx2_rsxQiUPqppz-6TX_EF5m0Wh/view?usp=sharing"
              >
                Resume
              </a> */}

              {/* <Link className="navAnker" to="/contact">
                Contact
              </Link> */}
            </nav>
          </header>
        </div>
      </main>
    </Wrapper>
  );
};

export default NavHome;

const Wrapper = styled.section`
  .navbar-brand {
    margin: 8px;
    font-weight: 700;
  }
  main.relativeToNav {
    position: relative;
    min-height: 5vh;
    background: black;
    position: fixed;
    top: 0;
    z-index: 100;
  }

  /* main.relativeToNav {
  position: relative;
  min-height: 5vh;
} */
  .navClosure {
    /* color: white !important; */
    background-color: #262525;
    /* width: 100%; */
    width: 100vw;
    position: absolute;
    padding: 10px;
    /* margin-top: 0; */
  }
  .nav {
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    padding: 5px;
    padding-left: 30px;
    Link.navGNJ {
      margin-left: 4%;
    }
  }
  .navAnker {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    opacity: 0.8;
    font-size: 14px;
    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }

  .navInfo {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    a {
      /* transition: opacity 0.35s ease-in-out; */
    }
  }

  @media (min-width: 768px) {
    .navInfo {
      /* height: auto !important; */
      overflow: visible;
      display: flex;
      flex-direction: row;
      gap: 15px;
      margin-left: 20px;
      margin-top: 0.3%;
      /* justify-content: space-evenly; */
      /* padding: 5px; */
    }
  }

  @media (min-width: 768px) {
    .navAnker {
      /* margin-top: -28px; */
    }
  }
`;
