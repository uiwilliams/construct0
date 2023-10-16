import React from 'react'
import './reviews.css'
import {AiFillStar} from 'react-icons/ai'

// import images
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'

const Reviews = () => {
  return (
    // <div>Reviews</div>

    // slider review
    // var swiper = new Swiper(".reviews-slider", {
    //     loop:true,
    //     grabCursor:true,
    //     spaceBetween: 20,
    //     breakpoints: {
    //         640: {
    //             slidesPerView: 1,
    //         },
    //         768: {
    //             slidesPerView: 2,
    //         },
    //         1024: {
    //             slidesPerView: 3,
    //         },
    //     },
    // });


    <section className="reviews">

        <h1 className="heading">Client Reviews</h1>

        <div className="swiper reviews-slider">
            <div className="swiper-wrapper">
                
                <div className="swiper-slide slide">
                    <p>When the compound subject contains both a singular and a plural noun joined by or or nor, the verb agrees with the part of the subject that is closer the verb.</p>
                    <div className="user">
                        <img src={img} alt="Customer review1" />
                        <div className="info">
                            <h3>John Alex</h3>
                            <div className="stars">
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="swiper-slide slide">
                    <p>When the compound subject contains both a singular and a plural noun joined by or or nor, the verb agrees with the part of the subject that is closer the verb.</p>
                    <div className="user">
                        <img src={img2} alt="Customer review2" />
                        <div className="info">
                            <h3>John Alex</h3>
                            <div className="stars">
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="swiper-slide slide">
                    <p>When the compound subject contains both a singular and a plural noun joined by or or nor, the verb agrees with the part of the subject that is closer the verb.</p>
                    <div className="user">
                        <img src={img3} alt="Customer review3" />
                        <div className="info">
                            <h3>John Alex</h3>
                            <div className="stars">
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="swiper-slide slide">
                    <p>When the compound subject contains both a singular and a plural noun joined by or or nor, the verb agrees with the part of the subject that is closer the verb.</p>
                    <div className="user">
                        <img src={img4} alt="Customer review4" />
                        <div className="info">
                            <h3>John Alex</h3>
                            <div className="stars">
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="swiper-slide slide">
                    <p>When the compound subject contains both a singular and a plural noun joined by or or nor, the verb agrees with the part of the subject that is closer the verb.</p>
                    <div className="user">
                        <img src={img5} alt="Customer review5" />
                        <div className="info">
                            <h3>John Alex</h3>
                            <div className="stars">
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="swiper-slide slide">
                    <p>When the compound subject contains both a singular and a plural noun joined by or or nor, the verb agrees with the part of the subject that is closer the verb.</p>
                    <div className="user">
                        <img src={img6} alt="Customer review6" />
                        <div className="info">
                            <h3>John Alex</h3>
                            <div className="stars">
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                                <AiFillStar className="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reviews