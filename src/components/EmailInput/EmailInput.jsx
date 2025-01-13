import React from 'react'
 import './EmailInput.css'
import img1 from'./../../assets/Images/icons/EnvelopeSimple.svg'
 

export default function EmailInput({placeholder ,hnIcon} )
{
  return (
    <div >
     
      <div className={hnIcon?'hn-b':'hn-f'}>
      <input type='email' placeholder={placeholder} className={hnIcon?'hn-inp':'hn-inp1'}/>
      <button className='hn-flex'>{hnIcon && <img src={img1}/>} Subscribe</button>
  

      </div>
   


  
      
          
    </div>
  )
}
