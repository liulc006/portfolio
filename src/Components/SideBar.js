import React from "react";
import { Box, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <Box sx={{top:'30%', right:'0%', position: 'fixed', width:'4rem', height:'15rem', border:'1px solid black', borderRadius:'10px 0 0 10px', overflow:'hidden', backgroundColor:'secondary.lightDark', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center'}}>
            <Button variant='navigation-button' component={Link} to='https://github.com/liulc006' target='_blank'>
                <GitHubIcon />
            </Button>
            <Button variant='navigation-button' component={Link} to='https://www.linkedin.com/in/luca-liu/' target='_blank'>
                <LinkedInIcon />
            </Button>
            <Button variant='navigation-button' href='mailto:lucaliu96@gmail.com?Subject=Portfolio Inquiry'>
                <EmailIcon />
            </Button>
        </Box>
    );
};

export default SideBar;