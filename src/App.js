import React, { Component } from 'react';
import { NavBar } from './components/navBar';
import { history } from './helpers/history';
import Contact from './routes/Contact';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import LandingPage from './routes/landingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <div>
           <NavBar history={history} />
         </div>
         <LandingPage />
         <Projects />
         <Skills />
         <Contact />
      </div>
    );
  }
}

export default App;
