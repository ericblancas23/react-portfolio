import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

export default class Projects extends Component {
    render() {
        return(
            <div className="project-section">
            <center><h1>My Projects:</h1></center>
              <div className="container">

                <div className="row">

                   <div class="col-sm-6 col-lg-3">
                   <img class="card-img-top" alt="Card header image" src={require("../img/lambdashowcase.png")} />
                     <div className="card mt-3 mb-3">
                       <div className="card-body">
                           <h5 class="card-title">Lambda Showcase</h5>
                           <p class="card-text">Lambda Showcase is a full-stack web application 
                           that was built in React, MongoDB, and Express.</p>
                           <a href="https://github.com/LSPortfolio">Github Repo</a>
                       </div>
                     </div>
                   </div>

                   <div class="col-sm-6 col-lg-3">
                   <img class="card-img-top" alt="Card header image" src={require("../img/cliphy.png")} />
                     <div className="card mt-3">
                       <div className="card-body">
                           <h5 class="card-title">Cliphy</h5>
                           <p class="card-text">Cliphy demonstrates usage of Cloudinary api to solely 
                           use multi-part http.</p>
                           <a href="https://github.com/ericblancas23/movingImages-cliphy">Github Repo</a>
                       </div>
                     </div>
                   </div>

                   <div class="col-sm-6 col-lg-3">
                   <img class="card-img-top" alt="Card header image" src={require("../img/airbnb.png")} />
                     <div className="card mt-3">
                       <div className="card-body">
                           <h5 class="card-title">Airbnb Copy</h5>
                           <p class="card-text">Airbnb Copy to demonstrate use of Search Filter component,
                           Masonry Layout, and api-calls</p>
                           <a href="https://github.com/ericblancas23/airbnb-clone">Github Repo</a>
                       </div>
                     </div>
                   </div>

                   <div class="col-sm-6 col-lg-3">
                   <img class="card-img-top" alt="Card header image" src={require("../img/weather.png")} />
                   <div className="card mt-3">
                       <div className="card-body">
                           <h5 class="card-title">Weather</h5> 
                           <p class="card-text">First Project done in React framework. Applied a Weather Api
                           to filter certain Cities and their current weather conditions</p>
                           <a href="https://github.com/ericblancas23/weather-application">Github Repo</a>
                       </div>
                     </div>
                   </div>


                   <div class="col-sm-6 col-lg-3">
                   <img class="card-img-top" alt="Card header image" src={require("../img/carpool2.png")} />
                     <div className="card mt-3">
                       <div className="card-body">
                           <h5 class="card-title">Carpool</h5>
                           <p class="card-text">Capstone Project that delivers a Carpooling and Social Media Experience.
                           App, has taught me both Development skills and Product Management</p>
                           <a href="https://github.com/ericblancas23/taxi-app">Github Repo</a>
                       </div>
                     </div>
                   </div>

                   {/* <div class="col-sm-6 col-lg-3">
                     <div className="card">
                       <div className="card-body">
                           <h5 class="card-title">Project 1</h5>
                           <p class="card-text">An awesome project</p>
                       </div>
                     </div>
                   </div> */}


                </div>

              </div>

            </div>
        );
    }
}