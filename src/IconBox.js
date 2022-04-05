import React from 'react'; 
import './IconBox.css'; 

function IconBox(props){
    return(
        <div className="IconBox">
            <img src={props.src} className="iconBoxImg"/>
        </div>
    )
}

export default IconBox; 