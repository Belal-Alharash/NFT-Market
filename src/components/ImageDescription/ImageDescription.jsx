/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './ImageDescription.css'
import { Link } from 'react-router-dom';

export default function ImageDescription({ userImage, userName, bordered, font }) {

  return (
    <div className={bordered ? "iA-image-description-BorderedFill" : "iA-image-description"}>
      <Link to="/artist">
        <img src={userImage} alt='userImage' />
      </Link>
      <p className={font ? "iA-image-description-WorkSans-font" : "iA-image-description-SpaceMono-Font"}>{userName}</p>
    </div>
  )
}