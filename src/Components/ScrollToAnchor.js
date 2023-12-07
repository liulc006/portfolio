import React, { useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";

//Component to scroll to a specific part of the page when an element is clicked
const ScrollToAnchor = () => {
    const location = useLocation();
    const lastHash = useRef('');

    useEffect(()=>{
        if(location.hash){
            lastHash.current = location.hash.slice(1);
        };

        if(lastHash.current && document.getElementById(lastHash.current)){
            setTimeout(()=>{
                let element = document.getElementById(lastHash.current);
                let headerOffset = 96;
                let elementPosition = element.getBoundingClientRect().top;
                let offsetPosition = document.body.scrollTop + elementPosition - headerOffset;
            
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth",
                     block:'start'
                });
                lastHash.current = '';
            }, 100);
        } else{
            
        }


    }, [location]);

    return null;
};

export default ScrollToAnchor;