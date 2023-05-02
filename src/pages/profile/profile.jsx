import React from 'react'
import "./profile.css"
import Footer from '../../components/footer/footer'
import Library from '../../components/library/library'
import Navbar from '../../components/navbar/navbar'
import Clipprofile from '../../components/clip_Profile/Clipprofile'

export default function Profile() {
  return (
    <div>
      <Navbar/>
      <div className='profile_cnt container'>
      <Clipprofile/>
      <Library/>
      </div>
      <Footer/>
    </div>
  )
}
