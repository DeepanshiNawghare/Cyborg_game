import React from 'react'
import "./navbar.css"
import { FaSearch } from "react-icons/fa"
import { RiMenu2Line } from "react-icons/ri"
import { NavLink } from 'react-router-dom'

export default function Navbar() {


  const chng = () => {
    document.getElementById("nav_bar").classList.toggle("chng")

  }

  return (
    <section>
      <nav className="nav_sec">
        <div className="navlogo">
          <img src='./assets/logo.png' alt='logo' />
        </div>
        <div className='nav_mob_btn'>
          <RiMenu2Line onClick={() => { chng() }} name="menu-outline" className='mob_nav_icon' />
        </div>
        <div className="navsearchbar">
          <FaSearch />
          <input type="search" placeholder=' Type Something' ></input>
        </div>
        <div className="nav_show" id='nav_bar'>
          <div className="navlinks" >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/browse'>Browse</NavLink>
            <NavLink to='/details'>Details</NavLink>
            <NavLink to='/stream'>Streams</NavLink>
            <NavLink to='/profile'><button className='nav_pro_btn'>Profile <img src='./assets/profile-header.jpg' className='nav_pro_img' alt='logo' /></button></NavLink>
          </div>
        </div>
      </nav>
    </section>
  )
}
