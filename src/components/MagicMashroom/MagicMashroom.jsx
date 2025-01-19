import React from 'react'
import './MagicMashroom.css'
import Timer from '../Timer/Timer'
import ButtonBh from '../ButtonBh/ButtonBh'

export default function MagicMashroom() {
  return (
    <div className='mh-Magic'>
      <div className='mh-Magic-MainDiv'>
        <div className='mh-Magic-part1'>
          <div className='mh-Magic-card'>Image Desc</div>
          <h3 className='mh-Magic-h3'>Magic Mashrooms</h3>
          <ButtonBh buttonText={"See NFT"} buttonIcon={"./../../../public/Images/icons/Eye.svg"} buttonClass={"bh-button-one"} showIcon={true} />
        </div>
        <div className='mh-Magic-timer'>
          <Timer show_btn={false}/>
        </div>
      </div>
    </div>
  )
}
