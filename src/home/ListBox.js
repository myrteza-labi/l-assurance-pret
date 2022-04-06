import React from 'react'; 
import './ListBox.css'; 

function ListBox(){
    return(
        <div className="ListBox">
            <h4 className="listBoxTitle">listBoxTitle</h4>
            <ul className="listBoxUl">
                <li className="listBoxLi">listBoxLi</li>
                <li className="listBoxLi">listBoxLi</li>
                <li className="listBoxLi">listBoxLi</li>
                <li className="listBoxLi">listBoxLi</li>
                <li className="listBoxLi">listBoxLi</li>
            </ul>
        </div>
    )
}

export default ListBox; 