import React from 'react'
import "./carouselfeature.css"
import { FaStar, FaDownload } from "react-icons/fa"

export default function Carouselfeature() {
    return (
        <div>
            <div className='f_cnt1_main' >
                <div className='f_g_cnt'>
                    <img src='../assets/featured-01.jpg' alt='faetured game-1' />
                    <div className='hover_h6'><h6>2.4k Streaming</h6></div>
                    <div className='f_g_head'>
                        <span className='mp_txt_ttl'>CS-Go</span>
                        <span className='mp_txt_icon'><FaStar style={{ color: 'yellow' }} /> 4.8</span>
                    </div>
                    <div className='f_g_subhead'>
                        <span className='mp_txt_sub'>249K Downloads</span>
                        <span className='mp_txt_icon'><FaDownload style={{ color: '#ec6090' }} /> 2.3M</span>
                    </div>
                </div>
                <div className='f_g_cnt'>
                    <img src='../assets/featured-02.jpg' alt='faetured game-1' />
                    <div className='hover_h6'><h6>2.4k Streaming</h6></div>
                    <div className='f_g_head'>
                        <span className='mp_txt_ttl'>CS-Go</span>
                        <span className='mp_txt_icon'><FaStar style={{ color: 'yellow' }} /> 4.8</span>
                    </div>
                    <div className='f_g_subhead'>
                        <span className='mp_txt_sub'>249K Downloads</span>
                        <span className='mp_txt_icon'><FaDownload style={{ color: '#ec6090' }} /> 2.3M</span>
                    </div>
                </div>
                <div className='f_g_cnt'>
                    <img src='../assets/featured-03.jpg' alt='faetured game-1' />
                    <div className='hover_h6'><h6>2.4k Streaming</h6></div>
                    <div className='f_g_head'>
                        <span className='mp_txt_ttl'>CS-Go</span>
                        <span className='mp_txt_icon'><FaStar style={{ color: 'yellow' }} /> 4.8</span>
                    </div>
                    <div className='f_g_subhead'>
                        <span className='mp_txt_sub'>249K Downloads</span>
                        <span className='mp_txt_icon'><FaDownload style={{ color: '#ec6090' }} /> 2.3M</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
