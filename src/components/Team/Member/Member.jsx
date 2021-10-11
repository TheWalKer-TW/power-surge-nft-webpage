import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon } from '@material-ui/core';
import { ArwesThemeProvider, StylesBaseline, Figure } from '@arwes/core';


const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif';
const IMAGE_URL = 'https://playground.arwes.dev/assets/images/wallpaper.jpg';


const Member = ({ member }) => {
    console.log(member.image)
    return (
        <ArwesThemeProvider>
            <StylesBaseline styles={{ body: { fontFamily: ROOT_FONT_FAMILY } }} />
            <Figure
                src=""
                alt='A nebula'
            >
                {member.description}
            </Figure>
        </ArwesThemeProvider>
    );


        // <div>
        //     <Figure
        //     animator={{animate: false}}
        //     src={''}
        //     alt=''>
        //         {member.description}
        //     </Figure>
        // </div>









        // <Card>
        //     <CardMedia />
        //     <CardContent image={member.image} title={member.name}>
        //         <div>
        //             <Typography variant="h5" gutterBottom>
        //                 {member.name}
        //             </Typography>
        //             <Typography variant="h5">
        //                 {member.description}
        //             </Typography>
        //         </div>
        //         <Typography variant="h2" color="textSecondary">
        //             {member.description}
        //         </Typography>
        //     </CardContent>
        // </Card>
    // )
}

export default Member
