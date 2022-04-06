import React from 'react'; 
import './StarBox.css'; 
import starLogo from '../images/star.png'

function StarBox(){
    return(
        <div className="StarBox">
            <img src={starLogo} className="starBoxImage" />
            <h3 className="starBoxTitle">starBoxTitle</h3>
            <p className="starBoxParagraphe">starBoxParagraphe</p>
        </div>
    )
}

export default StarBox; 