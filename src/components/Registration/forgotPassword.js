import React, { Component } from 'react';
import login from './login.png';

class ForgotPassword extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="forgot">
                <div className="col s12">
                    <h4 className="center-align"><img src={login} alt="login"/></h4>
                </div>
                <div className="col l4 m6 offset-m3 s8 offset-s2 offset-l4">
                    <h5 className="center-align">Enter your Email.</h5>
                    <p className="center-align">We'll send your new password within 24 hours</p>
                </div>
                <div className="col l6 offset-l3 m8 offset-m2 s10 offset-s1">
                    <input className="browser-default" type="email" id="email" placeholder="Email"/>
                </div>
                <div className="col l6 offset-l3 m8 offset-m2 s10 offset-s1">
                    <button className="btn right z-depth-0" type="submit">
                        Send
                    </button>
                </div>
            </div>
        );
    }
}
 
export default ForgotPassword;