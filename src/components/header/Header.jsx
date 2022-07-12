import React, { useState } from 'react'
import headerStyle from "./header.module.css";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <header>
            <NavLink to="/home" ><h1>Recipe App</h1> </NavLink>
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



