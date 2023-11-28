import { Box, Typography, Button } from "@mui/material";
import React from "react";

const Nav = () => {
    return (
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'dodgerblue'}}>
            <Box sx={{flexGrow:'1', display:'flex', justifyContent:'center'}}>
                <Typography variant="title" color='primary.main'>LUCA LIU</Typography>
            </Box>
            <Box sx={{flexGrow:'3', display:'flex', flexDirection:'row', maxWidth:'100%', minWidth:'30%', justifyContent:'center', alignItems:'center'}}>
                <Button variant="navigation-button">
                    <Typography>About Me</Typography>
                </Button>
                <Button>
                    <Typography>Skills</Typography>
                </Button>
                <Button>
                    <Typography>Projects</Typography>
                </Button>
            </Box>
            <Box sx={{flexGrow:'1',display:'flex', justifyContent:'center'}}>
                <Typography>Contact Me</Typography>
            </Box>
        </Box>
    );
};

export default Nav;