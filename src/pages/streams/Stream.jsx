import React from 'react'
import "./stream.css"
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Streamall from '../../components/StreamAll/Streamall'
import Topstreamers from '../../components/startstream/Topstreamers'

export default function Stream() {
  return (
    <div>
      <Navbar />
      <div className='stream_cnt container'>
      <Topstreamers/>
      <Streamall/>
      </div>
      <Footer />
    </div>
  )
}
