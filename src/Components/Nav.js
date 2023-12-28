import { Box, Typography, Button, Divider} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Nav = () => {
    const location = useLocation();
    const [ viewMenu, setViewMenu ] = useState(false);

    //Close menu base whenever there is a hash change
    useEffect(()=>{
        setViewMenu(false)
    }, [location.hash])

    //handleing the open/close of the menu bar
    const handleMenu = (ev) => {
        ev.preventDefault();
        setViewMenu(!viewMenu);
    };

    return (
        <>
            <Box sx={{zIndex:'100',position:'fixed', width:'100%',height:'6rem', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:"secondary.light", borderBottom:'1px solid gray'}}>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', width:'80%'}}>
                    <Box sx={{flexGrow:'1', display:'flex', justifyContent:'center', textDecoration:'none'}} component={Link} to='/'>
                        <Typography variant="title" color='secondary.main' sx={{whiteSpace:'nowrap'}}>LUCA LIU</Typography>
                    </Box>
                    {/* Desktop Version */}
                    <Box sx={{flexGrow:'3', display:{xs:'none',md:'flex'}, flexDirection:'row', maxWidth:'100%', minWidth:'30%', justifyContent:'center', alignItems:'center'}}>
                        <Button variant="navigation-button" component={Link} to='/#aboutme'>
                            <Typography variant="navButton">About Me</Typography>
                        </Button>
                        <Button variant="navigation-button" component={Link} to='/#skills'>
                            <Typography variant="navButton" >Skills</Typography>
                        </Button>
                        <Button variant="navigation-button" component={Link} to='/#projects'>
                            <Typography variant="navButton">Projects</Typography>
                        </Button>
                    </Box>
                    <Box sx={{flexGrow:'1',display:{xs:'none',md:'flex'}, justifyContent:'center'}}>
                        <Button variant="navigation-button" component={Link} to='/#contactme'>
                            <Typography variant="navButton">Contact <span style={{fontWeight:'700'}}>Me</span></Typography>
                        </Button>
                    </Box>
                </Box>
                {/* Mobile Version */}
                <Box sx={{display:{xs:'flex', md:'none', position:'absolute', right:'1rem'}}}>
                    <Button onClick={(ev)=>{handleMenu(ev)}}>
                        <MenuIcon />
                    </Button>
                </Box>
            </Box>
            {/* slide menu */}
            <Box sx={{display:{xs:'flex', md:'none'}, width:'100%', height:'100%', zIndex:'200', top:'0', right:(viewMenu ? "0" : "-100%"), position:'fixed', transition: '350ms'}}>
                <Box sx={{width:'100%', height:'100%', backgroundColor:'secondary.main', opacity:'0.5', position:'absolute'}} />
                <Box sx={{display:'flex', flexDirection:'column', width:'60%', height:'100%', backgroundColor:'secondary.main', opacity:'1', position:'absolute', zIndex:'200', top:'0', right:'0'}}>
                    <Box sx={{right:'1rem', display:'flex', height:'6rem', position:'absolute'}}>
                        <Button onClick={(ev)=>{handleMenu(ev)}}>
                                <CloseIcon />
                        </Button>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column', height:'100%', justifyContent:'center', alignItems:'center'}}>
                        <Button variant="navigation-button" component={Link} to='/#aboutme' sx={{margin:'1rem'}}>
                            <Typography variant="navButton">About Me</Typography>
                        </Button>
                        <Button variant="navigation-button" component={Link} to='/#skills' sx={{margin:'1rem'}}>
                            <Typography variant="navButton" >Skills</Typography>
                        </Button>
                        <Button variant="navigation-button" component={Link} to='/#projects' sx={{margin:'1rem'}}>
                            <Typography variant="navButton">Projects</Typography>
                        </Button>
                        <Button variant="navigation-button" component={Link} to='/#contactme' sx={{margin:'1rem'}}>
                            <Typography variant="navButton">Contact <span style={{fontWeight:'700'}}>Me</span></Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>

    );
};

export default Nav;