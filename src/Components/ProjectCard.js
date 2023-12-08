import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Tag from "./Tag";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

const ProjectCard = ( props ) => {
    const { title, tags, description, url, github, imgUrl} = props;

    return (
        <Box sx={{display:'flex', flexDirection:'row', border:'1px solid gray', borderRadius:'10px', backgroundColor:"secondary.lightDark", overflow:'hidden', margin:'1rem 0 1rem 0'}}>
            {/* Image Content */}
            <Box component='img' alt='Project Image' src={imgUrl || '../static/placeholder-project.jpg'} sx={{width:'50%', height:'auto',objectFit:'cover'}}/>
            {/* Description Content */}
            <Box sx={{ padding:'1rem'}}>
                <Typography variant="h2">{title}</Typography>
                <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                    {tags.map(ele => { return (
                        <Tag key={[title,ele].join(' ')} name={ele}/>
                    )})}
                </Box>
                <Typography variant="body">
                    {description}
                </Typography>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'center', margin:'1rem'}}>
                    {github ? 
                    <Button variant="outlined" component={Link} to={github} target="_blank" sx={{marginRight:'.5rem'}}>
                        <GitHubIcon/>
                        <Typography variant="navButton">GitHub</Typography>
                    </Button>
                    : null}
                    {url ? 
                    <Button variant="outlined" component={Link} to={url} target="_blank">
                        <WebIcon />
                        <Typography variant="navButton">Visit</Typography>
                    </Button>
                    : null}
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectCard;