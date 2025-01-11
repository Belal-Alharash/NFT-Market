import React from 'react'
import './App.css'
import InfoUlCard from './components/InfoUlCard/InfoUlCard'
import data from './data/InfoUlCard.js';
export default function App() {
  return (
    <>
      <InfoUlCard data={data.dataList1}/>
      <InfoUlCard data={data.dataList2}/>
    </>
  )
}

