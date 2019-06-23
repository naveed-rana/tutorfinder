
import React, { Component } from 'react';
import './style.css';
import Forstudents from './forstudents/index';
import Fortutors from './fortutors/index';
import Forinstitutes from './forinstitutes/index';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

class Howitworks extends Component {
    state = {  }
    render() { 
        return (
            <BrowserRouter>
            <div className="row" id="howitworks">
                <Howitworksheading />
                <Howitworksnav />
                <Switch>
                    <Route exact path="/" component={Forstudents} />
                    <Route exact path="/fortutors" component={Fortutors} />
                    <Route exact path="/forinstitutes" component={Forinstitutes} />
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

class Howitworksheading extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" style={{marginTop: "100px"}}>
                <h4 className="center-align" style={{fontSize: "2.0rem", padding: "87px 0px 40px 0px"}}>How it <b>Works?</b></h4>
            </div>
        );
    }
}

class Howitworksnav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styleForStd: {
                backgroundColor: "wheat"
            },
            styleForTtr: {
                backgroundColor: "#CACACA"
            },
            styleForInst: {
                backgroundColor: "#CACACA"
            }
        }
    }
    forStdOnClickHandler = () => {
        this.forAll(1);
    }
    forTtrOnClickHandler = () => {
        this.forAll(2);
    }
    forInstOnClickHandler = () => {
        this.forAll(3);
    }
    forAll = (decider) => {
        if(decider === 1) {
            this.setState({
                styleForStd: {
                    backgroundColor: "wheat"
                },
                styleForTtr: {
                    backgroundColor: "#CACACA"
                },
                styleForInst: {
                    backgroundColor: "#CACACA"
                }
            })
        } else if (decider === 2) {
            this.setState({
                styleForStd: {
                    backgroundColor: "#CACACA"
                },
                styleForTtr: {
                    backgroundColor: "wheat"
                },
                styleForInst: {
                    backgroundColor: "#CACACA"
                }
            })
        } else if (decider === 3) {
            this.setState({
                styleForStd: {
                    backgroundColor: "#CACACA"
                },
                styleForTtr: {
                    backgroundColor: "#CACACA"
                },
                styleForInst: {
                    backgroundColor: "wheat"
                }
            })
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col l10 offset-l1 m10 offset-m1 s12">
                    <NavLink to="/" style={{color: "black"}}>
                        <div className="col l4 m4 s12 selector" style={this.state.styleForStd} onClick={this.forStdOnClickHandler}>
                            <p className="center-align">For Students</p>
                        </div>
                    </NavLink>
                    <NavLink to="/fortutors" style={{color: "black"}}>
                        <div className="col l4 m4 s12 selector" style={this.state.styleForTtr} onClick={this.forTtrOnClickHandler}>
                            <p className="center-align">For Tutors</p>
                        </div>
                    </NavLink>
                    <NavLink to="/forinstitutes" style={{color: "black"}}>
                        <div className="col l4 m4 s12 selector" style={this.state.styleForInst} onClick={this.forInstOnClickHandler}>
                            <p className="center-align">For Institutes</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}
 
// export default Howitworksnav;
 
// export default Howitworksheading;
 
export default Howitworks;