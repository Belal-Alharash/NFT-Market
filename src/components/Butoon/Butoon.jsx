import React from 'react'
import './Butoon.css'

export default function Butoon({ showIcon, buttonText, buttonClass, buttonIcon }) {
  return (
    <>
      <button className={buttonClass}>
        {showIcon && <img src={buttonIcon} className="bh-button-icon" />}
        {buttonText}
      </button>
    </>
  )
}
