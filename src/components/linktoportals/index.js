import React, { Component } from 'react';
import './style.css';

class Linktoportals extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="linktoprtal">
                <div className="col s12 m6 l4">
                    <div className="col s8 offset-s2">
                        <h6 className="center-align">Visit Tutors Portal</h6>
                    </div>
                </div>
                <div className="col s12 m6 l4">
                    <div className="col s8 offset-s2">
                        <h6 className="center-align">Visit Academies Portal</h6>
                    </div>
                </div>
                <div className="col s12 m6 offset-m3 l4">
                    <div className="col s8 offset-s2">
                        <h6 className="center-align">Visit Learning Requests</h6>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Linktoportals;