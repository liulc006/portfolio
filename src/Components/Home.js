import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
            <Box sx={{minHeight:'50vh', width:'75%', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Box sx={{flex:'2',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'start', height:'100%', paddingLeft:'1rem'}}>
                    <Typography variant="h1">Welcome! I'm Luca Liu</Typography>
                    <Typography variant="h2">Software Development Engineer & Freelancer</Typography>
                    <Typography variant="body">
                        I am a passionate software engineer driven by the joy of problem-solving and coding. 
                        My focus lies in the dynamic realm of web development, where I thrive on transforming ideas into functional and elegant applications. 
                    </Typography>
                </Box>
                <Box sx={{flex:'1', backgroundColor:'secondary.main', display:'flex', justifyContent:'center', alignItems:'center', aspectRatio:'1/1', borderRadius:'100%'}}>
                    <Box component="img" alt="Profile Picture" src="../static/profile.jpeg" sx={{maxWidth:'90%', padding:'1rem',borderRadius:'100%', aspectRatio:'1/1', objectFit:'contain'}}/>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;