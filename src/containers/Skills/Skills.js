import React from 'react'
import './Skills.css'
import skillsData from './Skills.json'

export default function Skills() {
  return (
    <div id='skills'>
      <h1 className="text-center">Skills</h1>
      <div className='d-flex flex-wrap mt-4 mb-4 justify-content-between'>
          {
            skillsData.map( lang => {
              return <span key={lang.toString()} className="language m-2">{lang}</span>
            })
          }
      </div>
      <div></div>
    </div>
  )
}