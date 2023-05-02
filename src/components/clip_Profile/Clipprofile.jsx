import React from 'react'
import "./clipprofile.css"
import { FaEye, FaPlay } from "react-icons/fa"

export default function Clipprofile() {
    return (
        <div className='clipprofile_cnt'>
            <div className='profile_sec'>
                <div className="pro_img">
                    <img src='./assets/profile.jpg' alt='profile' />
                </div>
                <div className="pro_des">
                    <span>Offline</span>
                    <h4>Alan Smithee</h4>
                    <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
                    <div><button>Start Live Stream</button></div>
                </div>
                <div className="pro_info">
                    <ul>
                        <li>Games Downloaded <span>3</span></li>
                        <li>Friends Online <span>16</span></li>
                        <li>Live Streams <span>None</span></li>
                        <li>Clips <span>29</span></li>
                    </ul>
                </div>
            </div>
            <div className='clip_cnt'>
                <div className="heading_txt">
                    <h2><u>Your Most Popular</u><span> Clips</span></h2>
                </div>
                <div className='clip_sec'>
                    <div className='clip_card'>
                        <img src='../assets/clip-01.jpg' alt='popular-1' />
                        <a href='https://www.youtube.com/watch?v=r1b03uKWk_M' target={'_blank'}><FaPlay className='clip_playbtn' /></a>
                        <div className='clip_card_txt' >
                            <div>First Clip</div>
                            <span><FaEye /><div>250</div></span>
                        </div>
                    </div>
                    <div className='clip_card'>
                        <img src='../assets/clip-02.jpg' alt='popular-1' />
                        <a href='https://www.youtube.com/watch?v=r1b03uKWk_M' target={'_blank'}><FaPlay className='clip_playbtn' /></a>
                        <div className='clip_card_txt' >
                            <div>Second Clip</div>
                            <span><FaEye /><div>183</div></span>
                        </div>
                    </div>
                    <div className='clip_card'>
                        <img src='../assets/clip-03.jpg' alt='popular-1' />
                        <a href='https://www.youtube.com/watch?v=r1b03uKWk_M' target={'_blank'}><FaPlay className='clip_playbtn' /></a>
                        <div className='clip_card_txt' >
                            <div>Third Clip</div>
                            <span><FaEye /><div>141</div></span>
                        </div>
                    </div>
                    <div className='clip_card'>
                        <img src='../assets/clip-04.jpg' alt='popular-1' />
                        <a href='https://www.youtube.com/watch?v=r1b03uKWk_M' target={'_blank'}><FaPlay className='clip_playbtn' /></a>
                        <div className='clip_card_txt' >
                            <div>Fourth Clip</div>
                            <span><FaEye /><div>31</div></span>
                        </div>
                    </div>
                </div>
                <div > <button className='clip_btn' >Load More clips</button></div>

            </div>
        </div>
    )
}
