import './App.css';
import Contact from './containers/Contact/Contact';
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';
import Summary from './containers/Summary/Summary';
import logo from './logo_square.svg';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid fs-4">
          <a class="navbar-brand ms-5 d-flex" style={{ color: 'rgba(242, 245, 247, 0.90)'}} href="https://www.jerishbovas.com">
            <img src={logo} style={{margin: 'auto'}} alt="logo_image" height="40rem"/>
            <span style={{fontFamily: 'cursive',}} class="ms-3 fs-2">Jerish Bovas</span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav m-auto">
              <li class="nav-item m-1">
                <a class="nav-link" href="#summary">Summary</a>
              </li>
              <li class="nav-item m-1">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item m-1">
                <a class="nav-link" href="#skills">Skills</a>
              </li>
              <li class="nav-item m-1">
                <a class="nav-link" href='#contact'>Contact</a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto me-5">
              <li class="nav-item me-3">
                <a class="nav-link" target="_blank" rel='noreferrer' href="https://github.com/JerishBovas?tab=repositories"><i class="fa fa-brands fa-github"></i></a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/jerishbovas/"><i class="fa fa-brands fa-linkedin"></i></a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link" target="_blank" rel='noreferrer' href="https://twitter.com/bovasjerish"><i class="fa fa-brands fa-twitter"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" target="_blank" rel='noreferrer' href="https://www.youtube.com/channel/UChPApQMTIOvdRR9M7VMPxDw"><i class="fa fa-brands fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Summary/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
