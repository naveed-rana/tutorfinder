import React, { Component } from 'react';
import './style.css';
import completedtask from './completedtask.png';
import successful1 from './successful1.png';
import tutor2 from './tutor2.png';
import institute8 from './institute8.png';
import { NavLink } from 'react-router-dom';

class Aftersignup extends Component {
    state = {  }
    render() {
        return (
            <div className="row" id="afterSignup">
                <div className="col s12">
                    <h4 className="center-align"><img src={completedtask} alt="After Sign up"/></h4>
                </div>
                <div className="col l7 offset-l3">
                    <h5>Who you are?</h5>
                    <p>Let us know, so that we can provide you the best results.</p>
                </div>
                <div className="col l6 offset-l3 m8 offset-m2 s12">
                    <NavLink to="/portal" style={{color: "black"}}>
                        <div className="col l6 offset-l3 m8 offset-m2 s10 offset-s1 z-depth-1 hoverable">
                            <div className="col l3 m5 s4">
                                <img style={{width: "80%"}} src={successful1} alt=""/>
                            </div>
                            <div className="col l9 m7 s8">
                                <h6>A Student</h6>
                                <p>Looking for Tutor.</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/completetutorprofile" style={{color: "black"}}>
                        <div className="col l6 offset-l3 m8 offset-m2 s10 offset-s1 z-depth-1 hoverable">
                            <div className="col l3 m5 s4">
                                <img style={{width: "80%"}} src={tutor2} alt=""/>
                            </div>
                            <div className="col l9 m7 s8">
                                <h6>A Tutor</h6>
                                <p>Looking for Tutions/Students.</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/completeinstituteprofile" style={{color: "black"}}>
                        <div className="col l6 offset-l3 m8 offset-m2 s10 offset-s1 z-depth-1 hoverable">
                            <div className="col l3 m5 s4">
                                <img style={{width: "80%"}} src={institute8} alt=""/>
                            </div>
                            <div className="col l9 m7 s8">
                                <h6>An Institute</h6>
                                <p>Looking for Tutor/Students, Publish your course.</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}
 
export default Aftersignup;