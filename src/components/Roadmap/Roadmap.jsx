import React from 'react'
import "./Roadmap.css"
import { FramePentagon, FrameUnderline } from '@arwes/core';


const Roadmap = () => {
    return (
        <section className="roadmap">
            <div className="roadmap-header">
                <FrameUnderline animator={{ animate: false }} hover>
                    <div><h1>Roadmap_</h1></div>
                </FrameUnderline>
            </div>
            <div className="roadmap-phase roadmap-left">
                <FramePentagon
                    hover
                >
                    <div>
                        <h2 className="phase-title">Phase1_</h2>
                        <p className="phase-description">10k pfp nft drop</p>
                        <ul className="phase1-list">
                            <li className="phase1-list-item">
                                25% Sold
                                <p>Begin work with manga/comic</p>
                            </li>
                            <li className="phase1-list-item">
                                50% Sold
                                <p>Set up community fund, 10% of sales and 50% of all royalties will go towards it. 
                                    A DAO will be created.</p>
                            </li>
                            <li className="phase1-list-item">
                                75% Sold
                                <p>Giveaway - One holder will receive $5k. Set up name editor.</p>
                            </li>
                            <li className="phase1-list-item">
                                100% Sold
                                <p>2nd giveaway - 3 holders will receive $5k each. 
                                    Additional hiring for project development.</p>
                            </li>
                        </ul>
                    </div>
                </FramePentagon>
            </div>
            <div className="roadmap-phase roadmap-right">
                <FramePentagon
                    inverted
                    hover
                >
                    <div>
                        <h2 className="phase-title">Phase2_</h2>
                        <p className="phase-description">Planned for mid-late dec, a second pfp will be dropped. 
                        This time focusing more on super powers rather than technology</p>
                    </div>
                </FramePentagon>       
            </div>
            <div className="roadmap-phase roadmap-left">
                <FramePentagon
                    hover
                >
                    <div>
                        <h2 className="phase-title">Phase3_</h2>
                        <p className="phase-description">Second copy of series "A" 
                        manga released. First copy of series "B" manga released.</p>
                    </div>
                </FramePentagon>
            </div>
        </section>
    );
};

export default Roadmap
