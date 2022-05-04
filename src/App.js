import './App.css';
import Contact from './containers/Contact/Contact';
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';
import Summary from './containers/Summary/Summary';
import logo from './logo_square.svg';

function App() {
  return (
    <div>
      <nav id='nav' className="navbar navbar-expand-lg">
        <div className="container-fluid fs-4">
          <a className="navbar-brand ms-5 d-flex" style={{ color: 'rgba(242, 245, 247, 0.90)'}} href="https://www.jerishbovas.com">
            <img src={logo} style={{margin: 'auto'}} alt="logo_image" height="40rem"/>
            <span style={{fontFamily: 'cursive',}} className="ms-3 fs-2">Jerish Bovas</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item m-1">
                <a id='summarynav' className="nav-link" href="#summary">Summary</a>
              </li>
              <li className="nav-item m-1">
                <a id='projectsnav' className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item m-1">
                <a id='skillsnav' className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item m-1">
                <a id='contactnav' className="nav-link" href='#contact'>Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto me-5">
              <li className="nav-item me-3">
                <a className="nav-link" target="_blank" rel='noreferrer' href="https://github.com/JerishBovas?tab=repositories"><i className="fa fa-brands fa-github"></i></a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/jerishbovas/"><i className="fa fa-brands fa-linkedin"></i></a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" target="_blank" rel='noreferrer' href="https://twitter.com/bovasjerish"><i className="fa fa-brands fa-twitter"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" rel='noreferrer' href="https://www.youtube.com/channel/UChPApQMTIOvdRR9M7VMPxDw"><i className="fa fa-brands fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id='summary' style={{backgroundImage: "radial-gradient(ellipse farthest-side at bottom,rgb(43, 0, 255), rgb(44, 0, 138))", height: "100vh"}}>
        <Summary/>
      </div>
      <div id='projects' style={{backgroundColor: 'whitesmoke', color: 'black', padding: 50, paddingTop: 100, paddingBottom: 100}}>
        <Projects/>
      </div>
      <hr
        style={{backgroundColor: 'black', margin: 0}}
      ></hr>
      <div id='skills' style={{backgroundColor: 'whitesmoke', color: 'black', padding: 50, paddingTop: 100, paddingBottom: 100}}>
        <Skills/>
      </div>
      <div id='contact' style={{backgroundColor: 'rgb(44, 0, 138)', color: 'white', padding: 50}}>
        <Contact/>
          <div className='text-center'>
            <p>Copyright 2022 Jerish Bradly Bovas. All rights reserved.</p>
          </div>
      </div>
    </div>
  );
}

export default App;
