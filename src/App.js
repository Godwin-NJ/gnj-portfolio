import React,{useState} from 'react'
import NavHome from './component/NavHome'
import RouteFind  from './component/RouteFind';
import Contact from '../src/component/Contact'

function App() {
  const[isNavOpen, setIsNavOpen] = useState(false);
  const[isUserAuthenticated,setIsUserAuthenticated] = useState(true)

  const navToggle = (e) => {
    e.preventDefault()
    setIsNavOpen(!isNavOpen)
    // console.log('clicked')
  }


  return (
    <div className="App">
      <NavHome navToggle={navToggle} isNavOpen={isNavOpen} />
      <RouteFind isUserAuthenticated={isUserAuthenticated}/>
      < Contact />
    </div>
  );
}

export default App;
