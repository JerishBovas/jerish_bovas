import React from 'react'

export default function Summary() {
  return (
    <div style={{width: '100%', paddingTop: 150, fontFamily: 'Varela Round'}} className='container'>
        <div className="m-5" style={{width: '70%', marginRight: 'auto'}}>
            <p className="h1">Jerish Bradly Bovas</p>
            <p className="h3 mt-3 text-success">Software Developer</p>
            <p style={{fontSize: 25}} className="mt-4 mb-4">Highly motivated Software Developer  with 3+ years of full-time experience specializing in Web, Mobile, 
Desktop, and Cross-Platform development. Adept at various frameworks such as .NET, React.js, Angular, 
Android, iOS, React Native, Ionic, NodeJS, Express.js, Spring Boot. Proven ability to design and implement 
relational  and  non-relational  databases  such  as  MSSQL  Server,  MySQL,  MongoDB,  Cosmos  DB,  and 
integrate with backend applications. Expertise in engineering DevOps, fully automating project 
deployment  and  management  using  Azure  and  GCP  Cloud  Services,  Play  Console,  App  Store  Connect. 
Proficient in leveraging machine learning to create high-quality and impactful SaaS solutions.</p>
            <a href='#contact' id='contactmebtn'><button>Contact Me</button></a>
        </div>
    </div>
  )
}