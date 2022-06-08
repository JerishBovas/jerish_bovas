import React from 'react'
import './Skills.css'
import skillsData from './SkillItems'

export default function Skills() {

  var HD = {};
  HD.nameof = function (obj) {
    return Object.keys(obj)[0];
  }
  return (
    <div>
      <h1 className="text-center text-light">Skills</h1>
      <div className='mt-3'>
          {
            skillsData.map( row => {
              return(
                <div className='row'>
                  <div className='col d-flex flex-wrap justify-content-end'>
                    {
                      row[0].map( lang => {
                        return <img className='m-3' height={48} title={lang[0]} alt={lang[0]} src={lang[1]}></img>
                      })
                    }
                  </div>
                  {
                    row[1] && (<div className='col d-flex flex-wrap justify-content-start'>
                      {
                        row[1].map( lang => {
                          return <img className='m-3' height={48} title={lang[0]} alt={lang[0]} src={lang[1]}></img>
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
        <a rel="noreferrer" target={'_blank'} href='https://github.com/JerishBovas/jerish_bovas/blob/main/public/Jerish%20Bovas.pdf'><button className='rescovtrans'>Resume</button></a>
        <a rel="noreferrer" target={'_blank'} href='https://github.com/JerishBovas/jerish_bovas/blob/main/public/Final%20Transcript.pdf'><button className='rescovtrans'>Transcript</button></a>
      </div>
    </div>
  )
}