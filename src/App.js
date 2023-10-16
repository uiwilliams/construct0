import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Pricing from './Components/Pricing/Pricing'
import Contact from './Components/Contact/Contact'
import Reviews from './Components/Reviews/Reviews'
import Projects from './Components/Projects/Projects'
import Blog from './Components/Blog/Blog'

const App = () => {
  return (
    <>
    
    <Router>
      {/* <div> */}
        <Navbar/>
        {/* <Link to="/">HOME</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/pricing">PRICING</Link>
        <Link to="/blog">BLOG</Link> */}
      {/* </div> */}
    
      <Routes>
        <Route path="/" element={<><Home /><Main /><Reviews /><Contact /></>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/pricing" element={<><Pricing/><Contact/></>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="*" element={<h1>Oops!!! Page Not Found, use navigation links above!</h1>}/>
      </Routes>
    </Router>
    <Blog/>
    <Footer/> 
    {/* <Navbar/>
    <Home/>
    <Main/>
    <Services/>
    <Projects/>
    <Reviews/>
    <Pricing/>
    <About/>
    <Contact/>
    <Blog/>
    <Footer/> */}
    </>
  )
}

export default App