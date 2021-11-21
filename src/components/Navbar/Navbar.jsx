import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import "./Navbar.css"
import NavItems from './NavItems'
import SocialMedia from './SocialMedia'
import Metamask from "../../assets/logos/metamask-fox.svg"
import Web3 from 'web3';

const Navbar = ({ setPage }) => {

    const [metaMaskConnected, setMetaMaskConnected] = useState(false)
    const [isShown, setIsShown] = useState(false);
    const { ethereum } = window;
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    const init = () => {
      if(isMetaMaskInstalled()){
        web3.eth.getAccounts(function(err, accounts){
            if (err != null) console.error("An error occurred: "+err);
            else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
            else {
              setMetaMaskConnected(state => true);
              console.log("User is logged in to MetaMask");
            }
        });
      }
    }

    const isMetaMaskInstalled = () => {
      return Boolean(ethereum && ethereum.isMetaMask);
    };

    const handleMetaMask = () => {
        console.log("Handle MetaMask Connection - NavBar");
        if(isMetaMaskInstalled()){
          ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
            console.log("Connected as" + result[0]);
            setMetaMaskConnected(state => true);
          });
        }
    };

    init();

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
                        </li>}
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
