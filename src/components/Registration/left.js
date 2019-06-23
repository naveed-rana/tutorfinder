import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Left extends Component {
    state = {  }
    render() { 
        return (
            <div className="row">
                <div className="col l10 offset-l1 m10 offset-m1 s12" id="left">
                    <h3>Providing Tutions with ease.</h3>
                    <p>Your place to find the best Tutor, best tutions and intitutes for you.</p>
                    <NavLink to="/portal">
                        <div className="col l3 m4 s5" id="getstarted">
                            <h6 className="center-align">GET STARTED</h6>
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}
 
export default Left;