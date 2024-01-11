import React from "react";
// import { render } from "react-dom";
// import {Switch,Route,Redirect} from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import Projects from "../Pages/Projects";
import Article from "../Pages/Article";
import About from "../Pages/About";
import LandingPage from "../Pages/LandingPage";

const RouteFind = ({ isUserAuthenticated }) => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      {/* <Route exact path="/about" component={About}></Route> */}
      <Route path="/about" component={About}></Route>
      <Route path="/projects" component={Projects}></Route>
      <Route path="/articles" component={Article}></Route>
    </Switch>
  );
};

export default RouteFind;
