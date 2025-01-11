import React from 'react'
import './Button.css'

export default function Button({ showIcon, buttonText, buttonClass, buttonIcon }) {
  return (
    <>
      <button className={buttonClass}>
        {showIcon && <img src={buttonIcon} className="bh-button-icon" />}
        {buttonText}
      </button>
    </>
  )
}
