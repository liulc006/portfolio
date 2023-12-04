import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    const currentDate = new Date();
    const startYear = 2023;
    const currentYear =  currentDate.getFullYear();


    return (
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Typography variant="body">Design and developed by Luca Liu</Typography>
            {startYear === currentYear ?
                <Typography variant="body">© 2023 Luca Liu</Typography>
            :
                <Typography variant="body">© 2023 - {year} Luca Liu</Typography>
            }
        </Box>
    )
};

export default Footer;