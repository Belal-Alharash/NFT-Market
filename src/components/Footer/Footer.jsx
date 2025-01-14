import React from 'react'
import './Footer.css'
import EmailInput from '../EmailInput/EmailInput'
import logo from '../../../public/Images/nav/Logo.png'
import { PiDiscordLogoLight } from "react-icons/pi";
import { CiYoutube , CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='mh-footer'>
      <div className='mh-footer-part1'>
        <div className='mh-footer-part1-1'>
          <img className='mh-img-part1-1' src={logo}  alt="logo" />
          <p className='mh-p-part1-1'>NFT marketplace UI created with Anima for Figma.</p>
          <div>
            <span className='mh-span-part1-1'>Join our community</span>
            <ul className='mh-ul-part1-1'>
              <li className='mh-li-part1-1'>
                <a href="https://discord.com/invite/eQxkYTNxSp">
                  <PiDiscordLogoLight className='mh-a-part1-1' />
                </a>
              </li>  
              <li className='mh-li-part1-1'>
                <a href="https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw">
                  <CiYoutube className='mh-a-part1-1' />
                </a>
              </li>  
              <li className='mh-li-part1-1'>
                <a href="https://twitter.com/animaapp?lang=en">
                  <CiTwitter className='mh-a-part1-1' />
                </a>
              </li>  
              <li className='mh-li-part1-1'>
                <a href="https://www.instagram.com/animaapp/?hl=en">
                  <FaInstagram className='mh-a-part1-1' />
                </a>
              </li>  
            </ul>
          </div>
        </div>
        <div className='mh-footer-part1-2'>
          <h5 className='mh-h5-part1-2'>Explore</h5>
          <ul className='mh-ul-part1-2'>
            <li className='mh-li-part1-2 mh-Marketplace'>Marketplace</li>
            <li className='mh-li-part1-2 mh-Rankings'>Rankings</li>
            <li className='mh-li-part1-2 mh-ConnectAWallet'>Connect a wallet</li>
          </ul>
        </div>
        <div className='mh-footer-part1-3'>
          <h5 className='mh-h5-part1-3'>Join our weekly digest</h5>
          <div className='mh-div-part1-3'>
            <p className='mh-p-part1-3'>Get exclusive promotions & updates straight to your inbox.</p>
            <EmailInput
              hnPlaceholder="Enter your email" 
              hnShowIcon={false} 
              hnShowIconSmallScreen={true} 
            />
          </div>
        </div>
      </div>
      <div className='mh-footer-part2'>
        <div></div>
        <p className='mh-p-part2'>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </div>
  )
}
