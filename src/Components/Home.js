import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
            <Box sx={{height:'50vh', width:'75%', border:'solid 1px red', display:'flex', flexDirection:'row'}}>
                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'start', width:'100%', height:'100%'}}>
                    <Typography variant="h1">Welcome!</Typography>
                    <Typography variant="h2">I'm Luca Liu, a Software Developer Engineer</Typography>
                    <Typography variant="body">I write code </Typography>
                </Box>
                <Box sx={{width:'100%', height:'100%', backgroundColor:'darkkhaki'}}>

                </Box>
            </Box>
        </Box>
    );
};

export default Home;