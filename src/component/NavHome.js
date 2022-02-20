import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { Cross as Hamburger } from 'hamburger-react'

const NavHome = ({ navToggle, isNavOpen }) => {
  return (
    <main className="relativeToNav">
      <div className="navClosure">
        <header className="nav">
          <div>
            <Link className="navGNJ navAnker navbar-brand" to="/about">
              GNJ
            </Link>
          </div>
          <button className="icon" onClick={navToggle}>
            <a href="/" style={{ color: "#fffcfc", fontWeigth: "300" }}>
              <AiOutlineAlignLeft />
            </a>
          </button>
          <nav className={`${isNavOpen ? "navInfo showNav" : "navInfo"}`}>
            {/* <Link className="navAnker navbar-brand" to="/about"></Link> */}
            <Link className="navAnker" to="/projects">
              Projects
            </Link>
            {/* <a className="navAnker" href='/#'>Contact</a> */}
            <a
              className="navAnker"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/16HoRYdx2_rsxQiUPqppz-6TX_EF5m0Wh/view?usp=sharing"
            >
              Resume
            </a>
            <Link className="navAnker" to="/articles">
              Articles
            </Link>
          </nav>
        </header>
      </div>
    </main>
  );
};

export default NavHome;
