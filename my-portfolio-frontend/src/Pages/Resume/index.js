import React from 'react';
import PageHeader from '../../Components/PageHeader';
import { FaFilePdf } from "react-icons/fa6";
const Resume = () => {
  return (
    <section className="resume-container" id='resume'>
    <PageHeader 
      headerText = "My Resume"
      icon = {<FaFilePdf size={40}/>}
    />
  </section>
  )
}

export default Resume
