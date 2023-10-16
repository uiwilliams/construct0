import React from 'react'
import './pricing.css'  
import {TbHomeStar} from 'react-icons/tb'
import {FaCity} from 'react-icons/fa'
import {MdOutlineWorkspacePremium} from 'react-icons/md'

const Pricing = () => {
  return (
    // <div>Pricing</div>
    <section className="pricing" id="pricing">

        <h1 className="heading">Our Pricing</h1>

        <div className="box-container">
            
            <div className="box">
                <TbHomeStar className="icon"/>
                <h3>basic plan</h3>
                <div className="price"><span>$</span>300<span>/mo</span></div>
                <div className="list">
                    <p>interior design</p>
                    <p>refurbishment</p>
                    <p>material supply</p>
                    <p>maintenance</p>
                    <p>24/7 support</p>
                </div>
                <a href="#" className="btn">Choose Plan</a>
            </div>

            <div className="box">
                <MdOutlineWorkspacePremium className="icon"/>
                <h3>premiun plan</h3>
                <div className="price"><span>$</span>700<span>/mo</span></div>
                <div className="list">
                    <p>interior design</p>
                    <p>refurbishment</p>
                    <p>material supply</p>
                    <p>maintenance</p>
                    <p>24/7 support</p>
                </div>
                <a href="#" className="btn">Choose Plan</a>
            </div>

            <div className="box">
                <FaCity className="icon"/>
                <h3>ultimate plan</h3>
                <div className="price"><span>$</span>1000<span>/mo</span></div>
                <div className="list">
                    <p>interior design</p>
                    <p>refurbishment</p>
                    <p>material supply</p>
                    <p>maintenance</p>
                    <p>24/7 support</p>
                </div>
                <a href="#" className="btn">Choose Plan</a>
            </div>
        </div>
    </section>
  )
}

export default Pricing