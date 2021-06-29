import React,{useState} from 'react'
import NavHome from './component/NavHome'
// import About from './component/About'
import RouteFind  from './component/RouteFind';

function App() {
  const[isNavOpen, setIsNavOpen] = useState(false);

  const navToggle = (e) => {
    e.preventDefault()
    setIsNavOpen(!isNavOpen)
    // console.log('clicked')
  }


  return (
    <div className="App">
      <NavHome navToggle={navToggle} isNavOpen={isNavOpen} />
      <RouteFind />
      
    </div>
  );
}

export default App;
