import React from 'react'
import "./Startstream.css"

export default function Startstream() {
    return (
        <div className='startstream_cnt' >
            <div className="heading_txt startstrm_head">
                <h2><u>How To Start Your</u><span> Live Stream</span></h2>
            </div>
            <div className='startstrm_sec' >
                <div className='startstrm_card'>
                    <img src='./assets/service-01.jpg' alt='service'/>
                    <h4>Go To Your Profile</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsa ullam illum quam quos est!</p>
                </div>
                <div className='startstrm_card'>
                    <img src='./assets/service-02.jpg' alt='service'/>
                    <h4>Live Stream Button</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae vel eligendi veritatis commodi dicta?</p>
                </div>
                <div className='startstrm_card'>
                    <img src='./assets/service-03.jpg' alt='service'/>
                    <h4>You Are Live</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, tempore. Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div><button className='ss_btn'>Go to Profile</button> </div>
        </div>
    )
}
