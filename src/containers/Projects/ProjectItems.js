import map from './img/maps.png'
import scavenger from './img/scavenger.jpeg'
import WeatherApp from './img/weatherApp.jpeg'
import Clouds from './img/clouds.jpg'
import SpaceX from './img/spaceX.png'
import EmployeeMan from './img/employeeMan.png'
import Recipe from './img/recipeApplication.png'
import Sports from './img/SportsSoft.png'
import Simply from './img/SimplyClassified.png'
import event from './img/Event Management System.png'
import GDGWebApp from './img/GDGWebApp.png'
import Portfolio from './img/Portfolio.png'

import CSharp from '../Skills/img/c--4.svg'
import NET from '../Skills/img/NET.png'
import NETCore from '../Skills/img/NET_Core_Logo.png'
import Swift from '../Skills/img/swift.svg'
import SwiftUI from '../Skills/img/icons8-swiftui.svg'
import ReactNative from '../Skills/img/icons8-react-native.svg'
// import Ionic from '../Skills/img/ionic.svg'
import JS from '../Skills/img/js.png'
import React from '../Skills/img/react-icon.svg'
import Node from '../Skills/img/Node.png'
import Angular from '../Skills/img/angular.svg'
// import TypeScript from '../Skills/img/typescript.svg'
import Java from '../Skills/img/java.png'
import SpringB from '../Skills/img/springio-icon.svg'
// import Android from '../Skills/img/android.svg'
// import Kotlin from '../Skills/img/kotlin.svg'
import MySQL from '../Skills/img/mysql.svg'
import Mongo from '../Skills/img/mongodb.svg'
// import SQL from '../Skills/img/SQL-Server.svg'
// import Cosmos from '../Skills/img/Azure-Cosmos-DB.svg'
// import Git from '../Skills/img/git.svg'
// import GitHub from '../Skills/img/github-2.svg'
import XCode from '../Skills/img/xcode.png'
import VS from '../Skills/img/visual-basic.png'
// import AndroidStudio from '../Skills/img/icons8-android-studio.svg'
import Azure from '../Skills/img/icons8-azure.svg'
// import GCP from '../Skills/img/icons8-google-cloud.svg'
// import PlayStore from '../Skills/img/google-play.png'
// import AppStore from '../Skills/img/app-store.png'
import IntellijIdea from '../Skills/img/icons8-intellij-idea.svg'
import VSCode from '../Skills/img/vscode.svg'
// import Postman from '../Skills/img/postman.svg'
// import Jenkins from '../Skills/img/icons8-jenkins.svg'
// import TravisCI from '../Skills/img/icons8-travis-ci.svg'
// import DevOps from '../Skills/img/Azure-DevOps.svg'
// import SQLite from '../Skills/img/sqlite.svg'
// import XUnit from '../Skills/img/dotnet-fdn.png'
// import Workflow from '../Skills/img/Workflow.svg'
// import GithubActions from '../Skills/img/github-actions.svg'
// import iOS from '../Skills/img/icons8-ios-logo.svg'
// import macos from '../Skills/img/icons8-mac-os-logo.svg'
// import windows from '../Skills/img/icons8-windows-11.svg'
// import linux from '../Skills/img/icons8-linux-48.png'
// import XCodeCloud from '../Skills/img/xcode-cloud.png'
import Python from '../Skills/img/python.png'
import SpaceXsm from '../Skills/img/spacex.svg'
import PHP from '../Skills/img/php.png'

const ProjectItems = () => {
    const Items = [
        {
            "mainImg": map,
            "subImg": scavenger,
            "title": "Scavenger Hunt",
            "description": " is an iOS application built using Swift and SwiftUI.  It's a game where users can choose a location nearby and find the item specified in that location.",
            "languages": [["Swift", Swift], ["SwiftUI", SwiftUI], ["XCode", XCode]],
            "github": "https://github.com/JerishBovas/ScavengerHunt_iOS",
            "iOS" : "https://apps.apple.com/us/app/scavenger-hunt/id1631131971"
        },
        {
            "mainImg": Clouds,
            "subImg": WeatherApp,
            "title": "Weather Application",
            "description": " is a cross-platform mobile application built using React-Native and JavaScript.  It's a weather application which uses OpenWeatherMap API",
            "languages": [["React Native", ReactNative], ["JavaScript", JS], ["VS Code", VSCode]],
            "github": "https://github.com/JerishBovas/WeatherApplication-ReactNative",
            "iOS" : "https://apps.apple.com/app/weather-app-rn/id1600376727",
            "android": "https://play.google.com/store/apps/details?id=com.jerishbovas.weatherapplication"
        },
        {
            "mainImg": Portfolio,
            "title": "This Website",
            "description": " is one of my personal favorites built using reactJS.  It has rich UI handcrafted myself using built-in react components and HTML",
            "languages": [["ReactJS", React], ["NodeJS", Node], ["Azure", Azure]],
            "github": "https://github.com/JerishBovas/jerish_bovas",
            "website" : "https://www.jerishbovas.com",
        },
        {
            "mainImg": GDGWebApp,
            "title": "Chatbot Web App",
            "description": " is a Chatbot Web application built using NodeJS and Python backend.  It's a FAQ Chatbot which answers customer's questions with past answers",
            "languages": [["Python", Python], ["NodeJS", Node], ["JavaScript", JS]],
            "github": "https://github.com/SJ-Corporation/ChatBot-Python-GDGCloudToronto",
            "website" : "https://witty-sand-05ef2490f.1.azurestaticapps.net",
        },
        {
            "mainImg": SpaceX,
            "title": "SpaceX Missions",
            "description": " is a web application built using Angular.  It uses spaceX API to list their past and upcoming missions, details of the missions and launch dates.",
            "languages": [["Angular", Angular], ["SpaceX API", SpaceXsm], ["VS Code", VSCode]],
            "github": "https://github.com/JerishBovas/SpaceX-Missions",
            "website" : "https://spacex.jerishbovas.com",
        },
        {
            "mainImg": EmployeeMan,
            "title": "Employee Manager",
            "description": " is a web application built using React as frontend and NodeJS, MongoDB backend.  It helps in managing employees throught the company.",
            "languages": [["React", React], ["NodeJS", Node], ["MongoDB", Mongo]],
            "github": "https://github.com/JerishBovas/EmployeeManagement_frontend",
        },
        {
            "mainImg": Recipe,
            "title": "Recipe Application",
            "description": " is a web application built using Java Spring Boot.  It stores and retrieves data about recipes including instructions and ingredients.",
            "languages": [["Java", Java], ["Spring Boot", SpringB], ["Intellij Idea", IntellijIdea]],
            "github": "https://github.com/SJ-Corporation/RecipeApplication",
        },
        {
            "mainImg": Sports,
            "title": "Sports Soft",
            "description": " is sports inventory management application built using C# .NET.  It keeps track technical support requests and technicians.",
            "languages": [["C#", CSharp], ["ASP.NET", NETCore], ["Visual Studio", VS]],
            "github": "https://github.com/JerishBovas/SportsSoft",
        },
        {
            "mainImg": Simply,
            "title": "Simply Classified",
            "description": " is a classified ads web application built using PHP.  It enables users to view ads and also host their own ads in the database.",
            "languages": [["PHP", PHP], ["MySQL", MySQL], ["VS Code", VSCode]],
            "github": "https://github.com/JerishBovas/SimplyClassified",
        },
        {
            "mainImg": event,
            "title": "Event Management",
            "description": " is a Desktop Application built using C# .NET.  It manages events, customers and their RVSP's.",
            "languages": [["C#", CSharp], [".NET", NET], ["Visual Studio", VS]],
            "github": "https://github.com/JerishBovas/CSAssignmentTwo",
        }
    ]

    return Items;
}

export default ProjectItems()