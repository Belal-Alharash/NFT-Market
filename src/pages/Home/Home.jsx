import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import MagicMashroom from '../../components/MagicMashroom/MagicMashroom'
import CreatorsRankingCard from '../../components/CreatorsRankingCard/CreatorsRankingCard'
import { dataRankingTopCreators } from '../../data/dataRankingTopCreators'
export default function Home() {
  return (
    <>
    <Hero />
    <MagicMashroom/>

          <CreatorsRankingCard id={'1'} img={'./public/Images/ArtistAvatar/Keepitreal.png'}
           title={'Jaydon Ekstrom'} percent={'+1.41%'} description={'602'}
          sales={'12.4 ETH'} page={'ranking'} />

    </>
  )
}