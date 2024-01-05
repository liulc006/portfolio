import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";

const Footer = () => {
    const currentDate = new Date();
    const startYear = 2023;
    const currentYear =  currentDate.getFullYear();


    return (
        <Box sx={{backgroundColor:'secondary.main', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'1rem'}}>
            <Box sx={{marginBottom:'1rem', width:'90%', display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:'space-evenly', alignItems:'start'}}>
                <Box id='contactme' sx={{flexBasis:'1', display:'flex', flexDirection:'column', marginBottom:'1rem'}}>
                    <Typography variant="h2">Contact Me</Typography>
                    {/* <Typography variant="body">Subject</Typography>
                    <Typography variant="body">Name</Typography>
                    <Typography variant="body">Body</Typography> */}
                    <Button href='mailto:lucaliu96@gmail.com?Subject=Portfolio Inquiry'>
                        <Typography variant="body">EMAIL: lucaliu96@gmail.com</Typography>
                    </Button>
                </Box>
                <Box sx={{flexBasis:'1', display:'flex', flexDirection:'column', marginBottom:'1rem'}}>
                    <Typography variant="h2">Follow Me</Typography>
                    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                        <Button component={Link} to='https://github.com/liulc006' target='_blank'>
                            <GitHubIcon />
                        </Button>
                        <Button component={Link} to='https://www.linkedin.com/in/luca-liu/' target='_blank'>
                            <LinkedInIcon />
                        </Button>
                        <Button href='mailto:lucaliu96@gmail.com?Subject=Portfolio Inquiry'>
                            <EmailIcon />
                        </Button>
                    </Box>
                </Box>

            </Box>
            <Typography variant="body">Design and developed by Luca Liu</Typography>
            {startYear === currentYear ?
                <Typography variant="body">© 2023 Luca Liu</Typography>
            :
                <Typography variant="body">© 2023 - {currentYear} Luca Liu</Typography>
            }
        </Box>
    )
};

export default Footer;