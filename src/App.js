import React, { useState } from "react";
import NavHome from "./Pages/NavHome";
import RouteFind from "./component/RouteFind";
import Footer from "./Pages/Footer";
// import BuildtRecently from "../src/Pages/BuiltRecent";
import styled from "styled-components";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const[isUserAuthenticated,setIsUserAuthenticated] = useState(true)

  const navToggle = (e) => {
    e.preventDefault();
    setIsNavOpen(!isNavOpen);
    // console.log('clicked')
  };

  return (
    <Wrapper>
      <section className="App">
        <NavHome navToggle={navToggle} isNavOpen={isNavOpen} />

        {/* <RouteFind isUserAuthenticated={isUserAuthenticated}/> */}
        <div className="content pageDistanceFromTopMenu">
          <RouteFind />
        </div>

        <Footer />
      </section>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.section`
  .App {
    min-height: 100vh;
    /* height: auto !important; */
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .content {
    padding-top: 54px;
    position: relative;
    padding-bottom: 10%;
    margin-bottom: 5%;
  }

  @media (max-width: 480px) {
    .content {
      padding-bottom: 15%;
      margin-bottom: 10%;
    }
  }
`;
