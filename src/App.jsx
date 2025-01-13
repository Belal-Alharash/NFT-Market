import React from 'react'
import './App.css'
import Title from './components/Title/Title'


export default function App() {
  return (
    <>
      <Title
        title="Top Creators"
        paragraph=" Top Rated Creators On The NFT Marketplace"
      />

      <Title
        title="Top Creators"
        paragraph=" Top Rated Creators On The NFT Marketplace"
        showInput={true}
        inputPlaceholder="Search your favourite NFTs"
        iconInput={<i className="fa fa-search"></i>}

      />

      <Title
        title="Top Creators"
        paragraph=" Top Rated Creators On The NFT Marketplace"
        showButton={true}
        buttonText="Click Me"
      />
    </>
  )
}

