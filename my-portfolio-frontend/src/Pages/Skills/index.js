import React from 'react';
import { GiSkills } from "react-icons/gi";
import PageHeader from '../../Components/PageHeader';
import {Line} from 'rc-progress';
import skillsData from './skills';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import './index.css';

const Skills = () => {
  return (
    <section className="skills-container" id='skills'>
    <PageHeader 
      headerText = "My Skills"
      icon = {<GiSkills size={40}/>}
    />
    <div className="skills-wrapper">
      {
        skillsData.map((eachDomain, index) => (
          <div key={index} className="skill">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: 'translateX(-200px)'
              }}
              end={{
                transform: 'translateX(0px)'
              }}
            >
              

              <h3 className='domain'>{eachDomain.domain}</h3>
              <div className='skills-con'>
                {
                  eachDomain.data.map((eachSkill, i) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity: 1","opacity: 0"]}
                      iterationCount="1"
                    >
                      <div key={i} className="percentage-bar-container">
                        <p className='skill-name'>{eachSkill.skill}</p>
                        <Line 
                          percent={eachSkill.percentage}
                          strokeWidth="2"
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth="2"
                          strokeLinecap='square'
                          style={{ width: '100%' }}
                        />

                      </div>
                    </AnimateKeyframes>
                  ))
                }
              </div>

            </Animate>
          </div>
        ))
      }
    </div>
  </section>
  )
}

export default Skills
