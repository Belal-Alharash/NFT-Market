import React from 'react'
import './BrowseCategoriesCard.css'

export default function BrowseCategoriesCard({photo,title}) {
  return (
     
   <div className='hn-cardBrows'>
   
 <img src={photo} alt= 'image' className='hn-image' />
  <h5 className='hn-title'>{title}</h5>
   </div>

  
  )
}