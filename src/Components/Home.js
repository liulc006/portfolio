import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Tag from "./Tag";

const Home = () => {
    const skills = ['Python', 'JavaScript', 'React.JS', 'Node.JS', 'Material UI', 'Express.JS', 'Redux.JS', 'PostgreSQL', 'MongoDB', 'Sequelize', 'Mongoose'];


    return (
        <Box sx={{paddingTop:'6rem',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%'}}>
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

            {/* About Me */}
            <Box sx={{display:'flex', flexDirection:'column', width:'100%', backgroundColor:"secondary.lightDark", justifyContent:'center', alignItems:'center', paddingBottom:'1rem'}}>
                <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', paddingTop:'1rem', paddingBottom:'1rem'}}>
                    <Typography variant='h1'>About Me</Typography>
                    <Box sx={{height:'6px', width:'4rem', backgroundColor:'secondary.main', borderRadius:'5px'}}/>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'start', width:'75%'}}>
                    {/* Education */}
                    <Box sx={{width:'100%', borderRight:'1px solid gray', marginRight:'1rem', display:'flex', flexDirection:'column'}}>
                        <Typography variant='h2'>Education</Typography>
                        <Box sx={{display:'flex', flexDirection:'column', margin:'1rem'}}>
                            <Typography variant='body' fontWeight='600'>Columbia University in the City of New York</Typography>
                            <Typography variant='body'>Master of Science - Mechanical Engineering</Typography>
                            <Typography variant='body'>December 2020</Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', margin:'1rem'}}>
                            <Typography variant='body' fontWeight='600'>Boston University</Typography>
                            <Typography variant='body'>Bachelor of Science - Mechanical Engineering</Typography>
                            <Typography variant='body'>May 2019</Typography>
                        </Box>
                        <Box sx={{display:'flex', flexDirection:'column', margin:'1rem'}}>
                            <Typography variant='body' fontWeight='600'>Fullstack Academy</Typography>
                            <Typography variant='body'>Certificate - Software Development Engineering</Typography>
                            <Typography variant='body'>December 2022</Typography>
                        </Box>
                    </Box>
                    {/* Skills */}
                    <Box sx={{width:'100%'}}>
                        <Typography variant='h2'>Skill</Typography>
                        <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                            {skills.map( ele => <Tag key={ele} name={ele}/>)}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;