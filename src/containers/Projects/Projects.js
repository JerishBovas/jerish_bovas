import React from 'react'
import './Projects.css'
import AppStore from './img/DownloadAppStore.svg'
import PlayStore from './img/google-play-badge.png'
import ProjectItems from './ProjectItems'

export default function Projects() {
  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <div className="row">
        {
            ProjectItems.map(item => {
                return <div key={item.title.toString()} className="col-3 shadow">
            <img id='mainImgView' alt='mainImage' src={item.mainImg}></img>
            {
                item.subImg && <img id='subImgView' alt='subImage' src={item.subImg}></img>
            }
            <div>
              <p><strong>{item.title}</strong>{item.description}</p>
              <div className="d-flex justify-content-evenly lng-holder">
                  {
                      item.languages.map(lang => {
                        return <span key={lang.toString()} className="language">{lang}</span>
                      })
                  }
                </div>
              <div className="d-flex justify-content-evenly flex-wrap">
                <a className="btn btn-dark" rel="noreferrer" target={'_blank'} href={item.github} role="button">GitHub <i className="fa fa-brands fa-github"></i></a>
                {
                    item.iOS && <a href={item.iOS} rel="noreferrer" target={'_blank'} role="button"><img alt='app_store' src={AppStore}></img></a>
                }
                {
                    item.android && <a href={item.android} className="mt-3" rel="noreferrer" target={'_blank'} role="button"><img alt='play_store' width={130} src={PlayStore}></img></a>
                }
                {
                    item.website && <a href={item.website} className="btn btn-dark" rel="noreferrer" target={'_blank'}  role="button">Visit Site</a>
                }
              </div>
              <div className='text-center'>
                {
                  item.status && <span className='text-success'>{item.status}</span>
                }
              </div>
            </div>
          </div>
            })
        }
      </div>
    </div>
  )
}