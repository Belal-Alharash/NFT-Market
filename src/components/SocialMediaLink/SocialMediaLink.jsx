import React from 'react'
import './SocialMediaLink.css';
export default function SocialMediaLink ({ linkys}) {
  return (
   <> 
     <ul className='myul-ys'>
       <li><a href='https://datatopics.worldbank.org/world-development-indicators/themes/global-links.html'> <img src="../../../public/Images/icons/Globe.svg" className={ linkys ? 'myicon-web-li-a-ys-none' : 'myicon-li-a-ys' } /> </a></li>
       <li><a href='https://discord.com/channels/@me'> <img src="../../../public/Images/icons/DiscordLogo.svg"  className={ linkys ? '' : 'myicon-li-a-ys' } /> </a></li>
       <li><a href='https://www.youtube.com/'>  <img src="../../../public/Images/icons/YoutubeLogo.svg" className={ linkys ? '' : 'myicon-li-a-ys' } /> </a></li>
       <li><a href='https://ssstwitter.com/ar'> <img src="../../../public/Images/icons/TwitterLogo.svg" className={ linkys ? '' : 'myicon-li-a-ys' } /></a></li>
       <li><a href='https://www.instagram.com/'> <img src="../../../public/Images/icons/InstagramLogo.svg" className={ linkys ? '' : 'myicon-li-a-ys' }/></a></li> 
     </ul>
   </>
  )
}
