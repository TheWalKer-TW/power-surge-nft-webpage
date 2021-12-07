import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


import "./Navbar.css"
import NavItems from './NavItems'
import SocialMedia from './SocialMedia'
import Metamask from "../../assets/logos/metamask-fox.svg"
import {init, handleMetaMask} from "../Metamask/Metamask"

const Navbar = ({ setPage }) => {

    const [metaMaskConnected, setMetaMaskConnected] = useState(false)
    const [isShown, setIsShown] = useState(false);

    init(setMetaMaskConnected)

    return (
        <nav className="navbar" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <div className="nav-sections">
                <div className='nav-links'>
                    {!metaMaskConnected &&
                        <li>
                            <img src={Metamask} alt='metamask-logo' className='nav-icon display' />
                            <button
                            className="cybr-btn display-none"
                            onClick={handleMetaMask}
                            >
                                Connect<span aria-hidden>_</span>
                                <span aria-hidden className="cybr-btn__glitch">Connect_</span>
                                <span aria-hidden className="cybr-btn__tag">R25</span>
                            </button>
                        </li>
                    }
                    <li id={"Home"}>
                        <FontAwesomeIcon icon={faHome} className='nav-icon display'></FontAwesomeIcon>
                        <Link
                            className="cybr-btn display-none"
                            to="/"
                            onClick={() => setPage(0)}
                        >
                            Home<span aria-hidden>_</span>
                            <span aria-hidden className="cybr-btn__glitch">Home_</span>
                            <span aria-hidden className="cybr-btn__tag">R25</span>
                        </Link>
                    </li>
                    {NavItems.navitems.map((navitem) => (
                        <li id={navitem.name}>
                            <FontAwesomeIcon icon={navitem.icon} className='nav-icon display'></FontAwesomeIcon>
                            <button
                            className="cybr-btn display-none"
                            onClick={() => setPage(navitem.id)}
                            >
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
