import React, { Component } from 'react';
import './style.css';
import Institutesportal from './Institutes/index';
import Lrportal from './LearningRequests/index';
import Studentsportal from './Students/index';
import Tutorsportal from './Tutors/index';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

class Portal extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div className="row" id="portal">
                    <h2 className="center-align">Welcome to Portal</h2>
                    <Portalnav />
                    <Switch>
                        <Route exact path="/portal" component={Tutorsportal} />
                        <Route path="/portal/institutesportal" component={Institutesportal} />
                        <Route path="/portal/lrportal" component={Lrportal} />
                        <Route path="/portal/studentsportal" component={Studentsportal} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

class Portalnav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styleForTtr: {
                color: "black",
                fontWeight: 550,
            },
            styleForInst: {
                
            },
            styleForLR: {
                
            },
            styleForStd: {
                
            }
        }
    }
    forTtrOnClickHandler = () => {
        this.forAll(1);
    }
    forInstOnClickHandler = () => {
        this.forAll(2);
    }
    forLROnClickHandler = () => {
        this.forAll(3);
    }
    forStdOnClickHandler = () => {
        this.forAll(4);
    }
    forAll = (decider) => {
        if(decider === 1) {
            this.setState({
                styleForTtr: {
                    color: "black",
                    fontWeight: 550,
                },
                styleForInst: {
                    color: "#5B6777",
                    fontWeight: 549,
                },
                styleForLR: {
                    color: "#5B6777",
                    fontWeight: 549
                },
                styleForStd: {
                    color: "#5B6777",
                    fontWeight: 549
                }
            })
        } else if(decider === 2) {
            this.setState({
                styleForTtr: {
                    color: "#5B6777",
                    fontWeight: 549
                },
                styleForInst: {
                    color: "black",
                    fontWeight: 550,
                },
                styleForLR: {
                    color: "#5B6777",
                    fontWeight: 549
                },
                styleForStd: {
                    color: "#5B6777",
                    fontWeight: 549
                }
            })
        } else if(decider === 3) {
            this.setState({
                styleForTtr: {
                    color: "#5B6777",
                    fontWeight: 549,
                },
                styleForInst: {
                    color: "#5B6777",
                    fontWeight: 549,
                },
                styleForLR: {
                    color: "black",
                    fontWeight: 550,
                },
                styleForStd: {
                    color: "#5B6777",
                    fontWeight: 549
                }
            })
        } else if(decider === 4) {
            this.setState({
                styleForTtr: {
                    color: "#5B6777",
                    fontWeight: 549
                },
                styleForInst: {
                    color: "#5B6777",
                    fontWeight: 549,
                },
                styleForLR: {
                    color: "#5B6777",
                    fontWeight: 549
                },
                styleForStd: {
                    color: "black",
                    fontWeight: 550,
                }
            })
        }
    }
    render() {
        return (
            <div className="row" id="portalnav">
                <div className="col l10 offset-l1 m10 offset-m1 s12" id="line">
                    <div className="col l7 m8 s10" style={{padding: "0px"}}>
                        <div className="col l2 m3 s3" style={{padding: "0px"}}>
                            <NavLink to="/portal">
                            <p style={this.state.styleForTtr} onClick={this.forTtrOnClickHandler}>Tutors</p>
                            </NavLink>
                        </div>
                        <div className="col l2 m3 s3" style={{padding: "0px"}}>
                            <NavLink to="/portal/institutesportal">
                                <p style={this.state.styleForInst} onClick={this.forInstOnClickHandler}>Institutes</p>
                            </NavLink>
                        </div>
                        <div className="col l3 m3 s3"style={{padding: "0px"}}>
                            <NavLink to="/portal/lrportal">
                                <p style={this.state.styleForLR} onClick={this.forLROnClickHandler} >Learning Requests</p>
                            </NavLink>
                        </div>
                        <div className="col l2 m3 s3"style={{padding: "0px"}}>
                            <NavLink to="/portal/studentsportal">
                                <p style={this.state.styleForStd} onClick={this.forStdOnClickHandler} >Students</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
// export default Portalnav;

export default Portal;