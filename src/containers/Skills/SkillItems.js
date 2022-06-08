import CSharp from './img/c--4.svg'
import NET from './img/NET.png'
import NETCore from './img/NET_Core_Logo.png'
import Swift from './img/swift.svg'
import SwiftUI from './img/icons8-swiftui.svg'
import ReactNative from './img/icons8-react-native.svg'
import Ionic from './img/ionic.svg'
import JS from './img/js.png'
import React from './img/react-icon.svg'
import Node from './img/Node.png'
import Angular from './img/angular.svg'
import TypeScript from './img/typescript.svg'
import Java from './img/java.png'
import SpringB from './img/springio-icon.svg'
import Android from './img/android.svg'
import Kotlin from './img/kotlin.svg'
import MySQL from './img/mysql.svg'
import Mongo from './img/mongodb.svg'
import SQL from './img/SQL-Server.svg'
import Cosmos from './img/Azure-Cosmos-DB.svg'
import Git from './img/git.svg'
import GitHub from './img/github-2.svg'
import XCode from './img/xcode.png'
import VS from './img/visual-basic.png'
import AndroidStudio from './img/icons8-android-studio.svg'
import Azure from './img/icons8-azure.svg'
import GCP from './img/icons8-google-cloud.svg'
import PlayStore from './img/google-play.png'
import AppStore from './img/app-store.png'
import IntellijIdea from './img/icons8-intellij-idea.svg'
import VSCode from './img/vscode.svg'
import Postman from './img/postman.svg'
import Jenkins from './img/icons8-jenkins.svg'
import TravisCI from './img/icons8-travis-ci.svg'
import DevOps from './img/Azure-DevOps.svg'
import SQLite from './img/sqlite.svg'
import XUnit from './img/dotnet-fdn.png'
import Workflow from './img/Workflow.svg'
import GithubActions from './img/github-actions.svg'
import iOS from './img/icons8-ios-logo.svg'
import macos from './img/icons8-mac-os-logo.svg'
import windows from './img/icons8-windows-11.svg'
import linux from './img/icons8-linux-48.png'
import XCodeCloud from './img/xcode-cloud.png'

const skillItems = () => {
    return [
        [[["Swift", Swift], ["Swift UI", SwiftUI], ["XCode", XCode], ["Xcode Cloud", XCodeCloud]],
        [["Azure", Azure], ["Google Cloud", GCP], ["Play Store", PlayStore], ["App Store Connect",AppStore]]],
        [[["C#",CSharp], [".NET",NET], [".NET Core", NETCore], ["Visual Studio", VS], ["XUnit", XUnit]],
        [["iOS", iOS], ["Android", Android], ["Linux", linux], ["Windows", windows], ["macOS", macos]]],
        [[["Java", Java], ["Kotlin", Kotlin], ["Spring Boot", SpringB], ["Android", Android], ["Android Studio", AndroidStudio], ["IntelliJ Idea", IntellijIdea]],
        [["MySQL", MySQL], ["MongoDB",Mongo],["SQL Server", SQL], ["Cosmos DB", Cosmos], ["SQLite", SQLite]]],
        [[["JavaScript", JS], ["NodeJS", Node], ["ReactJS", React], ["React Native", ReactNative], ["VS Code", VSCode]],
        [["Jenkins", Jenkins], ["Travis CI", TravisCI], ["GitHub Actions", GithubActions], ["Azure pipelines", Workflow]]],
        [[["TypeScript", TypeScript], ["Angular", Angular], ["Ionic", Ionic], ["Postman", Postman]],
        [["Git", Git], ["GitHub", GitHub], ["Azure DevOps", DevOps]]]
    ]
}
export default skillItems()