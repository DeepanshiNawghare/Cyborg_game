import React from 'react'
import "./header.css"
export default function Header() {
    return (
        <div className="header_sec">
            <div className="header_bg">
                <img src="../assets/banner-bg.jpg" alt="" />
            </div>
            <div className="header_txt">
                <h6>Welcome To Cyborg</h6>
                <h4><span>BROWSE</span> OUR POPULAR GAMES HERE</h4>
                <button>Browse Now</button>
            </div>
        </div>

    )
}
