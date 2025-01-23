import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import MagicMashroom from '../../components/MagicMashroom/MagicMashroom'
import EmailSection from '../../components/EmailSection/EmailSection'


export default function Home() {
  return (
    <>
    <Hero />
    <MagicMashroom/>
    <EmailSection />
    </>
  )
}
