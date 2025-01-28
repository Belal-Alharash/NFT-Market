import React from 'react'
import './ConnectWallet.css'
import ConnectCreateAccount from '../../components/ConnectCreateAccount/ConnectCreateAccount'


export default function ConnectWallet() {
  return (
    <>
        <ConnectCreateAccount creatYs={false} img='./.././../../../public/Images/Image-Placeholder_1.jpg'
        title={'Connect wallet'} text={'Choose a wallet you want to connect. There are several wallet providers.'} />
    </>
  )
}
