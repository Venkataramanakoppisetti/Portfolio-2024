import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Animate} from 'react-simple-animate';
import './index.css';

const Home = () => {

  const navigation = useNavigate();

  const handleNavigateToContactMePage   = () => {
    navigation('/contact')
  }
  return (
    <section id='home' className="home-container">
      <div className="text-wrapper">
        <h1 className='home-text'>
          Hello, I'm Venkataramana
          <br/>
          Fullstack Developer
        </h1>
        </div>
        <Animate 
          play 
          duration={1.5} 
          delay={1} 
          start={{
            transform: 'translateY(550px)'
          }} 

          end={{
            transform: 'translateX(0px)'
          }}
        >
          <div className="button-container">
            <button className="contact-me-button" onClick={handleNavigateToContactMePage}>
              Hire Me
            </button>
          </div>
        </Animate>
        
    </section>
  )
}

export default Home
