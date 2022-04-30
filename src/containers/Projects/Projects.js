import React from 'react'
import './Projects.css'
import map from './img/maps.png'
import scavenger from './img/scavenger.jpeg'
import AppStore from './img/DownloadAppStore.svg'
import WeatherApp from './img/weatherApp.jpeg'
import Clouds from './img/clouds.jpg'
import SpaceX from './img/spaceX.png'
import EmployeeMan from './img/employeeMan.png'
import Recipe from './img/recipeApplication.png'
import Sports from './img/SportsSoft.png'
import Simply from './img/SimplyClassified.png'
import event from './img/Event Management System.png'
import Server from './img/Servertuto.png'

export default function Projects() {
  return (
    <div id='projects'>
      <h1 class="text-center">Projects</h1>
      <div>
        <div class="row">
          <div class="col-3 shadow">
            <img id='mainImgView' alt='map' src={map}></img>
            <img id='subImgView' alt='scavenger' src={scavenger}></img>
            <div>
              <p><strong>Scavenger Hunt</strong> is an iOS application built using Swift and SwiftUI.  It's a game where users can choose a location nearby and find the item specified in that location.</p>
              <div class="">
                <a class="btn btn-dark" rel="noreferrer" target={'_blank'} href="https://github.com/JerishBovas/Treasureventure" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
                <a href="https://apps.apple.com/app/" rel="noreferrer" target={'_blank'} style={{float: 'right', clear: 'both'}} role="button"><img alt='app_store' src={AppStore}></img></a>
              </div>
            </div>
          </div>
          <div class="col-3 shadow">
            <img id='mainImgView' alt='clouds' src={Clouds}></img>
              <img id='subImgView' alt='weather_app' src={WeatherApp}></img>
              <div>
              <p><strong>Weather Application</strong> is a cross-platform mobile application built React-Native and JavaScript.  It's a weather application which uses OpenWeatherMap API</p>
              <div class="">
                <a class="btn btn-dark" rel="noreferrer" target={'_blank'} href="https://github.com/JerishBovas/WeatherApplication-ReactNative" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
                <a href="https://apps.apple.com/app/weather-app-rn/id1600376727" rel="noreferrer" target={'_blank'} style={{float: 'right', clear: 'both'}} role="button"><img alt='app_store' src={AppStore}></img></a>
              </div>
            </div>
          </div>
          <div class="col-3 shadow">
            <img id='mainImgView' alt='spaceXImg' src={SpaceX}></img>
            <div>
              <p><strong>SpaceX Missions</strong> is a web application built using Angular.  It uses spaceX API to list their past and upcoming missions.</p>
              <div class="">
              <a class="btn btn-dark" rel="noreferrer" target={'_blank'} href="https://github.com/JerishBovas/101239138-lab-test2-comp3133" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
                <a href="https://spacex.jerishbovas.com" class="btn btn-dark" rel="noreferrer" target={'_blank'} style={{float: 'right', clear: 'both'}} role="button">Visit Site</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3 shadow">
            <img id='mainImgView' alt='employee_management' src={EmployeeMan}></img>
            <div>
              <p><strong>Employee Manager</strong> is an employee management application built using React as frontend and NodeJS, MongoDB backend.  It helps in managing employees throught the company.</p>
              <div class="" style={{textAlign: 'center'}}>
                <a class="btn btn-dark" rel="noreferrer" target={'_blank'} href="https://github.com/JerishBovas/101239138_assignment2_frontend" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-3 shadow">
            <img id='mainImgView' alt='Recipt_application' src={Recipe}></img>
            <div>
              <p><strong>Recipe Application</strong> is a web application built using Java Spring Boot.  It stores and retrieves data about recipes including instructions and ingredients.</p>
              <div class="" style={{textAlign: 'center'}}>
              <a class="btn btn-dark" rel="noreferrer" target={'_blank'} href="https://github.com/SJ-Corporation/RecipeApplication" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-3 shadow">
            <img id='mainImgView' alt='Sports_soft' src={Sports}></img>
            <div>
              <p><strong>Sports Soft</strong> is sports inventory management application built using C# .NET.  It keeps track technical support requests and technicians.</p>
              <div class="" style={{textAlign: 'center'}}>
              <a class="btn btn-dark" rel="noreferrer" target={'_blank'} href="https://github.com/JerishBovas/SportsSoft" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3 shadow">
            <img id='mainImgView' alt='simplyClassified' src={Simply}></img>
            <div>
              <p><strong>Simply Classified</strong> is a classified ads web application built using PHP.  It enables users to view ads and also host their own ads in the database.</p>
              <div class="" style={{textAlign: 'center'}}>
                <a class="btn btn-dark" rel="noreferrer" target={'_blank'} href="https://github.com/JerishBovas/SimplyClassified" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-3 shadow">
            <img id='mainImgView' alt='event_management' src={event}></img>
            <div>
              <p><strong>Event Management</strong> is a Desktop Application built using C# .NET.  It manages events, customers and their RVSP's.</p>
              <div class="" style={{textAlign: 'center'}}>
              <a class="btn btn-dark" rel="noreferrer" target={'_blank'} href="https://github.com/JerishBovas/CSAssignmentTwo" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-3 shadow">
            <img id='mainImgView' alt='ServerTuto' src={Server}></img>
            <div>
              <p><strong>Server Tutor</strong> is a tutorial website built using basic HTML and CSS.  It gives tutorial on how to build your own server at home.</p>
              <div class="" style={{textAlign: 'center'}}>
              <a class="btn btn-dark" rel="noreferrer" target={'_blank'} href="https://github.com/JerishBovas/ServerTuto" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}