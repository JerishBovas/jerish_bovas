import React from 'react'
import './Skills.css'
import skillsData from './Skills.json'

export default function Skills() {
  return (
    <div>
      <h1 className="text-center">Skills</h1>
      <div className='mt-3'>
          {
            skillsData.map( row => {
              return(
                <div className='row'>
                  <div className='col d-flex flex-wrap justify-content-center'>
                    {
                      row[0].map( lang => {
                        return <span key={lang.toString()} className="language m-2">{lang}</span>
                      })
                    }
                  </div>
                  {
                    row[1] && (<div className='col d-flex flex-wrap justify-content-center'>
                      {
                        row[1].map( lang => {
                          return <span key={lang.toString()} className="language m-2">{lang}</span>
                        })
                      }
                    </div>)
                  }
                </div>
              )
            })
          }
      </div>
      <div className='d-flex mt-5 justify-content-around'>
        <button className='rescovtrans'>Resume</button>
        <button className='rescovtrans'>Transcript</button>
      </div>
    </div>
  )
}