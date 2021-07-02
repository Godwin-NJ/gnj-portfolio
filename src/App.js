import React,{useState} from 'react'
import NavHome from './component/NavHome'
import RouteFind  from './component/RouteFind';
import Contact from '../src/component/Contact'

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
      < Contact />
    </div>
  );
}

export default App;
