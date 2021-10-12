import React from 'react'
import { Figure } from '@arwes/core';


const Member = ({ member }) => {
        
    return(
        <Figure
        src={[member.image.XS, member.image.SM, member.image.MD, member.image.LG, undefined]}
        alt={member.name}
    >
        {member.name}
    </Figure>
    );
}

export default Member
