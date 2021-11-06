import React from 'react';
import { Grid } from '@material-ui/core';
import { FrameUnderline } from '@arwes/core';

import Exemple from './Exemple/Exemple';
import Exemples from './Exemples'
import "./Gallery.css"

const Gallery = () => {
    return (
        <section className='gallery' id="gallery">
            <div className="gallery-header">
                <FrameUnderline animator={{ animate: false }} hover>
                    <div><h1>Gallery_</h1></div>
                </FrameUnderline>
            </div>
            <div className='grid-container'>
                <Grid 
                container 
                justifyContent='center' 
                alignItems='center' 
                spacing={6}
                >
                    {Exemples.exemples.map( (exemple) => (
                        <Grid item key={exemple.id} xs={12} sm={6} md={4} lg={3}>
                            <Exemple exemple={ exemple } />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
}

export default Gallery
