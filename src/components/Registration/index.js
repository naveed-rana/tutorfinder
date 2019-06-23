import React, { Component } from 'react';
import Register from './Register.js';
import Left from './left';

class Registration extends Component {
    state = {  }
    render() { 
        return (
            <div className="row">
                <div className="col l7 m7 s12">
                    <Left />
                 </div>
                 <div className="col l5 m5 hide-on-small-only">
                    <Register />
                 </div>
            </div>
        );
    }
}
 
export default Registration;