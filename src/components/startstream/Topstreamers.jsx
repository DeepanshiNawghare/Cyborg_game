import React from 'react'
import "./topstreamer.css"
import { FaCheck } from "react-icons/fa"
import Carouselfeature from '../featuredGames/Carouselfeature'


export default function Topstreamers() {
  return (
    <div className='featured_cnt' >
            <div className='featured_cnt_1'>
                <div className="heading_txt">
                    <h2><u>Featured</u><span> Games
                    </span></h2>
                </div>
                <Carouselfeature/>
            </div>
            <div className="topstreamer_cnt_2">
                <div className="heading_txt">
                    <h2><u>Top</u><span> Streamers
                    </span></h2>
                </div>
                <ul>
                    <li className='topstreamer_card'>
                        <span>01</span>
                        <img src='./assets/avatar-01.jpg' alt='avatar'/>
                        <h6>< FaCheck className="top_streamer_check" />LahutaM</h6>
                        <div className='topstreamer_btn'><button>Follow</button></div>
                    </li>                    
                    <li className='topstreamer_card'>
                        <span>02</span>
                        <img src='./assets/avatar-02.jpg' alt='avatar'/>
                        <h6>< FaCheck className="top_streamer_check" />Omeg</h6>
                        <div className='topstreamer_btn'><button>Follow</button></div>
                    </li>                  
                    <li className='topstreamer_card'>
                        <span>03</span>
                        <img src='./assets/avatar-03.jpg' alt='avatar'/>
                        <h6>< FaCheck className="top_streamer_check" />Kengan</h6>
                        <div className='topstreamer_btn'><button>Follow</button></div>
                    </li>                    
                    <li className='topstreamer_card'>
                        <span>04</span>
                        <img src='./assets/avatar-04.jpg' alt='avatar'/>
                        <h6>< FaCheck className="top_streamer_check" />Areluwa</h6>
                        <div className='topstreamer_btn'><button>Follow</button></div>
                    </li>                    
                     
                    <li className='topstreamer_card'>
                        <span>05</span>
                        <img src='./assets/avatar-01.jpg' alt='avatar'/>
                        <h6>< FaCheck className="top_streamer_check" />GangTeam</h6>
                        <div className='topstreamer_btn'><button>Follow</button></div>
                    </li>                     
                    
                </ul>
            </div>
        </div>
  )
}
