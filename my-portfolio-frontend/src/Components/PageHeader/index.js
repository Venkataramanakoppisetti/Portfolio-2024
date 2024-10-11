import React from 'react'
import './index.css';

const PageHeader = (props) => {

    const {headerText,icon} = props;
  return (
    <div className='wrapper'>
      <h2 className='page-header-heading'>{headerText}</h2>
      <span className='page-span'>{icon}</span>
    </div>
  )
}

export default PageHeader
