import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return(
        <div className="contact">
            <div class="col-sm-12 col-md-6 offset-md-3">
              <h1 style={{textAlign: "center", marginBottom: "1cm"}}>Reach out!</h1>
              <div>
                {/* <img src="https://cdn0.iconfinder.com/data/icons/loan-and-investment/64/Icon_Set_Money_Loan-20-512.png" 
                 style={{ height: "250px", width: "250px"}}/> */}
                    <h3 style={{display: "inline"}}>ericblancas23@gmail.com</h3>
                {/* <img src="" 
                    style={{height: "150px", width: "250px", marginRight: "55px"}}
                /> */}
                    <h3 style={{display: "inline", marginLeft: "1cm"}}>(+1)619-274-0540</h3>
                </div>
          
            </div>
          </div>
        );
    }
}