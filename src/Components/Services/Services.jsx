import React, { Component, useEffect } from 'react'
import './services.css'

//importing images
import img9 from '../../Assets/img (9).jpg'
import img10 from '../../Assets/img (10).jpg'
import img11 from '../../Assets/img (11).jpg'
import img12 from '../../Assets/img (12).png'
import img13 from '../../Assets/img (13).png'
import img14 from '../../Assets/img (14).png'
import img15 from '../../Assets/img (15).jpg'
import img16 from '../../Assets/img (16).jpg'

const Services = () => {
  return (

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js";
    //     script.integrity="sha512-b4rL1m5b76KrUhDkj2Vf14Y0l1NtbiNXwV+SzOzLGv6Tz1roJHa70yr8RmTUswrauu2Wgb/xBJPR8v80pQYKtQ==";
    //     script.crossOrigin="anonymous" 
    //     document.body.appendChild(script)
    //     return () => {
    //         document.body.removeChild(script);
    //     };
    // }, []);

    // componentDidMount () {
    //     const script = document.createElement("script");

    //     script.src = "https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js" integrity="sha512-b4rL1m5b76KrUhDkj2Vf14Y0l1NtbiNXwV+SzOzLGv6Tz1roJHa70yr8RmTUswrauu2Wgb/xBJPR8v80pQYKtQ==" crossorigin="anonymous" referrerpolicy="no-referrer";
    //     script.async = true;

    //     document.body.appendCHild(script);

    // }

    <section className="services" id="services">

        <h1 className="heading"> our services</h1>

        <div className="box-container">

            <div className="box">
                <img src={img9} alt="Building Construction" />
                <h3>Building Construction</h3>
                <p>Front-End Engineering Design, Estimating Services, Detailed Engineering Design.</p>
            </div>

            <div className="box">
                <img src={img10} alt="House Renovation" />
                <h3>House Renovation</h3>
                <p>Safety Checks, Asset Repairs, Minor Repairs, Cleaning, Rodent Control.</p>
            </div>

            <div className="box">
                <img src={img11} alt="Architectural Design" />
                <h3>Architectural Design</h3>
                <p>Building Plans, Design Modification, Initial Estimate, Interior Structures.</p>
            </div>

            <div className="box">
                <img src={img12} alt="Material Supply" />
                <h3>Material Supply</h3>
                <p>Sourcing, Raw Materials, Semi-finished Products, Additives, Parts, Small tools.</p>
            </div>

            <div className="box">
                <img src={img13} alt="Construction Supply" />
                <h3>Construction Supply</h3>
                <p>General Assistants, Technical Assistants, Project Feasibility, Labour & Insurance Cost.</p>
            </div>

            <div className="box">
                <img src={img14} alt="Interior Design" />
                <h3>Interior Design</h3>
                <p>Plan, Research, Coordinate and Manage Enhancement Projects. Conceptual Development.</p>
            </div>

            <div className="box">
                <img src={img15} alt="Building Maintenance" />
                <h3>Building Maintenance</h3>
                <p>Inspection, Repairs, Maintenance: Structural Maintenance, Electrical Systems.</p>
            </div>

            <div className="box">
                <img src={img16} alt="Building Renovation" />
                <h3>Building Renovation</h3>
                <p>Installation, Repairs, Replacement, Building Systems,.</p>
            </div>

            

        </div>

    </section>
  )
}

export default Services