import React from 'react';
import { Grid } from '@material-ui/core';
import { FrameUnderline } from '@arwes/core';

import Member from './Member/Member';
import Members from './Members'
import "./Team.css"

const Team = () => {
    return (
        <section className='team'>
            <div className="team-header">
                <FrameUnderline animator={{ animate: false }} hover>
                    <div><h1>Team_</h1></div>
                </FrameUnderline>
            </div>
            <Grid container justifyContent='center' alignItems='center' spacing={6}>
                {Members.members.map((member) => (
                    <Grid item key={member.id} xs={12} sm={6} md={4} lg={3}>
                        <Member member={ member } />
                    </Grid>
                ))}
            </Grid>
        </section>
    );
}

export default Team
