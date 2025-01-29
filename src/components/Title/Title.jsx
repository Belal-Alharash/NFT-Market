/* eslint-disable react/prop-types */
import './Title.css'

export default function Title({ title, paragraph, showButton, buttonText, showInput, inputPlaceholder, onInputChange, iconInput ,magic_h3 }) {
  return (
    <div className="ED-title">
      <div className="text-content">
        <h3 className={magic_h3 ? 'mh-Magic-h3' :'mh-title'}>{title}</h3>
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