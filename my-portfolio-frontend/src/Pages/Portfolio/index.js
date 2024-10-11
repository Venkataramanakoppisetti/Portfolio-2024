import React from 'react';
import PageHeader from '../../Components/PageHeader';
import { FaFilePdf } from "react-icons/fa6";


const Portfolio = () => {
  return (
    <section className="portfolio-container" id='portfolio'>
    <PageHeader 
      headerText = "My Portfolio"
      icon = {<FaFilePdf size={40}/>}
    />
  </section>
  )
}

export default Portfolio
