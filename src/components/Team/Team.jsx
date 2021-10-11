import React from 'react';
import { Grid } from '@material-ui/core';

import Member from './Member/Member';
import "./Team.css"

const members = [
    {
        id: 1,
        name: 'ALL_IV',
        image: '../../../assets/artists/ALL_IV.jpg',
        description:'lol',
    },
    {
        id: 2,
        name: 'JRD',
        image: '../../../assets/artists/JRD.jpg',
        description: 'lol',
    },
    {
        id: 3,
        name: 'Sketched World',
        image: '../../../assets/artists/Sketched_World.png',
        description: 'lol',
    },
    {
        id: 4,
        name: 'Sthaneykel27',
        image: '../../../assets/artists/Sthaneykel27.png',
        description: 'lol',
    },
    {
        id: 5,
        name: 'Tamie',
        image: '../../../assets/artists/Tamie.png',
        description: 'lol',
    },
    {
        id: 6,
        name: 'Walker',
        image: '../../../assets/artists/Walker.jpg',
        description: 'lol',
    },
];

const Team = () => {
    return (
        <section>
            <Grid container justifyContent='center' spacing={4}>
                {members.map((member) => (
                    <Grid item key={member.id} xs={12} sm={6} md={4} lg={3}>
                        <Member member={member} />
                    </Grid>
                ))}
            </Grid>
        </section>
    );
}

export default Team
