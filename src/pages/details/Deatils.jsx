import React from 'react'
import Footer from '../../components/footer/footer'
import Fortnite from '../../components/fortnite/fortnite'
import Navbar from '../../components/navbar/navbar'
import Othergames from '../../components/other games/Othergames'
import "./details.css"

export default function Deatils() {
  return (
    <div>
      <Navbar/>
      <div className='details_cnt container'>
        <Fortnite/>
        <Othergames/>
      </div>
      <Footer/>
    </div>
  )
}
