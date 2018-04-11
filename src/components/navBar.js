import React from 'react';


export const NavBar = () => (
  <div>
      <nav className="navbar navbar-light bg-light navbar-expand-md">
      <a href="/" className="navbar-brand">Eric Blancas</a>
       <a href="https://www.linkedin.com/in/eric-blancas23/"><img alt="" src={require("../img/linkedin.png")} style={{width: 50, height: 50, float: "right", marginRight: "1cm"}}/></a>
       <a href="https://github.com/ericblancas23"><img alt="" src={require("../img/Octocat.png")} style={{width: 70, height: 70, float: "right"}}/></a>
      </nav>
  </div>
);

