import React from 'react'

export default function Summary() {
  return (
    <div style={{width: '100%', paddingTop: 150, fontFamily: 'Varela Round'}} className='container'>
        <div className="m-5" style={{width: '70%', marginRight: 'auto'}}>
            <p className="h1">Jerish Bradly Bovas</p>
            <p className="h3 mt-3 text-success">Software Developer</p>
            <p style={{fontSize: 25}} className="mt-4 mb-4">Software Developer with 3+ years of experience in Web, Mobile, Desktop and Cross-Platform development using various frameworks including .NET, React.js, Angular, Android, iOS, React Native, Ionic, NodeJS, Express.js, Spring Boot. Interested in working with Algorithms, Artificial Intelligence, and Machine Learning and implementing them in production applications. Excelled in Engineering DevOps and fully automating project deployment and management using Play Console, App Store Connect, Azure and GCP Cloud Services.</p>
            <a href='#contact' id='contactmebtn'><button>Contact Me</button></a>
        </div>
    </div>
  )
}