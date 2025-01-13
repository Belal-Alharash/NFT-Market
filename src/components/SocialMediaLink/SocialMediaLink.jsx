import React from 'react'
import './SocialMediaLink.css';

export default function SocialMediaLink({ ysShowLink }) {
  return (
    <>
      <ul className='ys-myul'>
        <li><a href='https://datatopics.worldbank.org/world-development-indicators/themes/global-links.html'> <img src="../../../public/Images/icons/Globe.svg" className={!ysShowLink ? 'ys-myicon-web-li-a-none' : 'ys-myicon-li-a'} /></a></li>
        <li><a href='https://discord.com/channels/@me'> <img src="../../../public/Images/icons/DiscordLogo.svg" className={!ysShowLink ? '' : 'ys-myicon-li-a'} /> </a></li>
        <li><a href='https://www.youtube.com/'>  <img src="../../../public/Images/icons/YoutubeLogo.svg" className={!ysShowLink ? '' : 'ys-myicon-li-a'} /> </a></li>
        <li><a href='https://ssstwitter.com/ar'> <img src="../../../public/Images/icons/TwitterLogo.svg" className={!ysShowLink ? '' : 'ys-myicon-li-a'} /></a></li>
        <li><a href='https://www.instagram.com/'> <img src="../../../public/Images/icons/InstagramLogo.svg" className={!ysShowLink ? '' : 'ys-myicon-li-a'} /></a></li>
      </ul>
    </>
  )
}
