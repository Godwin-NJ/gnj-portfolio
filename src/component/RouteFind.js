import React from 'react'
import {Switch,Route} from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Article from './Article'




const RouteFind = () => {
    return ( 
       <Switch>
          <Route exact path="/" component={About}></Route>
           <Route path="/projects" component={Projects}></Route>
          <Route path="/articles" component={Article}></Route>
        </Switch>
     );
}
 
export default RouteFind;