import React from 'react'
import './Projects.css'
import AppStore from './img/DownloadAppStore.svg'
import ProjectItems from './ProjectItems'

export default function Projects() {
    console.log(ProjectItems)
  return (
    <div id='projects'>
      <h1 class="text-center">Projects</h1>
      <div class="row">
        {
            ProjectItems.map(item => {
                return <div class="col-3 shadow">
            <img id='mainImgView' alt='mainImage' src={item.mainImg}></img>
            {
                item.subImg && <img id='subImgView' alt='subImage' src={item.subImg}></img>
            }
            <div>
              <p><strong>{item.title}</strong>{item.description}</p>
              <div class="d-flex justify-content-evenly lng-holder">
                  {
                      item.languages.map(lang => {
                        return <span class="language">{lang}</span>
                      })
                  }
                </div>
              <div class="d-flex justify-content-evenly">
                <a class="btn btn-dark" rel="noreferrer" target={'_blank'} href={item.github} role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
                {
                    item.iOS && <a href={item.iOS} rel="noreferrer" target={'_blank'} role="button"><img alt='app_store' src={AppStore}></img></a>
                }
                {
                    item.website && <a href={item.website} class="btn btn-dark" rel="noreferrer" target={'_blank'}  role="button">Visit Site</a>
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