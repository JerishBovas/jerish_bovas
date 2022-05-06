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

const ProjectItems = () => {
    const Items = [
        {
            "mainImg": map,
            "subImg": scavenger,
            "title": "Scavenger Hunt",
            "description": " is an iOS application built using Swift and SwiftUI.  It's a game where users can choose a location nearby and find the item specified in that location.",
            "languages": ["Swift", "SwiftUI"],
            "github": "https://github.com/JerishBovas/ScavengerHunt_iOS",
            "status": "coming soon on App Store"
        },
        {
            "mainImg": Clouds,
            "subImg": WeatherApp,
            "title": "Weather Application",
            "description": " is a cross-platform mobile application built using React-Native and JavaScript.  It's a weather application which uses OpenWeatherMap API",
            "languages": ["React-Native", "JavaScript"],
            "github": "https://github.com/JerishBovas/WeatherApplication-ReactNative",
            "iOS" : "https://apps.apple.com/app/weather-app-rn/id1600376727",
            "android": "https://play.google.com/store/apps/details?id=com.jerishbovas.weatherapplication"
        },
        {
            "mainImg": Portfolio,
            "title": "This Website",
            "description": " is one of my personal favorites built using reactJS.  It has rich UI handcrafted myself using built-in react components and HTML",
            "languages": ["ReactJS"],
            "github": "https://github.com/JerishBovas/jerish_bovas",
            "website" : "https://www.jerishbovas.com",
        },
        {
            "mainImg": GDGWebApp,
            "title": "Chatbot Web App",
            "description": " is a Chatbot Web application built using NodeJS and Python backend.  It's a FAQ Chatbot which answers customer's questions with past answers",
            "languages": ["Python", "Machine-Learning"],
            "github": "https://github.com/SJ-Corporation/ChatBot-Python-GDGCloudToronto",
            "website" : "https://witty-sand-05ef2490f.1.azurestaticapps.net",
        },
        {
            "mainImg": SpaceX,
            "title": "SpaceX Missions",
            "description": " is a web application built using Angular.  It uses spaceX API to list their past and upcoming missions, details of the missions and launch dates.",
            "languages": ["Angular", "SpaceX API"],
            "github": "https://github.com/JerishBovas/SpaceX-Missions",
            "website" : "https://spacex.jerishbovas.com",
        },
        {
            "mainImg": EmployeeMan,
            "title": "Employee Manager",
            "description": " is a web application built using React as frontend and NodeJS, MongoDB backend.  It helps in managing employees throught the company.",
            "languages": ["React", "NodeJS", "MongoDB"],
            "github": "https://github.com/JerishBovas/EmployeeManagement_frontend",
        },
        {
            "mainImg": Recipe,
            "title": "Recipe Application",
            "description": " is a web application built using Java Spring Boot.  It stores and retrieves data about recipes including instructions and ingredients.",
            "languages": ["Java", "Spring Boot"],
            "github": "https://github.com/SJ-Corporation/RecipeApplication",
        },
        {
            "mainImg": Sports,
            "title": "Sports Soft",
            "description": " is sports inventory management application built using C# .NET.  It keeps track technical support requests and technicians.",
            "languages": ["C#", "ASP.NET"],
            "github": "https://github.com/JerishBovas/SportsSoft",
        },
        {
            "mainImg": Simply,
            "title": "Simply Classified",
            "description": " is a classified ads web application built using PHP.  It enables users to view ads and also host their own ads in the database.",
            "languages": ["PHP", "MySQL"],
            "github": "https://github.com/JerishBovas/SimplyClassified",
        },
        {
            "mainImg": event,
            "title": "Event Management",
            "description": " is a Desktop Application built using C# .NET.  It manages events, customers and their RVSP's.",
            "languages": ["C#", ".NET"],
            "github": "https://github.com/JerishBovas/CSAssignmentTwo",
        }
    ]

    return Items;
}

export default ProjectItems()