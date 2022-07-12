import React, { useState } from 'react'
import headerStyle from "./header.module.css";
// import {GiHamburgerMenu} from 'react-icons/gi';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <header>
            <h1>Recipe App</h1>
            {/* <span>
                <GiHamburgerMenu
                    onClick={() => setIsOpen(true)}
                    size={30}
                    style={{ color: '#49a6e9' }} />
            </span> */}
            <ul className={headerStyle["nav"]}>
                <li><NavLink to="/home" onClick={()=> setIsOpen(false)}>Recipes</NavLink></li>
                <li><NavLink to="/about" onClick={()=> setIsOpen(false)}>About</NavLink></li>
                <li><NavLink to="/contact" onClick={()=> setIsOpen(false)}>Contact</NavLink></li>
                <li><Link to='/' onClick={() => {setIsOpen(false);sessionStorage.clear()}}>Logout</Link></li>
            </ul>
        </header>
    )
}

export default Header