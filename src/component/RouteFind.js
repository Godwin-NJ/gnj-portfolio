import React from 'react'
// import { render } from "react-dom";
// import {Switch,Route,Redirect} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import Projects from './Projects'
import Article from './Article'
import About from './About'



const RouteFind = ({isUserAuthenticated}) => {
    return ( 
       <Switch>
          <Route exact path="/" 
          //  render={() => {
          //           return (
          //             isUserAuthenticated ?
          //             <Redirect to="/about" /> :
          //             <Redirect to="/about" /> 
          //           )
          //       }
          //     }
                component={About}>
          </Route>
          <Route Redirect path="/about" component={About}></Route>
          <Route  path="/projects" component={Projects}></Route>
          <Route  path="/articles" component={Article}></Route>
        </Switch>
     );
}
 
export default RouteFind;