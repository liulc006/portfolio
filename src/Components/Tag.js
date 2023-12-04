import React from "react";
import { Box, Typography } from "@mui/material";

const Tag = (props) => {
    return(
        <Box sx={{width:'min-content', padding:'0 1rem 0 1rem', margin:'1rem', backgroundColor:'secondary.main', borderRadius:'20px'}}>
            <Typography variant="body" color='white' sx={{whiteSpace:'nowrap'}}>{props.name}</Typography>
        </Box>
    );
};

export default Tag;