import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import "./Navbar.css"
import NavItems from './NavItems'
import SocialMedia from './SocialMedia'


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-sections">
                <div className='nav-links'>
                    {NavItems.navitems.map((navitem) => (
                        <li id={navitem.name}>
                            <FontAwesomeIcon icon={navitem.icon} className='nav-icon display'></FontAwesomeIcon>
                            <button className="cybr-btn display-none">
                                {navitem.name}<span aria-hidden>_</span>
                                <span aria-hidden className="cybr-btn__glitch">{navitem.name}_</span>
                                <span aria-hidden className="cybr-btn__tag">R25</span>
                            </button>
                        </li>
                    ))}
                </div>
                <div className='nav-social-media'>
                    {SocialMedia.socialmedia.map((mediaitem) => (
                        <li id={mediaitem.name}>
                            <a href={mediaitem.url} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={mediaitem.icon} className='nav-icon'></FontAwesomeIcon>
                                <span className='display-none'>{mediaitem.name}</span>
                            </a>
                        </li>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
