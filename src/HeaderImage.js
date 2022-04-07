import React from 'react'
import "./HeaderImage.css";

function HeaderImage(props) {
  return (
    <div className="HeaderImage" >
      <img className="HeaderImagePicture" src={props.src} />
    </div>
  )
}

export default HeaderImage