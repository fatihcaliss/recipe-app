import React from 'react';
import headerStyle from "./header.module.css";
import { NavLink,Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Recipe App</h1>
            <ul className={headerStyle["nav"]}>
                <li><NavLink to="/home">Recipes</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><Link to='/' onClick={()=>  sessionStorage.clear()}>Logout</Link></li>
            </ul>
        </header>
    )
}

export default Header