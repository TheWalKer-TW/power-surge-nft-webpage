import React from 'react'
import { Figure } from '@arwes/core';


const Exemple = ({ exemple }) => {
        
    return(
        <Figure
        src={exemple.image}
        alt={exemple.description}
    >
    </Figure>
    );
}

export default Exemple
