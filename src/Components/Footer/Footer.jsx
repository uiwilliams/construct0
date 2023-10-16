import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video (2).mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineConstruction} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {LuConstruction} from'react-icons/lu'
import {FiChevronRight} from 'react-icons/fi'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  // creating a react hook to add scroll animation...
    useEffect(()=>{
      Aos.init ({duration: 2000})
    }, [])


  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Work with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
                  SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineConstruction className="icon"/> Construct<span>CARE</span>
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            At 'Construct.', we observe a wide range of packages and subscription plans for your utmost convenience. Whatever your budget, there will always be an accomodated service for you. We are aware our environment cuts across all facets and economic range, this is why our customers enjoy unreserved satisfaction over the years, because we are here -we keep our promises!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <LuConstruction className="icon"/>
            </div>
          </div>

          <div className="footerLinks grid">

              {/* Group one */}
              <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Job Tour
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
                </li>

              </div>

              {/* Group Two */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  J.Berger Ltd
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Rent.Machines
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  SurveyEngines
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  JBLandscaping
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  BuildAdvisor
                </li>

              </div>

              {/* Group Three */}
              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Montreal
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Chambly
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Hampstead
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Senneville
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Westmount
                </li>

              </div>
          </div>
          
          <div className="footerDiv flex">
            <small>CONSTRUCTION SAMPLE WEBSITE</small>
            <small>COPYRIGHTS RESERVED - UIWILLIAMS</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer