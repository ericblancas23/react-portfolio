import React, { Component } from 'react';
import { NavBar } from './components/navBar';
import { history } from './helpers/history';
import Contact from './routes/Contact';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import LandingPage from './routes/landingPage';
import Spinner from './components/Spinner';
import { Parallax } from 'react-spring'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="content-grid">
         <div>
           <NavBar history={history} />
         </div>
         <LandingPage />
         <Projects />
         {/* <Skills /> */}
         <Contact />
      </div>
    );
  }
}

export default App;
