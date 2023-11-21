import { Box, Typography, Button } from "@mui/material";
import React from "react";

const Nav = () => {
    return (
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'dodgerblue'}}>
            <Typography>Luca Liu</Typography>
            <Box sx={{display:'flex', flexDirection:'row', maxWidth:'100%', width:'50rem', minWidth:'50%', justifyContent:'space-evenly', alignItems:'center'}}>
                <Button variant="navigation-button">
                    <Typography>About Me</Typography>
                </Button>
                <Button>
                    <Typography>Skills</Typography>
                </Button>
                <Button>
                    <Typography>Contact Me</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default Nav;