import React from 'react';
import PageHeader from '../../Components/PageHeader';
import { RiContactsFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="contact-container" id='contact'>
      <PageHeader 
        headerText = "Contact Me"
        icon = {<RiContactsFill size={40}/>}
      />
    </section>
  )
}

export default Contact
