import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

export default class Projects extends Component {
    render() {
        return(
            <div className="project-section">
            <center><h1 style={{ paddingBottom: '2cm' }}>My Projects:</h1></center>
              <div className="container">

                <div className="row">

                   <div class="col-sm-6 col-lg-3">
                   <img class="card-img-top" alt="Card header image" src={require("../img/lambdashowcase.png")} style={{ height: 250, width: 250}}/>
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
                   <img class="card-img-top" alt="Card header image" src={require("../img/cliphy.png")} style={{ height: 250, width: 250}}/>
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
                   <img class="card-img-top" alt="Card header image" src={require("../img/airbnb.png")} style={{ height: 250, width: 250}}/>
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
                   <img class="card-img-top" alt="Card header image" src={require("../img/weather.png")} style={{ height: 250, width: 250}}/>
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
                   <img class="card-img-top" alt="Card header image" src={require("../img/ecommerce.png")} style={{ height: 250, width: 250}} />
                     <div className="card mt-3">
                       <div className="card-body">
                           <h5 class="card-title">Ecommerce</h5>
                           <p class="card-text">
                            Ecommerce Web Application that shows demonstration of fullstack code using Angular</p>
                           <a href="https://github.com/ericblancas23/ecommerce-app">Github Repo</a>
                       </div>
                     </div>
                   </div>

                   <div class="col-sm-6 col-lg-3">
                   <img class="card-img-top" alt="Card header image" src={require("../img/carpool2.png")} style={{ height: 250, width: 250}}/>
                     <div className="card mt-3">
                       <div className="card-body">
                           <h5 class="card-title">Carpool</h5>
                           <p class="card-text">Capstone Project that delivers a Carpooling and Social Media Experience.
                           App, has taught me both Development skills and Product Management</p>
                           <a href="https://github.com/ericblancas23/taxi-app">Github Repo</a>
                       </div>
                     </div>
                   </div>

                  <div class="col-sm-6 col-lg-3">
                   <img class="card-img-top" alt="Card header image" src={require("../img/uber33.jpg")} style={{ height: 320, width: 280}}/>
                     <div className="card mt-3">
                       <div className="card-body">
                           <h5 class="card-title">UberUI</h5>
                           <p class="card-text">A working and functional UI clone of UberUI </p>
                           <a href="https://github.com/ericblancas23/carpooling-UI">Github Repo</a>
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