import React from 'react'
import "./navbar.css"
import { FaSearch } from "react-icons/fa"
import { RiMenu2Line } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
import { NavLink } from 'react-router-dom'

export default function Navbar() {


  const chng = () => {
    document.getElementById("nav_bar").classList.toggle("chng")
    console.log("hii")
  }

  return (
    <section>
      <nav className="nav_sec">
        <div className="navlogo">
          <img src='./assets/logo.png' alt='logo' />
        </div>
        <div className='nav_mob_btn'>
          <RiMenu2Line onClick={() => { chng() }} name="menu-outline" className='mob_nav_icon' />
          <IoMdClose name="close-outline" className='close-outline mob_nav_icon' />
        </div>
        <div className="navsearchbar">
          <FaSearch />
          <input type="search" placeholder=' Type Something' ></input>
        </div>
        {/* <div className="navlinks"> */}
        <div className="navlinks" id='nav_bar'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/browse'>Browse</NavLink>
          <NavLink to='/details'>Details</NavLink>
          <NavLink to='/stream'>Streams</NavLink>
          <NavLink to='/profile'><button className='nav_pro_btn'>Profile <img src='./assets/profile-header.jpg' className='nav_pro_img' alt='logo' /></button></NavLink>

        </div>
      </nav>
    </section>
  )
}
