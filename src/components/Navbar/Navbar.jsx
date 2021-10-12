import React from 'react'

import "./Navbar.css"

import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <Link to='roadmap' spy={true} smooth={true}>
                Home
            </Link> */}
            <div className="nav-links">
                <li>
                    <Link to='home' spy={true} smooth={true} offset={-80}>
                        <button className="cybr-btn">
                            Home<span aria-hidden>_</span>
                            <span aria-hidden className="cybr-btn__glitch">Home_</span>
                            <span aria-hidden className="cybr-btn__tag">R25</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='roadmap' spy={true} smooth={true} offset={-80}>
                        <button className="cybr-btn">
                            Roadmap<span aria-hidden>_</span>
                            <span aria-hidden className="cybr-btn__glitch">Roadmap_</span>
                            <span aria-hidden className="cybr-btn__tag">R25</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to='team' spy={true} smooth={true} offset={-80}>
                        <button className="cybr-btn">
                            Team<span aria-hidden>_</span>
                            <span aria-hidden className="cybr-btn__glitch">Team_</span>
                            <span aria-hidden className="cybr-btn__tag">R25</span>
                        </button>
                    </Link>
                </li>
            </div>
        </nav>
    )
}

export default Navbar
