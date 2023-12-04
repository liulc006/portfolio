import { Box, Typography, Button, Divider} from "@mui/material";
import React from "react";

const Nav = () => {
    return (
        <>
            <Box sx={{position:'fixed', width:'100%',height:'6rem', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:"secondary.light", borderBottom:'1px solid gray'}}>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', width:'80%'}}>
                    <Box sx={{flexGrow:'1', display:'flex', justifyContent:'center'}}>
                        <Typography variant="title" color='secondary.main'>LUCA LIU</Typography>
                    </Box>
                    <Box sx={{flexGrow:'3', display:'flex', flexDirection:'row', maxWidth:'100%', minWidth:'30%', justifyContent:'center', alignItems:'center'}}>
                        <Button variant="navigation-button">
                            <Typography variant="navButton">About Me</Typography>
                        </Button>
                        <Button variant="navigation-button">
                            <Typography variant="navButton">Skills</Typography>
                        </Button>
                        <Button variant="navigation-button">
                            <Typography variant="navButton">Projects</Typography>
                        </Button>
                    </Box>
                    <Box sx={{flexGrow:'1',display:'flex', justifyContent:'center'}}>
                        <Button variant="navigation-button">
                            <Typography variant="navButton">Contact <span style={{fontWeight:'700'}}>Me</span></Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>

    );
};

export default Nav;