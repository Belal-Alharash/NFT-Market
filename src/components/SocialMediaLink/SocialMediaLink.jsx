import React from 'react'
import './SocialMediaLink.css';
import img1 from './../../assets/Images/icons/Globe.svg';
import img2 from './../../assets/Images/icons/DiscordLogo.svg';
import img3 from './../../assets/Images/icons/YoutubeLogo.svg';
import img4 from './../../assets/Images/icons/TwitterLogo.svg';
import img5 from './../../assets/Images/icons/InstagramLogo.svg';
export default function SocialMediaLink ({ linkys}) {
  return (
   <> 
     <ul className='myul-ys'>
       <li><a href='https://datatopics.worldbank.org/world-development-indicators/themes/global-links.html'> <img src={img1} className={ linkys ? 'myicon-web-li-a-ys-none' : 'myicon-li-a-ys' } /> </a></li>
       <li><a href='https://discord.com/channels/@me'> <img src={img2}  className={ linkys ? '' : 'myicon-li-a-ys' } /> </a></li>
       <li><a href='https://www.youtube.com/'>  <img src={img3} className={ linkys ? '' : 'myicon-li-a-ys' } /> </a></li>
       <li><a href='https://ssstwitter.com/ar'> <img src={img4} className={ linkys ? '' : 'myicon-li-a-ys' } /></a></li>
       <li><a href='https://www.instagram.com/'> <img src={img5} className={ linkys ? '' : 'myicon-li-a-ys' }/></a></li> 
     </ul>
   </>
  )
}
