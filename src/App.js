import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from './helpers/history';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import Skills from './routes/Skills';
import { Goals } from './routes/Goals';
import { NavBar } from './components/navBar';
import LandingPage from './routes/landingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
         <div>
           <NavBar history={history} />
           <Route path="/" component={LandingPage} />
           <Route path="/projects" component={Projects} />
           <Route path="/Skills" component={Skills} />
           <Route path="/contact" component={Contact} />
           <Route path="/Fundamentals" component={Goals} />
         </div>
        </Router>
      </div>
    );
  }
}

export default App;
