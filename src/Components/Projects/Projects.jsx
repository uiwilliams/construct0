import React from 'react'
import './projects.css'
import {HiFilter, HiPlus} from'react-icons/hi'


//importing images
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
// import img7 from '../../Assets/img (7).jpg'
// import img8 from '../../Assets/img (8).jpg'

const Projects = () => {
  return (
    // <div>Projects</div>
    <section className="projects" id="projects">
        <h1 className="heading">Our Projects</h1>

        <div className="containerSize">
            <div className="box-container">

                <a href="../../Assets/img (1).jpg" class="box">
                    <div className="image">
                        <img src={img} alt="Dream Home"/>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>Dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="Plus"><HiPlus className="icon"/></i>
                    </div>
                </a>

                <a href="../../Assets/img (2).jpg" class="box">
                    <div className="image">
                        <img src={img2} alt="Building Construction" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>Dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="Plus"><HiPlus className="icon"/></i>
                    </div>
                </a>

                <a href="../../Assets/img (3).jpg" class="box">
                    <div className="image">
                        <img src={img3} alt="Building Construction" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>Dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="Plus"><HiPlus className="icon"/></i>
                    </div>
                </a>

                <a href="../../Assets/img (4).jpg" class="box">
                    <div className="image">
                        <img src={img4} alt="Building Construction" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>Dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="Plus"><HiPlus className="icon"/></i>
                    </div>
                </a>

                <a href="../../Assets/img (5).jpg" class="box">
                    <div className="image">
                        <img src={img5} alt="Building Construction" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>Dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="Plus"><HiPlus className="icon"/></i>
                    </div>
                </a>

                <a href="../../Assets/img (6).jpg" class="box">
                    <div className="image">
                        <img src={img6} alt="Building Construction" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>Dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="Plus"><HiPlus className="icon"/></i>
                    </div>
                </a>

            </div>

        </div>
        {/* <div className="box-container">

            <a href="../../Assets/img (1).jpg" class="box">
                <div className="image">
                    <img src={img} alt="Dream Home"/>
                </div>
                <div className="content">
                    <div className="info">
                        <h3>Dream home</h3>
                        <p>construction, design</p>
                    </div>
                    <i class="Plus"><HiPlus className="icon"/></i>
                </div>
            </a>

            <a href="../../Assets/img (2).jpg" class="box">
                <div className="image">
                    <img src={img2} alt="Building Construction" />
                </div>
                <div className="content">
                    <div className="info">
                        <h3>Dream home</h3>
                        <p>construction, design</p>
                    </div>
                    <i class="Plus"><HiPlus className="icon"/></i>
                </div>
            </a>

            <a href="../../Assets/img (3).jpg" class="box">
                <div className="image">
                    <img src={img3} alt="Building Construction" />
                </div>
                <div className="content">
                    <div className="info">
                        <h3>Dream home</h3>
                        <p>construction, design</p>
                    </div>
                    <i class="Plus"><HiPlus className="icon"/></i>
                </div>
            </a>

            <a href="../../Assets/img (4).jpg" class="box">
                <div className="image">
                    <img src={img4} alt="Building Construction" />
                </div>
                <div className="content">
                    <div className="info">
                        <h3>Dream home</h3>
                        <p>construction, design</p>
                    </div>
                    <i class="Plus"><HiPlus className="icon"/></i>
                </div>
            </a>

            <a href="../../Assets/img (5).jpg" class="box">
                <div className="image">
                    <img src={img5} alt="Building Construction" />
                </div>
                <div className="content">
                    <div className="info">
                        <h3>Dream home</h3>
                        <p>construction, design</p>
                    </div>
                    <i class="Plus"><HiPlus className="icon"/></i>
                </div>
            </a>

            <a href="../../Assets/img (6).jpg" class="box">
                <div className="image">
                    <img src={img6} alt="Building Construction" />
                </div>
                <div className="content">
                    <div className="info">
                        <h3>Dream home</h3>
                        <p>construction, design</p>
                    </div>
                    <i class="Plus"><HiPlus className="icon"/></i>
                </div>
            </a>

        </div> */}

    </section>
  )
}

export default Projects