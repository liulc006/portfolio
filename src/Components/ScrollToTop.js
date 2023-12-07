import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();
    
    useEffect(() => {
        if(!location.hash){
            window.scrollTo({top:'0', left:'0', behavior:'smooth'});
        };

    }, [location]);
    
    return null;
};

export default ScrollToTop;