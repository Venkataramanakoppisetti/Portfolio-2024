import React from 'react'
import PageHeader from '../../Components/PageHeader';
import {BsInfoCircleFill} from 'react-icons/bs';
import {Animate} from 'react-simple-animate';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import './index.css'
const personalDetails = [
  {
    label: "Name",
    value: "Venkata Ramana"
  },
  {
    label: "Age",
    value: 26,
  },
  {
    label: "Address",
    value: "India"
  },
  {
    label: "Email",
    value: "venkataramanakoppisetti25@gmail.com"
  },
  {
    label: "Phone No",
    value: "+91 9652812397"
  }
]
const About = () => {
  return (
    <section className="about-container" id='about'>
      <PageHeader 
        headerText = "About Me"
        icon = {<BsInfoCircleFill size={40}/>}
      />
      <div className="about">
        <div className="personal">
          <Animate 
            play 
            duration={1.5} 
            delay={1} 
            start={{
              transform: 'translateX(-900px)'
            }} 

            end={{
              transform: 'translateX(0px)'
            }}>
              <h3 className='about-heading'>Fullstack Developer</h3>
              <p className='about-summary'>
                Hello! I’m Venkata Ramana, a Full Stack Developer passionate about building innovative and user-friendly web applications.
                My journey into programming began out of curiosity, and since then, I have immersed myself in both front-end and back-end development,
                allowing me to create seamless digital experiences. With skills in HTML, CSS, JavaScript, Node.js, Express, React JS, Python, SQL and MongoDb,
                I enjoy translating ideas into responsive interfaces and robust server-side logic. I hold an MCA degree from Jawaharlal Nehru Technological University,
                where I built a strong foundation in computer science, but my true passion lies in applying these concepts to solve real-world problems.Recently,
                I worked as a Technical Support Engineer at NxtWave in Hyderabad, where I configured software and hardware systems for optimal performance, 
                resolved production issues to ensure business continuity, and created technical content to enhance knowledge sharing. I also automated tasks through scripting,
                managed AWS repositories, and used Amazon S3 for efficient data management. My hands-on experience has equipped me with a practical understanding of development 
                and deployment processes.Outside of coding, I love exploring the latest tech trends, contributing to open-source projects, and working on personal projects that push my boundaries.
                I’m always eager to learn new tools and frameworks, and I thrive in collaborative environments. I’m actively seeking opportunities to contribute to exciting projects, grow as a developer,
                and tackle new challenges. Let’s connect if you have a project or idea to discuss!
              </p>
          </Animate>
          <Animate 
          play 
          duration={1.5} 
          delay={1} 
          start={{
            transform: 'translateX(-500px)'
          }} 

          end={{
            transform: 'translateX(0px)'
          }}>
            <h3 className='about-personal-heading'>Personal Details</h3>
            <ul className='personal-details'>
              {
                personalDetails.map((eachDetail,index) => (
                  <li className='each-detail' key={index}>
                    <span className='title'>{eachDetail.label}</span>
                    <span className='title'>:</span>
                    <span className='value'>{eachDetail.value}</span>
                  </li>
                ))
              }
            </ul>
            
          </Animate>
        </div>
        <div className="about-services">
        <Animate 
          play 
          duration={1.5} 
          delay={1} 
          start={{
            transform: 'translateX(600px)'
          }} 

          end={{
            transform: 'translateX(0px)'
          }}>
              <div className="services-container">
              <div className='first-icon'>
                <FaHtml5 color='var(--yellow-theme-main-color)' size={40} />
              </div>
              <div className='second-icon'>
                <FaCss3 color='var(--yellow-theme-main-color)' size={40} />
              </div>
              <div className='third-icon'>
                <FaJs color='var(--yellow-theme-main-color)' size={40} />
              </div>
              <div className='fourth-icon'>
                <FaPython color='var(--yellow-theme-main-color)' size={40} />  
              </div>
              <div className='fifth-icon'>
                <FaNodeJs color='var(--yellow-theme-main-color)' size={40} />
              </div>
              <div className='sixth-icon'>
                <GrReactjs color='var(--yellow-theme-main-color)' size={40} />
              </div>
              <div className='seventh-icon'>
                <FaDatabase color='var(--yellow-theme-main-color)' size={40} />
              </div>
              <div className='eighth-icon'>
                <DiMongodb color='var(--yellow-theme-main-color)' size={40} />
              </div>
            </div>
          </Animate>
          
        </div>
      </div>
    </section>
  )
}

export default About
