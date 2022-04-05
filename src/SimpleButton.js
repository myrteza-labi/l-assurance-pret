import React from 'react'; 
import './SimpleButton.css'; 

function SimpleButton(props){
    return(
        <button className={props.className}>{props.title}</button>
    )
}

export default SimpleButton; 