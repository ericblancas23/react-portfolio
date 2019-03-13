import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';

export default class Contact extends Component {
    render() {
        return(
        <div className="contact">
            <center>
            <h1>Contact Me</h1>
            <div className="icons">
            <a href="https://www.linkedin.com/in/eric-blancas23/"><img alt="" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png" style={{width: 100, height: 100, marginLeft: "1cm"}}/></a>
            <a href="https://github.com/ericblancas23"><img alt="" src={require("../img/Octocat.png")} style={{width: 100, height: 100, marginLeft:"1.5cm"}}/></a>
            <a href="mailto:ericblancas23@gmail.com"><img alt="mail" src={require("../img/email.png")} style={{width: 100, height: 100, marginLeft:"1.5cm"}} /></a>
            </div>
            </center>
        </div>
        );
    }
}