import React from 'react'

export default function Summary() {
  return (
    <div id='summary' style={{width: '100%', paddingTop: 150, fontFamily: 'Varela Round'}} className='container'>
        <div className="m-5" style={{width: '70%', marginRight: 'auto'}}>
            <p className="h1">Jerish Bradly Bovas</p>
            <p className="h3 mt-3 text-muted">Computer Programmer Analyst</p>
            <p style={{fontSize: 25}} className="mt-4 mb-4">Computer Programmer Analyst specialized in Web, Mobile, Desktop and Cross-Platform development using various frameworks like .NET, React.js, Angular, Android, iOS, React Native, Ionic, NodeJS, Express.js, Spring Boot, PHP etc. Interested in working with Algorithms, Artificial Intelligence, Machine Learning and implementing them in production applications. Excelled in Engineering DevOps and fully automating project deploy and management using Azure and GCP Cloud Services.</p>
            <a href='#contact' id='contactmebtn'>Contact Me</a>
        </div>
    </div>
  )
}