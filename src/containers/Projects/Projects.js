import React from 'react'
import './Projects.css'
import map from './img/maps.png'
import scavenger from './img/scavenger.jpeg'
import AppStore from './img/DownloadAppStore.svg'
import PlayStore from './img/google-play-badge.png'
import WeatherApp from './img/weatherApp.jpeg'
import Clouds from './img/clouds.jpg'
import WeatherAppAndroid from './img/weatherAppAndroid.png'
import SpaceX from './img/spaceX.png'

export default function Projects() {
  return (
    <div id='projects'>
      <h1 class="text-center">Projects</h1>
      <div>
        <div class="row">
          <div class="col-4 shadow">
            <img id='mainImgView' src={map}></img>
            <img id='subImgView' src={scavenger}></img>
            <div>
              <p><strong>Scavenger Hunt</strong> is an iOS application built using Swift and SwiftUI.  It's a game where users can choose a location nearby and find the item specified in that location.</p>
              <div class="">
                <a class="btn btn-dark" target={'_blank'} href="https://github.com/JerishBovas/Treasureventure" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
                <a href="#" target={'_blank'} style={{float: 'right', clear: 'both'}} role="button"><img src={AppStore}></img></a>
              </div>
            </div>
          </div>
          <div class="col-4 shadow">
            <img id='mainImgView' src={Clouds}></img>
              <img id='subImgView' src={WeatherApp}></img>
              <div>
              <p><strong>Weather Application</strong> is a cross-platform mobile application built React-Native and JavaScript.  It's a weather application which uses OpenWeatherMap API</p>
              <div class="row p-0">
                <div class="col-4 m-0">
                  <a class="btn btn-dark" target={'_blank'} href="https://github.com/JerishBovas/WeatherApplication-ReactNative" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
                </div>
                <div class="col-4 m-0 ps-0">
                  <a href="https://apps.apple.com/app/weather-app-rn/id1600376727" target={'_blank'} role="button"><img src={PlayStore} height={38}></img></a>
                </div>
                <div class="col-4 m-0">
                  <a href="https://apps.apple.com/app/weather-app-rn/id1600376727" target={'_blank'} role="button"><img src={AppStore}></img></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4 shadow">
            <img id='mainImgView' src={WeatherAppAndroid}></img>
            <div>
              <p><strong>Weather App</strong> is an Android application built using Java.  It shows real time weather data for that particular location.</p>
              <div class="" style={{textAlign: 'center'}}>
                <a class="btn btn-dark" target={'_blank'} href="https://github.com/JerishBovas/Treasureventure" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
              </div>
            </div>
          </div>
          <div class="col-4 shadow">
            <img id='mainImgView' src={SpaceX}></img>
            <div>
              <p><strong>SpaceX Missions</strong> is a web application built using Angular.  It uses spaceX API to list their past and upcoming missions.</p>
              <div class="">
              <a class="btn btn-dark" target={'_blank'} href="https://github.com/JerishBovas/Treasureventure" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
                <a href="#" class="btn btn-dark" target={'_blank'} style={{float: 'right', clear: 'both'}} role="button">Visit Site</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4 shadow">
            <img id='mainImgView' src={WeatherAppAndroid}></img>
            <div>
              <p><strong>Weather App</strong> is an Android application built using Java.  It shows real time weather data for that particular location.</p>
              <div class="">
                <a class="btn btn-dark" target={'_blank'} href="https://github.com/JerishBovas/Treasureventure" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
                <a href="#" class="btn btn-dark" target={'_blank'} style={{float: 'right', clear: 'both'}} role="button">Visit Site</a>
              </div>
            </div>
          </div>
          <div class="col-4 shadow">
            <img id='mainImgView' src={SpaceX}></img>
            <div>
              <p><strong>SpaceX Missions</strong> is a web application built using Angular.  It uses spaceX API to list their past and upcoming missions.</p>
              <div class="">
              <a class="btn btn-dark" target={'_blank'} href="https://github.com/JerishBovas/Treasureventure" role="button">GitHub <i class="fa fa-brands fa-github"></i></a>
                <a href="#" class="btn btn-dark" target={'_blank'} style={{float: 'right', clear: 'both'}} role="button">Visit Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}