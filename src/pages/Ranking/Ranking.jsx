import React from 'react'
import './Ranking.css'
import CreatorsRankingCard from '../../components/CreatorsRankingCard/CreatorsRankingCard'

export default function Ranking() {
  return (
    <>
      <CreatorsRankingCard
      page="ranking"
      id="1"
      img='/public/Images/ArtistAvatar/Allison.png'
      title="Ahmad"
      percent="+6464"
      sales="4989"
      />
    </>
  )
}
