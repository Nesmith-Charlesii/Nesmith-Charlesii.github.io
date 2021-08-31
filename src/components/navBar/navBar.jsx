import React from 'react';
import {Link} from 'react-scroll';
import './navbar.css';

const NavBar = () => {
    return (
        <div className="navbar-links">
            <ul>
                <li><Link to="bio" smooth={true}>Bio</Link></li>
                <li><Link to="tech" smooth={true}>Tech/Stacks</Link></li>
                {/* <li></li> */}
                <li><Link to="projects" smooth={true}>Projects</Link></li>
                <li><Link to="contact" smooth={true}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;