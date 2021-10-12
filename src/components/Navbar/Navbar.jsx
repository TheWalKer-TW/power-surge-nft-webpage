import React from 'react'


import "./Navbar.css"

const goto = (e) => {
    console.log(e)
    // console.log(e.target)
}

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <li>
                    <button className="cybr-btn" onClick={goto}>
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
            </div>
        </nav>
    )
}

export default Navbar
