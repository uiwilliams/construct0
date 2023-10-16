import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    // <div>Contact</div>
    <secton className="contact" id="contact">

      {/* <div className="formBoundary"> */}
        <h1 className="heading"> Contact Us</h1>
        <div className="row">
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.8608332352046!2d-123.1211024890987!3d49.241127673578156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674ddac02907b%3A0xf1491a37039ed2d0!2sCanada%20Line%20-%20SkyTrain%2C%20Metro%20Vancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2scm!4v1697268595562!5m2!1sen!2scm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
          <form action="">
              <h3>Get In Touch</h3>
              <input type="text" placeholder="Name" className="box"/>
              <input type="email" placeholder="email" className="box"/>
              <input type="tel" placeholder="Phone" className="box"/>
              <textarea name="" placeholder="message" className="box" id="" cols="30" rows="10"></textarea>
              <input type="submit" value="send message" class="btn"/>
          </form>

        </div>
      {/* </div> */}



    </secton>
  )
}

export default Contact