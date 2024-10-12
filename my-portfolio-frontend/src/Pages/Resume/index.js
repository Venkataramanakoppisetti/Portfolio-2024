import React from 'react';
import PageHeader from '../../Components/PageHeader';
import { FaFilePdf } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { professionalData } from './utils';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork } from "react-icons/md";
import './index.css';

const Resume = () => {
  return (
    <section className="resume-container" id='resume'>
      <PageHeader 
        headerText="My Resume"
        icon={<FaFilePdf size={40} />}
      />
      <div className="download-resume-container">
        <a href="/resume.pdf" download className="download-resume-button">
          <FaFilePdf size={20} style={{ marginRight: '8px' }} />
          Download My Resume
        </a>
      </div>
      
      <div className="resume-wrapper-container">
        <div className="experience-container">
          <h3 className="experience">Experience</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor='var(--yellow-theme-main-color)'
          >
            {professionalData.experience.map((area, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline"
                contentStyle={{ background: 'none', color: 'var(--yellow-theme-subtext-color)', border: '1.5px solid var(--yellow-theme-main-color)' }}
                icon={<MdOutlineWork size={20} />}
                iconStyle={{
                  background: '#181818',
                  color: "var(--yellow-theme-main-color)"
                }}
              >
                <div className="experience-content-wrapper">
                  <h3>{area.role} </h3>
                  <h3 className='bars'>||</h3>
                  <h4>{area.company}</h4>
                </div>
                <p className='area-experience'>{area.experience}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="education-container">
          <h3 className="education">Education</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor='var(--yellow-theme-main-color)'
          >
            {professionalData.education.map((course, i) => (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline"
                contentStyle={{ background: 'none', color: 'var(--yellow-theme-subtext-color)', border: '1.5px solid var(--yellow-theme-main-color)' }}
                icon={<MdOutlineWork size={20} />}
                iconStyle={{
                  background: '#181818',
                  color: "var(--yellow-theme-main-color)"
                }}
              >
                <div className="education-content-wrapper">
                  <h3 className="course-name">{course.course}</h3>
                  <h3 className='bars'>||</h3>
                  <h4 className="course-college">{course.college}</h4>
                  <h3 className='bars'>||</h3>
                  <h4 className="course-university">{course.university}</h4>
                </div>
                <p className="course-passout">{course.passout}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
