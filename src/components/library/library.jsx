import React from 'react'
import "./library.css"
export default function Library() {
    return (
        <div className='library_sec'>
            <div className="heading_txt">
                <h2><u>Your Gaming</u><span> Library
                </span></h2>
            </div>
            <div className='library_cnt'>
                <div className='library_cnt_card'>
                    <div className='library_cnt_img'>
                        <img src='../assets/game-01.jpg' alt='game 1' />
                        <div className='library_card_txt'>
                            <h4>Dota 2</h4>
                            <span>Sandbox</span>
                        </div>
                    </div>
                    <ul className='library_cnt_txt'>
                        <li className='library_card_txt'>
                            <h4>Data Added</h4>
                            <span>24/08/2036</span>
                        </li>
                        <li className='library_card_txt'>
                            <h4>Hours Played</h4>
                            <span>634 H 22 Mins</span>
                        </li>
                        <li className='library_card_txt'>
                            <h4>Currently</h4>
                            <span>Downloaded</span>
                        </li>
                        <li className='library_card_txt'>
                            <button>Downloaded</button>
                        </li>
                    </ul>
                </div>
                <div className='library_cnt_card'>
                    <div className='library_cnt_img'>
                        <img src='./assets/game-02.jpg' alt='game 2' />
                        <div className='library_card_txt'>
                            <h4>Fortnite</h4>
                            <span>Sandbox</span>
                        </div>
                    </div>
                    <ul className='library_cnt_txt'>
                        <li className='library_card_txt'>
                            <h4>Data Added</h4>
                            <span>22/06/2036</span>
                        </li>
                        <li className='library_card_txt'>
                            <h4>Hours Played</h4>
                            <span>740 H 52 Mins</span>
                        </li>
                        <li className='library_card_txt'>
                            <h4>Currently</h4>
                            <span>Downloaded</span>
                        </li>
                        <li className='library_card_txt'>
                            <button>Downloaded </button>
                        </li>
                    </ul>
                </div>
                <div className='library_cnt_card'>
                    <div className='library_cnt_img'>
                        <img src='./assets/game-03.jpg' alt='game 3' />
                        <div className='library_card_txt'>
                            <h4>CS-GO</h4>
                            <span>Sandbox</span>
                        </div>
                    </div>
                    <ul className='library_cnt_txt'>
                        <li className='library_card_txt'>
                            <h4>Data Added</h4>
                            <span>21/04/2036</span>
                        </li>
                        <li className='library_card_txt'>
                            <h4>Hours Played</h4>
                            <span>892 H 14 Mins</span>
                        </li>
                        <li className='library_card_txt'>
                            <h4>Currently</h4>
                            <span>Downloaded</span>
                        </li>
                        <li className='library_card_txt'>
                            <button>Downloaded</button>
                        </li>
                    </ul>
                </div>
            </div>
            <button className='clip_btn'>View Your Library</button>
        </div>
    )
}
