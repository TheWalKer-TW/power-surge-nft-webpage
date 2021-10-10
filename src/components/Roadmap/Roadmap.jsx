import React from 'react'
import "./Roadmap.css"

const Roadmap = () => {
    return (
        <section className="roadmap">
            <h1 className="roadmap-header">Roadmap</h1>
            <div className="roadmap-phase roadmap-right">
                <h2 className="phase-title">Phase 1</h2>
                <p className="phase-description">10k pfp nft drop</p>
                <ul>
                    <li>
                        <h3>25% Sold</h3>
                        <p>Begin work with manga/comic</p>
                    </li>
                    <li>
                        <h3>50% Sold</h3>
                        <p>Set up community fund. 10% of sales will go towards a community fund. A DAO will be created to decide what to do with the funds. (Donations, support other artists, 3D character creation for metaverse, etc). 50% of all royalties will also go towards the community fund</p>
                    </li>
                    <li>
                        <h3>75% Sold</h3>
                        <p>Giveaway - one holder will receive $5k. Set up name editor</p>
                    </li>
                    <li>
                        <h3>100% Sold</h3>
                        <p>2nd giveaway - 3 holders will receive $5k each. Additional hiring for project development</p>
                    </li>
                </ul>
            </div>
            <div className="roadmap-phase roadmap-left">
                <h2 className="phase-title">Phase 2</h2>
                <p className="phase-description">planned for mid-late dec, a second pfp will be dropped. This time focusing more on super powers rather than technology</p>
            </div>
            <div className="roadmap-phase roadmap-right">
                <h2 className="phase-title">Phase 3</h2>
                <p className="phase-description">Second copy of series "A" manga released. First copy of series "B" manga released</p>
            </div>
        </section>
    )
}

export default Roadmap
