import React from 'react'
import './ButtonBh.css'

export default function ButtonBh({ showIcon, buttonText, buttonClass, buttonIcon }) {
  return (
    <>
      <button className={buttonClass}>
        {showIcon && <img src={buttonIcon} className="bh-button-icon" />}
        {buttonText}
      </button>
    </>
  )
}