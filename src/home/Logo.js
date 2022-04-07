import React from 'react'; 
import './Logo.css'; 
import {Link} from 'react-router-dom'; 
import Home from './Home';



function Logo(props){
    return(
        <Link className="menuLi" to="/#App" element={<Home/>}>
            <img src={props.src} className="Logo"/>
        </Link>
    )
}

export default Logo; 