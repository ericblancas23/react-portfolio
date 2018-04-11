import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return(
        <div className="contact">
            <div class="col-sm-12 col-md-6 offset-md-3">
              <h3>Reach out!</h3>
              <form action="mailto:ericblancas23@gmail.com" method="post">
          <div class="form-group">
               <input type="text" class="form-control" id="email" placeholder="Your email.." />
            </div>
          <div class="form-group">
               <textarea class="form-control" placeholder="Your message..">            
               </textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          
          </form>
          
            </div>
          </div>
        );
    }
}