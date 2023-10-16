import React from 'react'
import './about.css'
import video from '../../Assets/video (1).mp4'

const About = () => {
  return (
    
    <section className="about" id="about">
      <h1 className="heading">About Us</h1>

      <div className="row"> 

        <div className="videoDiv">
            <video src={video} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="content">
          <h3>We will provide you the best work which you dreamt for</h3>
          <p>
          When the compound subject contains both a singular and a plural noun joined by or or nor, the verb agrees with the part of the subject that is closer the verb.
          My sisters or my mother is going to make me a dress. My mother or my sisters are going to make me a dress.
          </p>
          <button className='btn'>
            <a href="#">read more</a>
          </button>
        </div>

      </div>

      <div className="box-container">
        <div className="box">
          <h3>10+</h3>
          <p>years of experience</p>
        </div>

        <div className="box">
          <h3>1500+</h3>
          <p>projects completed</p>
        </div>

        <div className="box">
          <h3>900+</h3>
          <p>satisfied customers</p>
        </div>

        <div className="box">
          <h3>300+</h3>
          <p>active workers</p>
        </div>
      </div>

    </section>
  )
}

export default About 