import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <button className="cybr-btn">
                        Home<span aria-hidden>_</span>
                        <span aria-hidden className="cybr-btn__glitch">Home_</span>
                        <span aria-hidden className="cybr-btn__tag">R25</span>
                    </button>
                </li>
                <li>
                    <button className="cybr-btn">
                        Roadmap<span aria-hidden>_</span>
                        <span aria-hidden className="cybr-btn__glitch">Roadmap_</span>
                        <span aria-hidden className="cybr-btn__tag">R25</span>
                    </button>
                </li>
                <li>
                    <button className="cybr-btn">
                        Team<span aria-hidden>_</span>
                        <span aria-hidden className="cybr-btn__glitch">Team_</span>
                        <span aria-hidden className="cybr-btn__tag">R25</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
