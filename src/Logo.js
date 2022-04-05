import React from 'react'; 
import './Logo.css'; 



function Logo(props){
    return(
        <img src={props.src} className="Logo"/>
    )
}

export default Logo; 