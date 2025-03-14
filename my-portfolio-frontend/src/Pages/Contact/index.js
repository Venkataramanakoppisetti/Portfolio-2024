import React from 'react';
import PageHeader from '../../Components/PageHeader';
import { RiContactsFill } from "react-icons/ri";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import './index.css';

const Contact = () => {
  return (
    <>
      <section className="contact-container" id='contact'>
        <PageHeader 
          headerText = "Contact Me"
          icon = {<RiContactsFill size={40}/>}
        />
      </section>
      <section class="contact-section">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or WhatsApp.</p>

        <div class="contact-buttons">
          <a href="mailto:venkataramanakoppisetti25@gmail.com" class="contact-button email-button">
          <FaEnvelope className="text-xl" />
          </a>
          <a href="https://wa.me/9652812397" class="contact-button whatsapp-button">
          <FaWhatsapp className="text-xl" />
          </a>
        </div>

        <div class="contact-form">
          <form>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your Name"/>

            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Your Email"/>

            <label for="message">Message</label>
            <textarea id="message" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

    </>
    
  )
}

export default Contact
