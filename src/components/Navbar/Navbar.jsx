import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import "./Navbar.css"
import NavItems from './NavItems'
import SocialMedia from './SocialMedia'
import Metamask from "../../assets/logos/metamask-fox.svg"


const Navbar = () => {

    const [metaMaskConnected, setMetaMaskConnected] = useState(false)
    const [isShown, setIsShown] = useState(false);

    return (
        <nav className="navbar" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <div className="nav-sections">
                <div className='nav-links'>
                    {!metaMaskConnected && 
                        <li>
                            <img src={Metamask} alt='metamask-logo' className='nav-icon display' />
                            <button className="cybr-btn display-none">
                                Connect<span aria-hidden>_</span>
                                <span aria-hidden className="cybr-btn__glitch">Connect_</span>
                                <span aria-hidden className="cybr-btn__tag">R25</span>
                            </button>
                        </li>}
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
                        <a id={mediaitem.name} href={mediaitem.url} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={mediaitem.icon} className='nav-icon'></FontAwesomeIcon>
                            <span className='display-none'>{mediaitem.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
