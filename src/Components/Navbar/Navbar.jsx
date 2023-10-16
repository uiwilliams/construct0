import React, {useState} from 'react'
import './navbar.css'
// import { Link } from 'react-router-dom'

import {MdOutlineConstruction} from 'react-icons/md'
import {AiFillCloseCircle, AiFillLinkedin, AiOutlineClose} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import {FaEnvelope, FaPhone, FaUser} from 'react-icons/fa'
import {FaSearch} from 'react-icons/fa'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  // Function to toggle navbar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  // Function to remove navbar
  const removeNavbar = ()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className="header flex">

        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineConstruction className="icon"/> Construct<span>CARE</span></h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">HOME</a>
            </li>
            
            {/* <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li> */}
            
            {/* <li className="navItem">
              <a href="#" className="navLink">SERVICES</a>
            </li> */}

            <li className="navItem">
              <a href="/services" className="navLink">SERVICES <i className="fas fa-caret-down"></i></a>

              <div className="dropdown__menu">
                <ul>
                  <li><a href="#">Job Requests<i className="fas fa-caret-right"></i></a>
                  
                    <div className="dropdown__menu-1">
                      <ul>
                        <li><a href="#">Accounting</a></li>
                        <li><a href="#">Appraiser</a></li>
                        <li><a href="#">Capenter</a></li>
                        <li><a href="#">Cement-applicator</a></li>
                        <li><a href="#">Clammy</a></li>
                        <li><a href="#">Construction contractor</a></li>
                        <li><a href="#">Decontaminer</a></li>
                        <li><a href="#">Designer</a></li>
                        <li><a href="#">Editor (shelter)</a></li>
                        <li><a href="#">Electrician</a></li>
                        <li><a href="#">Fitter</a></li>
                        <li><a href="#">House keeper</a></li>
                        <li><a href="#">Inspector</a></li>
                        <li><a href="#">Lawyer</a></li>
                        <li><a href="#">Locksmith</a></li>
                        <li><a href="#">Mason/bricklayer</a></li>
                        <li><a href="#">Mortgage broker</a></li>
                        <li><a href="#">Mover</a></li>
                        <li><a href="#">Painter</a></li>
                        <li><a href="#">Photographer</a></li>
                        <li><a href="#">Plumber</a></li>
                        <li><a href="#">Roofer</a></li>
                        <li><a href="#">Survellance camera</a></li>
                        <li><a href="#">Tiler</a></li>
                        <li><a href="#">Travel agent</a></li>
                      </ul>
                    </div>
                  
                  </li>
                  <li><a href="#">Cities</a></li>
                </ul>
              </div>
            </li>
            
            <li className="navItem">
              <a href="/projects" className="navLink">PROJECTS</a>
            </li>
            
            <li className="navItem">
              <a href="/pricing" className="navLink">PRICING</a>
            </li>

            {/* <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li> */}

            <li className="navItem">
              <a href="/blog" className="navLink">BLOG</a>
            </li>

            {/* <button className='btn'>
              <a href="#">BOOK NOW</a>
            </button> */}
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
          <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        
        <div className="navIcons flex">
          <div id="info-btn"><BsFillInfoCircleFill className="faInfo"/></div>
          <div id="contact-btn"><FaUser className="faUser"/></div>
          <div id="search-btn"><FaSearch className="faSearch"/></div>

          <div onClick={showNav} className="toggleNavbar"><TbGridDots className="icon"/></div>

        </div>

        <form action="" className="search-form">
          <input type="search" name="" placeholder="search here..." id="search-box" />
          <label htmlFor="search-box" className="faSearch"><FaSearch className="faSearch"/></label>
        </form>

        <form action="" className="login-form">
          <h3>login form</h3>
          <input type="email" placeholder="enter your email" class="box"/>
          <input type="password" placeholder="enter your password" class="box"/>
          <div class="flex">
            <input type="checkbox" name="" id="remember-me"/>
            <label htmlFor="remember-me">remember-me</label>
            <a href="#">forgot password</a>
          </div>
          <input type="submit" value="login now" className="btnSubmit"/>
          <p>don't have an account <a href="#">create one!</a></p>
        </form>

        <div className="contact-info">

          <div id="closeContactInfo"><AiOutlineClose className="icon"/></div>
          
          <div className="info">
            <i className="contactPhoneNumber"><FaPhone className="faSearch"/></i>
            <h3>Phone Number</h3>
            <p>+237 678 14 02 92</p>
            <p>+237 678 14 02 93</p>
          </div>

          <div className="info">
            <i className="contactEmail"><FaEnvelope className="faSearch"/></i>
            <h3>Email Address</h3>
            <p>uiwilliamscmr@gmail.com</p>
            <p>uiwilliams@gmail.com</p>
          </div>

          <div className="info">
            <i className="contactEmail"><HiOutlineLocationMarker className="faSearch"/></i>
            <h3>Office Address</h3>
            <p>Simbock, Yaounde</p>
            <p>Cameroon</p>
          </div>
          
          <div className="share">
            <a href="#" className="facebookIcon"><FiFacebook className="faContactSearch"/></a>
            <a href="#" className="twitterIcon"><FiTwitter className="faContactSearch"/></a>
            <a href="#" className="instagramIcon"><FiInstagram className="faContactSearch"/></a>
            <a href="#" className="linkedinIcon"><AiFillLinkedin className="faContactSearch"/></a>
          </div>
        </div>

          
      </header>
    </section>
  )
}

export default Navbar