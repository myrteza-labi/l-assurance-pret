import React from 'react';
import './MainImage.css';

function MainImage(props) {
    return (
        <img src={props.src} className="MainImage" />
    )
}

export default MainImage; 