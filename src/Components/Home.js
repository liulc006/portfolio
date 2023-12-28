import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Tag from "./Tag";
import ProjectCard from "./ProjectCard";

const Home = () => {
    // Skills Info
    const otherSkills = ['JavaScript','Git','Python', 'RestAPI', 'NumPy', 'Pandas', 'ROS', 'Scikit-Learn', 'PyTorch', 'TensorFlow', 'HTML', 'CSS'];
    const frontendSkills = ['React.JS', 'Material UI', 'Redux.JS',];
    const backendSkills = ['Node.JS', 'Express.JS',  'PostgreSQL', 'MongoDB', 'Sequelize', 'Mongoose'];
    const language = ['Italian', 'Chinese (Mandarin)', 'English'];

    //Projects Info
    const projects = [
        {
            imgUrl:'../static/SWG.png',
            title:'Smile With Grace Dental Care',
            tags:['JavaScript', 'React.JS', 'Heroku'],
            description:'Smile With Grace Dental Care, located in Ridgefield Park, NJ, is a newly established dental clinic offering a range of services provided by experienced professionals from esteemed institutions. My role involved designing and developing their online presence to enhance communication with current and potential clients. The website facilitates contact through an email form or direct phone calls for customer inquiries.',
            url: 'https://swg-dentalcare.onrender.com',
        },        {
            imgUrl:'../static/PetFoodie.png',
            title:'Pet Foodie - ECommerce',
            tags:['JavaScript', 'React.JS', 'PostgreSQL'],
            description:'Pet Foodie represents an E-Commerce initiative focused on retailing and evaluating pet food products. Employing PostgreSQL, Express.js, Node.js, and React.js, this project is meticulously crafted. It encompasses sophisticated features, including a secure login/registration system, OAuth integration with GitHub and Google GMAIL, and seamless payment processing through the Stripe API.',
            github:'https://github.com/liulc006/Pet-Foodie',
            url:'https://pet-foddie-ecommerce.onrender.com'
        },        {
            imgUrl:'../static/Goji.png',
            title:'GOJI - Dog Walker Service',
            tags:['JavaScript', 'React.JS', 'MongoDB'],
            description:'Goji, a cutting-edge pet service web application, links pet owners with diverse service providers offering services like dog walking, grooming, and pet day care. Tailored for both pet owners and service providers, the platform features two portals—one for pet owners to find specific services and another for service providers to offer their services part-time or full-time. Developed with the PERN stack, the project includes a Google Maps API to display the general locations of various service providers.',
            url: 'https://goji-dogwalker-project.onrender.com',
            github:'https://github.com/liulc006/goji-capstone'
        },
    ]

    return (
        <Box sx={{paddingTop:'6rem',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%'}}>
            <Box sx={{minHeight:'50vh', width:'75%', display:'flex', flexDirection:{xs:'column-reverse', md:'row'}, justifyContent:'center', alignItems:'center'}}>
                <Box sx={{flex:'2',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'start', height:'100%', paddingLeft:'1rem', margin:'1rem', textAlign:{xs:'center', md:'left'}}}>
                    <Typography variant="h1">Welcome! I'm Luca Liu</Typography>
                    <Typography variant="h2">Software Development Engineer & Freelancer</Typography>
                    <Typography variant="body">
                        I am a passionate software engineer driven by the joy of problem-solving and coding. 
                        My focus lies in the dynamic realm of web development, where I thrive on transforming ideas into functional and elegant applications. 
                    </Typography>
                </Box>
                <Box sx={{flex:'1', backgroundColor:'secondary.main', display:'flex', justifyContent:'center', alignItems:'center', aspectRatio:'1/1', borderRadius:'100%', margin:'1rem'}}>
                    <Box component="img" alt="Profile Picture" src="../static/profile.jpeg" sx={{maxWidth:'90%', padding:'1rem',borderRadius:'100%', aspectRatio:'1/1', objectFit:'contain'}}/>
                </Box>
            </Box>

            {/* About Me */}
            <Box sx={{display:'flex', flexDirection:'column', width:'100%', backgroundColor:"secondary.lightDark", justifyContent:'center', alignItems:'center', paddingBottom:'1rem'}}>
                <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', paddingTop:'1rem', paddingBottom:'1rem'}}>
                    {/* aboutme anchor */}
                    <Typography id='aboutme' variant='h1'>About Me</Typography>
                    <Box sx={{height:'6px', width:'4rem', backgroundColor:'secondary.main', borderRadius:'5px'}}/>
                    {/* Intro for About Me */}
                    <Box sx={{width:'65%', display:'flex',flexDirection:'column', justifyContent:'center'}}>
                        <Typography variant='body' sx={{textAlign:'center', padding:'1rem 0 1rem 0'}}>
                            Throughout the course of the year, I have acquired a diverse set of skills and tools within the realm of engineering. 
                            My educational background includes formal training in <strong>Mechanical Engineering</strong>, complemented by professional experience. 
                            In this discipline, I possess the ability to assess, design, and construct prototypes for products utilizing <strong>CAD</strong> tools, <strong>machinery</strong>, and <strong>electronic components</strong>.
                        </Typography>
                        <Typography variant='body' sx={{textAlign:'center', padding:'0 0 1rem 0'}}>
                            Additionally, my expertise extends into <strong>Software Development Engineering</strong>, where I have garnered technical and practical proficiency. 
                            Within this domain, I excel in the design, development, and programming of <strong>Full-Stack web applications</strong>, employing a comprehensive array of <strong>Front-End</strong> and <strong>Back-End</strong> tools. 
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', flexDirection:{xs:'column',md:'row'}, justifyContent:'center', alignItems:'start', width:'75%'}}>
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
                    <Box sx={{width:'100%', borderLeft:{xs:'0px',md:'1px solid gray'}, paddingLeft:{xs:'0',md:'1rem'}}}>
                        {/* skills anchor */}
                        <Typography id='skills'variant='h2'>Skill</Typography>
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

            {/* Projects */}
            <Box sx={{display:'flex', flexDirection:'column', width:'100%', justifyContent:'center', alignItems:'center', paddingBottom:'1rem'}}>
                <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center', paddingTop:'1rem', paddingBottom:'1rem'}}>
                    {/* projects anchor */}
                    <Typography id='projects' variant='h1'>Projects</Typography>
                    <Box sx={{height:'6px', width:'4rem', backgroundColor:'secondary.main', borderRadius:'5px'}}/>
                    {/* Intro for Projects */}
                    <Box sx={{width:'65%', display:'flex', justifyContent:'center'}}>
                        <Typography variant='body' sx={{textAlign:'center', padding:'1rem 0 1rem 0'}}>
                            In this segment, I present a selection of both personal and client projects that have been undertaken. 
                            The purpose is to highlight and demonstrate my proficiency in design and programming, showcasing acquired skills and knowledge in these areas.
                        </Typography>
                    </Box>
                </Box>
                {/* Project List Grid */}
                <Box sx={{width:{xs:'70%',md:'80%'}, display:'flex', flexDirection:'column', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                    { projects.map( ele => {
                        return (
                            <ProjectCard key={ele.title}
                                imgUrl={ele.imgUrl}
                                title={ele.title}
                                tags={ele.tags}
                                description={ele.description}
                                url={ele.url}
                                github={ele.github}
                            />
                        );
                    })}
                </Box>
            </Box>        
        </Box>
    );
};

export default Home;