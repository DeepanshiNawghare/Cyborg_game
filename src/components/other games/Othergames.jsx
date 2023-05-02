import React from 'react'
import "./othergames.css"
import { FaStar, FaDownload } from "react-icons/fa"

export default function Othergames() {
    return (
        <div className='othergames_sec'>
            <div className="heading_txt">
                <h2><u>Other Related</u><span> Games</span></h2>
            </div>
            <div className='othergame_cnt'>
                <div className='othergame_cnt_sec' >
                    <ul className='other_cnt_card'>
                        <li>
                            <img src='./assets/game-01.jpg' alt='game 1' />
                        </li>
                        <li className='other_card_txt'>
                            <div className='other_card_head'>
                                <span className='other_card_txt_ttl'>Fortnite</span>
                                <span className='other_card_txt_icon'><FaStar style={{ color: 'yellow' }} /> 4.8</span>
                            </div>
                            <div className='other_card_subhead'>
                                <span className='other_card_sub'>Sandbox </span>
                                <span className='other_card_txt_icon'> <FaDownload style={{ color: '#ec6090' }} /> 2.3M</span>
                            </div>
                        </li>
                    </ul>
                    <ul className='other_cnt_card'>
                        <li>
                            <img src='./assets/game-02.jpg' alt='game 1' />
                        </li>
                        <li className='other_card_txt'>
                            <div className='other_card_head'>
                                <span className='other_card_txt_ttl'>Fortnite</span>
                                <span className='other_card_txt_icon'><FaStar style={{ color: 'yellow' }} /> 4.8</span>
                            </div>
                            <div className='other_card_subhead'>
                                <span className='other_card_sub'>Sandbox </span>
                                <span className='other_card_txt_icon'> <FaDownload style={{ color: '#ec6090' }} /> 2.3M</span>
                            </div>
                        </li>
                    </ul>
                    <ul className='other_cnt_card'>
                        <li>
                            <img src='./assets/game-03.jpg' alt='game 1' />
                        </li>
                        <li className='other_card_txt'>
                            <div className='other_card_head'>
                                <span className='other_card_txt_ttl'>Fortnite</span>
                                <span className='other_card_txt_icon'><FaStar style={{ color: 'yellow' }} /> 4.8</span>
                            </div>
                            <div className='other_card_subhead'>
                                <span className='other_card_sub'>Sandbox </span>
                                <span className='other_card_txt_icon'> <FaDownload style={{ color: '#ec6090' }} /> 2.3M</span>
                            </div>
                        </li>
                    </ul>
                   
                </div>
                <div className='othergame_cnt_sec' >
                    <ul className='other_cnt_card'>
                        <li>
                            <img src='./assets/game-03.jpg' alt='game 1' />
                        </li>
                        <li className='other_card_txt'>
                            <div className='other_card_head'>
                                <span className='other_card_txt_ttl'>Fortnite</span>
                                <span className='other_card_txt_icon'><FaStar style={{ color: 'yellow' }} /> 4.8</span>
                            </div>
                            <div className='other_card_subhead'>
                                <span className='other_card_sub'>Sandbox </span>
                                <span className='other_card_txt_icon'> <FaDownload style={{ color: '#ec6090' }} /> 2.3M</span>
                            </div>
                        </li>
                    </ul>
                    <ul className='other_cnt_card'>
                        <li>
                            <img src='./assets/game-02.jpg' alt='game 1' />
                        </li>
                        <li className='other_card_txt'>
                            <div className='other_card_head'>
                                <span className='other_card_txt_ttl'>Fortnite</span>
                                <span className='other_card_txt_icon'><FaStar style={{ color: 'yellow' }} /> 4.8</span>
                            </div>
                            <div className='other_card_subhead'>
                                <span className='other_card_sub'>Sandbox </span>
                                <span className='other_card_txt_icon'> <FaDownload style={{ color: '#ec6090' }} /> 2.3M</span>
                            </div>
                        </li>
                    </ul>
                    <ul className='other_cnt_card'>
                        <li>
                            <img src='./assets/game-01.jpg' alt='game 1' />
                        </li>
                        <li className='other_card_txt'>
                            <div className='other_card_head'>
                                <span className='other_card_txt_ttl'>Fortnite</span>
                                <span className='other_card_txt_icon'><FaStar style={{ color: 'yellow' }} /> 4.8</span>
                            </div>
                            <div className='other_card_subhead'>
                                <span className='other_card_sub'>Sandbox </span>
                                <span className='other_card_txt_icon'> <FaDownload style={{ color: '#ec6090' }} /> 2.3M</span>
                            </div>
                        </li>
                    </ul>
                   
                </div>
                
            </div>
        </div>
    )
}
