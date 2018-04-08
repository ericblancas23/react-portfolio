import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <div>
      <nav className="navbar navbar-light bg-light navbar-expand-md">
      <a href="/" className="navbar-brand">Eric Blancas</a>
       <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       <li class="navbar-item">
          <a href="/Projects" class="nav-link">Projects</a>
        </li>
       <li class="navbar-item">
          <a href="/Contact" class="nav-link">Contact Me</a>
        </li>
        <li class="navbar-item">
          <a href="/Skills" class="nav-link">Skills</a>
        </li>
        <li class="navbar-item">
          <a href="/Fundamentals" class="nav-link">Fundamentals</a>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
           <span class="navbar-toggler-icon"></span>
         </button>
       </div>
       <a href="https://www.linkedin.com/in/eric-blancas23/"><img src={require("../img/linkedin.png")} style={{width: 50, height: 50, float: "right", marginRight: "1cm"}}/></a>
       <a href="https://github.com/ericblancas23"><img src={require("../img/Octocat.png")} style={{width: 70, height: 70, float: "right"}}/></a>
      </nav>
  </div>
);

