import React from 'react'
import "./featured.css"
import { FaStar, FaDownload } from "react-icons/fa"
import Carouselfeature from './Carouselfeature'

export default function Featured() {
    return (
        <div className='featured_cnt' >
            <div className='featured_cnt_1'>
                <div className="heading_txt">
                    <h2><u>Featured</u><span> Games
                    </span></h2>
                </div>
                <Carouselfeature/>
            </div>
            <div className="featured_cnt_2">
                <div className="heading_txt">
                    <h2><u>Top</u><span> Downloaded
                    </span></h2>
                </div>
                <ul>
                    <li className='featured_cnt2_g'>
                        <img src='./assets/game-01.jpg' alt='game 1' />
                        <div className='featured_cnt2_txt'>
                            <div>
                                <h4>Fortnite</h4>
                                <h5>Sandbox</h5>
                                <div className="f_cnt2_icn" >
                                    <span><FaStar style={{ color: 'yellow' }} />4.9</span>
                                    <span><FaDownload style={{ color: '#ec6090' }} />2.2M</span>
                                </div>
                            </div>
                            <div className="f_cnt2_icn_d"><FaDownload style={{ color: '#ec6090' }} /></div>
                        </div>
                    </li>
                    <li className='featured_cnt2_g'>
                        <img src='./assets/game-02.jpg' alt='game 1' />
                        <div className='featured_cnt2_txt'>
                            <div>
                                <h4>CS-GO</h4>
                                <h5>Legendary</h5>
                                <div className="f_cnt2_icn" >
                                    <span><FaStar style={{ color: 'yellow' }} />4.9</span>
                                    <span><FaDownload style={{ color: '#ec6090' }} />2.2M</span>
                                </div>
                            </div>
                            <div className="f_cnt2_icn_d"><FaDownload style={{ color: '#ec6090' }} /></div>
                        </div>
                    </li>
                    <li className='featured_cnt2_g'>
                        <img src='./assets/game-03.jpg' alt='game 1' />
                        <div className='featured_cnt2_txt'>
                            <div>
                                <h4>PugG</h4>
                                <h5>Battle Royale</h5>
                                <div className="f_cnt2_icn" >
                                    <span><FaStar style={{ color: 'yellow' }} />4.9</span>
                                    <span><FaDownload style={{ color: '#ec6090' }} />2.2M</span>
                                </div>
                            </div>
                            <div className="f_cnt2_icn_d"><FaDownload style={{ color: '#ec6090' }} /></div>
                        </div>
                    </li>
                </ul>
                <div className='view_btn' >
                    <a href='*'>View All Games</a>
                </div>


            </div>
        </div>
    )
}
