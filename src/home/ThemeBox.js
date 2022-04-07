import React from 'react';
import './ThemeBox.css';

function ThemeBox(props) {
    return (
        <div className={props.className}>
            <div className="themeBoxImgContainer">
                <img src={props.src} className="themeBoxImg" />
            </div>
            <h3 className="themeBoxTitle">
                {props.title}
            </h3>
        </div>
    )
}

export default ThemeBox; 