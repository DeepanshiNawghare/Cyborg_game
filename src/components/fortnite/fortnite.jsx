import React from 'react'
import "./fortnite.css"
import { FaPlay, FaStar, FaDownload, FaGamepad } from "react-icons/fa"
import { HiServer } from "react-icons/hi"

export default function Fortnite() {
    return (
        <div className='fortnite_cnt'>
            <div className='fortnite_top'>
                <span className='f_feature_left'>
                    <img src='./assets/feature-left.jpg' alt='fortnite' />
                </span>
                <div className='f_feature_right'>
                    <a href='https://www.youtube.com/watch?v=r1b03uKWk_M' target="_blank" ><FaPlay className='fort_playbtn' /></a>
                    <img src='./assets/feature-right.jpg' alt='fortnite' />
                </div>
            </div>
            <div className='fortnite_main'>
                <div className='fortnite_main_heading'>
                    <h2>FORTNITE DETAILS</h2>
                </div>
                <div className='fortnite_main_cnt' >
                    <div className='fortnite_main_txt' >
                        <span className='fortnite_txt_1'>
                            <div className='mp_g_head'>
                                <span className='mp_txt_ttl'>Fortnite</span>
                                <span className='mp_txt_icon'><FaStar style={{ color: 'yellow' }} /> 4.8</span>
                            </div>
                            <div className='mp_g_subhead'>
                                <span className='mp_txt_sub'>Sandbox</span>
                                <span className='mp_txt_icon'><FaDownload style={{ color: '#ec6090' }} /> 2.3M</span>
                            </div>
                        </span>
                        <span className='fortnite_txt_2'>
                            <ul>
                                <li>
                                    <FaStar style={{ color: 'yellow' }} /><h5>4.8</h5>
                                </li>
                                <li>
                                    <FaDownload /><h5>2.3 M</h5>
                                </li>
                                <li>
                                    <HiServer /><h5>36 GB</h5>
                                </li>
                                <li>
                                    <FaGamepad /><h5>Action</h5>
                                </li>

                            </ul>
                        </span>
                    </div>
                    <div className='fortnite_main_img'>
                        <img src='./assets/details-01.jpg' alt='details fortnite' />
                        <img src='./assets/details-02.jpg' alt='details fortnite' />
                        <img src='./assets/details-03.jpg' alt='details fortnite' />
                    </div>
                    <div className='fortnite_btn_txt'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae voluptatibus odio magnam doloribus fuga neque, impedit nisi illo in voluptates distinctio nemo quia sapiente accusamus praesentium, enim reiciendis corporis fugit molestias. Reiciendis repudiandae laboriosam laborum provident dignissimos saepe culpa, consequatur quaerat, inventore similique, ab minus at accusantium? Laboriosam, incidunt ratione!</p>
                        <button>Download Fortnite Now!</button>
                    </div>
                </div>
            </div>
        </div>


    )
}
