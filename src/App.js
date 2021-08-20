import React,{useState} from 'react'
import NavHome from './component/NavHome'
import RouteFind  from './component/RouteFind';
import Footer from '../src/component/Contact'

function App() {
  const[isNavOpen, setIsNavOpen] = useState(false);
  // const[isUserAuthenticated,setIsUserAuthenticated] = useState(true)

  const navToggle = (e) => {
    e.preventDefault()
    setIsNavOpen(!isNavOpen)
    // console.log('clicked')
  }


  return (
    <div className="App">
      <NavHome navToggle={navToggle} isNavOpen={isNavOpen} />
      {/* <RouteFind isUserAuthenticated={isUserAuthenticated}/> */}
      < RouteFind />
      < Footer />
    </div>
  );
}

export default App;
