import React, { Component } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import Registration from '../Registration/index';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div className="row" id="wrapper">
                <Registration />
                <Explore />
            </div>
        );
    }
}

export default Header;


class Explore extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div className="col s2 offset-s5 hide-on-med-and-down" style={{marginTop: "-44px"}}>
                    <a href="#whatistutor" className="col s4 offset-s4" style={{color: "black", backgroundColor: "#C59E9E", borderRadius: "50%", height: "67px", width: "67px"}}>
                        <p style={{marginBottom: "0px"}}>Explore</p>
                        <i className="material-icons" style={{color: "black", padding: "0px 0px 0px 11px"}}>arrow_drop_down</i>
                    </a>
                </div>
                <div className="col s2 offset-s4 hide-on-large-only" style={{marginTop: "24px"}}>
                    <a href="#whatistutor" className="col s4 offset-s6" style={{color: "black", backgroundColor: "#C59E9E", borderRadius: "50%", height: "67px", width: "67px"}}>
                        <p style={{marginBottom: "0px"}}>Explore</p>
                        <i className="material-icons" style={{color: "black", padding: "0px 0px 0px 11px"}}>arrow_drop_down</i>
                    </a>
                </div>
            </div>
        );
    }
}
 
