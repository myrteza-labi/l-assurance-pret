import React from 'react';
import './SimpleTextBox.css';

function SimpleTextBox(props) {
    return (
        <div id={props.id} className={props.className}>
            <h2 className="textBoxTitle">{props.title}</h2>
            <div className="underline"></div>
            <h4 className="SimpleTextParaTitle">{props.paraTitle1}</h4>
            <p className="SimpleTextParagraphe">{props.para1}</p>
            <br />
            <h4 className="SimpleTextParaTitle">{props.paraTitle2}</h4>
            <p className="SimpleTextParagraphe">{props.para2}</p>
            <br />
            <h4 className="SimpleTextParaTitle">{props.paraTitle3}</h4>
            <p className="SimpleTextParagraphe">{props.para3}</p>
            <br />
            <h4 className="SimpleTextParaTitle">{props.paraTitle4}</h4>
            <p className="SimpleTextParagraphe">{props.para4}</p>
        </div>
    )
}

export default SimpleTextBox; 