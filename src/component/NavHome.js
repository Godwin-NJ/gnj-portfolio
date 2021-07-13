import React from 'react'
import { AiOutlineAlignLeft } from "react-icons/ai";
import {Link} from 'react-router-dom'
import { Cross as Hamburger } from 'hamburger-react'

const NavHome = ({navToggle, isNavOpen}) => {
    return ( 
        <div className="navClosure">
            <nav className="nav">
                <div><Link className="navAnker navbar-brand" to="/">GNJ</Link></div>
                <button className='icon' onClick={navToggle}>
                <a href="/"><AiOutlineAlignLeft style={{color:"black"}}/></a>
                </button>
                <div>
                    <nav className={`navInfo ${ isNavOpen ?'' : 'showNav'}`}>
                       <Link className="navAnker" to='/projects'>Projects</Link>
                       <a className="navAnker" href='/#'>Contact</a>
                       <a className="navAnker" href='/#'>Resume</a>
                       <Link className="navAnker" to='/articles'>Articles</Link>
                    </nav>
                </div>
            </nav>
        </div>
     );
}
 
export default NavHome;