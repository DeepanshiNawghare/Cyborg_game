import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import Mostpopular from '../../components/mostpopular/mostpopular'
import Library from '../../components/library/library'
import Footer from '../../components/footer/footer'

export default function Home() {
  return (
    <div className='home_sec'>
      <Navbar/>
      <div className='main_cnt container'>
      <Header/>
      <Mostpopular/>
      <Library/>
      </div>
      <Footer/>
    </div>
  )
}
