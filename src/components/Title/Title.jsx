import React from 'react'
import './Title.css'

export default function Title({ title, paragraph, showButton, buttonText, showInput, inputPlaceholder, onInputChange, iconInput }) {
  return (
    <div className="ED-title">
      <div className="text-content">
        <h3>{title}</h3>
        <p>{paragraph}</p>
        {showInput && (
          <input
            type="text"
            className="title-input"
            placeholder={inputPlaceholder || "Enter text..."}
            onChange={onInputChange}
            icon={iconInput}
          />
        )}
      </div>
      {showButton && (
        <button className="title-button">{buttonText}</button>)}
    </div>
  )
}