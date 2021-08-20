import React from 'react'
import { AiOutlineAlignLeft } from "react-icons/ai";
import {Link} from 'react-router-dom'
// import { Cross as Hamburger } from 'hamburger-react'

const NavHome = ({navToggle, isNavOpen}) => {
    return ( 
        <div className="navClosure">
            <header className="nav">
                <div><Link className="navGNJ navAnker navbar-brand" to="/about">GNJ</Link></div>
                <button className='icon' onClick={navToggle}>
                <a href="/"><AiOutlineAlignLeft style={{color:"black"}}/></a>
                </button>
                    <nav className={`navInfo ${ isNavOpen ?'' : 'showNav'}`}>
                        <Link className="navAnker navbar-brand" to="/about"></Link>
                       <Link className="navAnker" to='/projects'>Projects</Link>
                       {/* <a className="navAnker" href='/#'>Contact</a> */}
                       <a className="navAnker" target="_blank" rel="noreferrer" 
                         href='https://drive.google.com/file/d/1gUS08M1Yj0nrHKK8cIMAqNCY8HZyzQ7n/view?usp=sharing'>
                           Resume
                        </a>
                       <Link className="navAnker" to='/articles'>Articles</Link>
                    </nav>
            </header>
        </div>
     );
}
 
export default NavHome;