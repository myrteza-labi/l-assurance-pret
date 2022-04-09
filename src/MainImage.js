import React from 'react';
import './MainImage.css';

function MainImage(props) {
    return (
        <img id={props.id} src={props.src} className="MainImage" />
    )
}

export default MainImage; 