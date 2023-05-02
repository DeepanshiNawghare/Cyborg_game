import React from 'react'
import "./browse.css"
import Featured from '../../components/featuredGames/Featured'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Startstream from '../../components/startstream/Startstream'
import Livestream from '../../components/Livestream/livestream'

export default function Browse() {
  return (
    <div>
      <Navbar/>
      <div className='browse_cnt container'>
        <Featured/>
        <Startstream/>
        <Livestream/>
      </div>
      <Footer/>
    </div>
  )
}