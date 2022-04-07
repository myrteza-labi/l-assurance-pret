import React from 'react';
import './ItemsSection.css';

function ItemsSection(props) {
    return (
        <div className={props.className}>
            <h2 className="ItemsSectionTitle" >{props.title}</h2>
            <div className="itemsContainer" >
                <div className="soloItemAndTitleContainer">
                    <img className="itemsImage" src={props.src1} />
                    <h4 className="itemTitle" >{props.itemTitle1}</h4>
                </div>
                <div className="soloItemAndTitleContainer">
                    <img className="itemsImage" src={props.src2} />
                    <h4 className="itemTitle" >{props.itemTitle2}</h4>
                </div>
                <div className="soloItemAndTitleContainer">
                    <img className="itemsImage" src={props.src3} />
                    <h4 className="itemTitle" >{props.itemTitle3}</h4>
                </div>
                <div className="soloItemAndTitleContainer">
                    <img className="itemsImage" src={props.src4} />
                    <h4 className="itemTitle" >{props.itemTitle4}</h4>
                </div>
            </div>
        </div>
    )
}

export default ItemsSection; 