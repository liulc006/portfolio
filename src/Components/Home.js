import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Tag from "./Tag";

const Home = () => {
    const otherSkills = ['JavaScript','Git','Python', 'RestAPI', 'NumPy', 'Pandas', 'ROS', 'Scikit-Learn', 'PyTorch', 'TensorFlow', 'HTML', 'CSS'];
    const frontendSkills = ['React.JS', 'Material UI', 'Redux.JS',];
    const backendSkills = ['Node.JS', 'Express.JS',  'PostgreSQL', 'MongoDB', 'Sequelize', 'Mongoose'];

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
                    {/* Intro for About Me */}
                    <Box sx={{width:'65%', display:'flex', justifyContent:'center'}}>
                        <Typography variant='body' sx={{textAlign:'center', padding:'1rem 0 1rem 0'}}>
                            Throught the year, I learned a lot of skills and tool in the field of engineering. I have professional and formal education in the field of Mechanical Engineering, 
                            but also technical and practical experience in programming in the field of Software Development Engineering. 
                            In the Mechanical Engineering field, I am capable of evaluating, designing and building prototypes of products using CAD tools, machinery and eletronic components.
                            In the Software Engineering field, I am can design, develop and program Full-Stack web application using a combination of Front-End and Back-End tools. 
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'start', width:'75%'}}>
                    {/* Education */}
                    <Box sx={{width:'100%', display:'flex', flexDirection:'column'}}>
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
                    <Box sx={{width:'100%', borderLeft:'1px solid gray', paddingLeft:'1rem'}}>
                        <Typography variant='h2'>Skill</Typography>
                        <Box sx={{paddingLeft:'1rem', marginTop:'1rem'}}>
                            {/* Front End */}
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'min-content', whiteSpace:'nowrap'}}>
                                    <Typography variant="h3">Front End</Typography>
                                    <Box sx={{height:'6px', width:'50%', backgroundColor:'secondary.main', borderRadius:'5px'}}/>
                                </Box>
                                <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                                    {frontendSkills.map( ele => <Tag key={ele} name={ele}/>)}
                                </Box>
                            </Box>
                            {/* Back End */}
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'min-content', whiteSpace:'nowrap'}}>
                                    <Typography variant="h3">Back End</Typography>
                                    <Box sx={{height:'6px', width:'50%', backgroundColor:'secondary.main', borderRadius:'5px'}}/>
                                </Box>
                                <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                                    {backendSkills.map( ele => <Tag key={ele} name={ele}/>)}
                                </Box>
                            </Box>
                            {/* Others */}
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'min-content', whiteSpace:'nowrap'}}>
                                    <Typography variant="h3">Other</Typography>
                                    <Box sx={{height:'6px', width:'50%', backgroundColor:'secondary.main', borderRadius:'5px'}}/>
                                </Box>
                                <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                                    {otherSkills.map( ele => <Tag key={ele} name={ele}/>)}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;