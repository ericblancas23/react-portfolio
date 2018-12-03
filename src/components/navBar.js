import React from 'react';



export const NavBar = () => (
  <div className="nav">
      <nav className="navbar navbar-light bg-light navbar-expand-md nav">
      <a href="/" className="navbar-brand" style={{ color: "black" }}>Eric Blancas</a>
      <a className="navbar-brand" style={{color: "white"}} href="https://drive.google.com/file/d/1Bqz235cMe_mvBMRI-ce-V17FKdyW5EqN/view?usp=sharing" style={{ marginLeft: "1cm"}}>Resume</a>
      <a className="navbar-brand" style={{color: "white"}} href="https://ericb404.blogspot.com/" style={{ marginLeft: "1cm"}}>Blog</a>
       <a href="https://www.linkedin.com/in/eric-blancas23/"><img alt="" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png" style={{width: 30, height: 30, marginLeft: "1cm"}}/></a>
       <a href="https://github.com/ericblancas23"><img alt="" src={require("../img/Octocat.png")} style={{width: 50, height: 50, marginLeft:"1.5cm"}}/></a>
       
      </nav>
  </div>
);

