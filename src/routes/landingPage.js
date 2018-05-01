import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import Typed from 'react-typed';

export default class LandingPage extends Component {


    render() {
        return(
            <div>
               <LazyHero imageSrc="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/IjFi-wx/moving-stars-on-black-background_41x3vg3x__F0000.png"
              parallaxOffset={150}
              style={{height: "500px"}}
              color="black"
              opacity={0.4}
        >
                 <div style={{ color: "white"}}>
                       <h1 class="display-3"><Typed 
                    typedRef={(typed) => { this.typed = typed; }}
                    strings={['Hello', 'My name is Eric Blancas', 'Welcome to my portfolio!']} 
                    typeSpeed={60}
                    backSpeed={50} 
                    loop/></h1>
                </div>
              </LazyHero>
              <div className="landing-paragraph">
              <img src={require('../img/newpicofme.png')} alt="pic"/>
              <p>Born and raised in San Diego, CA. Growing up I always had an admiration for computers and technology, Xanga and MySpace had become my stepping stone towards web development. I would spend countless hours trying to make my profile page look colorful just to impress my friends and eventually from such a young age, it became one of my most treasured skills. Html/CSS was my first exposure to DOM manipulation of rendering colors, and creation of user interfaces; thus began my journey of becoming a web developer.
                 M.E.R.N Stack is my specialty, which is the acronym for MongoDB, Express, React, and Node. Majority of my projects are built with React (with ES6 syntax) and Node.JS platform, I also specialize in 
                 python; writing APIs with Flask. 
              </p>
              </div>
            </div>
        );
    }
}