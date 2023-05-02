import React from 'react'
import "./mostpopular.css"
import {FaStar,FaDownload} from "react-icons/fa"

export default function Mostpopular() {
    return (
        <div className='mostpopular_sec'>
            <div className="heading_txt">
                <h2><u>Most Popular</u><span> Right Now</span></h2>
            </div>
            <div className='mp_r1'>
                <div className='mp_g_cnt'>
                    <img src='../assets/popular-01.jpg' alt='popular-1' />
                    <div className='mp_g_head'>
                        <span className='mp_txt_ttl'>Fortnite</span>
                        <span className='mp_txt_icon'><FaStar style={{color:'yellow'}}/> 4.8</span>
                    </div>
                    <div className='mp_g_subhead'>
                        <span className='mp_txt_sub'>Sandbox</span>
                        <span className='mp_txt_icon'><FaDownload style={{color: '#ec6090'}}/> 2.3M</span>
                    </div>
                </div>
                <div className='mp_g_cnt'>
                    <img src='../assets/popular-02.jpg' alt='popular-1' />
                    <div className='mp_g_head'>
                        <span className='mp_txt_ttl'>PubG</span>
                        <span className='mp_txt_icon'><FaStar style={{color:'yellow'}}/> <span>4.8</span></span>
                    </div>
                    <div className='mp_g_subhead'>
                        <span className='mp_txt_sub'>Battle S</span>
                        <span className='mp_txt_icon'><FaDownload style={{color: '#ec6090'}}/> 2.3M</span>
                    </div>
                </div>
                <div className='mp_g_cnt'>
                    <img src='../assets/popular-03.jpg' alt='popular-1' />
                    <div className='mp_g_head'>
                        <span className='mp_txt_ttl'>Dota2</span>
                        <span className='mp_txt_icon'><FaStar style={{color:'yellow'}}/>4.8</span>
                    </div>
                    <div className='mp_g_subhead'>
                        <span className='mp_txt_sub'>Steam-X</span>
                        <span className='mp_txt_icon'><FaDownload style={{color: '#ec6090'}}/>2.3M</span>
                    </div>
                </div>
                <div className='mp_g_cnt'>
                    <img src='../assets/popular-04.jpg' alt='popular-1' />
                    <div className='mp_g_head'>
                        <span className='mp_txt_ttl'>CS-GO</span>
                        <span className='mp_txt_icon'><FaStar style={{color:'yellow'}}/>4.8</span>
                    </div>
                    <div className='mp_g_subhead'>
                        <span className='mp_txt_sub'>Legendary</span>
                        <span className='mp_txt_icon'><FaDownload style={{color: '#ec6090'}}/>2.3M</span>
                    </div>
                </div>
                
            </div>
            <div className='mp_r1'>
                <div className='mp_g_cnt'>
                    <img src='../assets/popular-05.jpg' alt='popular-1' />
                    <div className='mp_g_head'>
                        <span className='mp_txt_ttl'>Mini Craft</span>
                        <span className='mp_txt_icon'><FaStar style={{color:'yellow'}}/>4.8</span>
                    </div>
                    <div className='mp_g_subhead'>
                        <span className='mp_txt_sub'>Legendary</span>
                        <span className='mp_txt_icon'><FaDownload style={{color: '#ec6090'}}/>2.3M</span>
                    </div>
                </div>
                <div className='mp_g_cnt'>
                    <img src='../assets/popular-06.jpg' alt='popular-1' />
                    <div className='mp_g_head'>
                        <span className='mp_txt_ttl'>Eagles fly</span>
                        <span className='mp_txt_icon'><FaStar style={{color:'yellow'}}/>4.8</span>
                    </div>
                    <div className='mp_g_subhead'>
                        <span className='mp_txt_sub'>Matrix Games</span>
                        <span className='mp_txt_icon'><FaDownload style={{color: '#ec6090'}}/>2.3M</span>
                    </div>
                </div>
                <div className='mp_g_cnt'>
                    <img src='../assets/popular-07.jpg' alt='popular-1' />
                    <div className='mp_g_head'>
                        <span className='mp_txt_ttl'>Warface</span>
                        <span className='mp_txt_icon'><FaStar style={{color:'yellow'}}/>4.8</span>
                    </div>
                    <div className='mp_g_subhead'>
                        <span className='mp_txt_sub'>Max 3D</span>
                        <span className='mp_txt_icon'><FaDownload style={{color: '#ec6090'}}/>2.3M</span>
                    </div>
                </div>
                <div className='mp_g_cnt'>
                    <img src='../assets/popular-08.jpg' alt='popular-1' />
                    <div className='mp_g_head'>
                        <span className='mp_txt_ttl'>Warcraft</span>
                        <span className='mp_txt_icon'><FaStar style={{color:'yellow'}}/>4.8</span>
                    </div>
                    <div className='mp_g_subhead'>
                        <span className='mp_txt_sub'>legend</span>
                        <span className='mp_txt_icon'><FaDownload style={{color: '#ec6090'}}/>2.3M</span>
                    </div>
                </div>  
            </div>
            <button className='mp_g_btn'>Discover Popular</button>
        </div>

        
    )
}
