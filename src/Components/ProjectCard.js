import React from "react";
import { Box, Typography } from "@mui/material";
import Tag from "./Tag";

const ProjectCard = () => {
    return (
        <Box sx={{display:'flex', flexDirection:'row', border:'1px solid gray', borderRadius:'10px', backgroundColor:"secondary.lightDark", overflow:'hidden', margin:'1rem 0 1rem 0'}}>
            {/* Image Content */}
            <Box component='img' alt='Project Image' src='../static/placeholder-project.jpg' sx={{width:'50%', height:'auto',objectFit:'contain'}}/>
            {/* Description Content */}
            <Box sx={{padding:'1rem'}}>
                <Typography variant="h2">Project Title</Typography>
                <Typography variant="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac commodo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                </Typography>
                <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                    <Tag name='JavaScript'/>
                    <Tag name='React.JS'/>
                    <Tag name='Heroku'/>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectCard;