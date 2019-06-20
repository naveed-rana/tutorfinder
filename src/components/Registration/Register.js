import React, { Component } from 'react';
import './style.css';
import google2 from './google2.png';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    onChangeHandler = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    onSubmitHandler = (e) => {
        const initialUserData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.email
        }
        console.log(initialUserData);
        localStorage.setItem("data",JSON.stringify(initialUserData))

        this.props.history.push("/whoyouare");
        
    }
    render() { 
        return (
            <div className="row" style={{marginTop: "30px"}}>
                <div className="col l8 offset-l2 m10 offset-m1 s12" id="register">
                    <h4 className="center-align">Get started Today</h4>
                    <p className="center-align">Create your free Zau account</p>
                    {/* <form> */}
                        {/* input for name */}
                        <input
                        onChange={this.onChangeHandler}
                        value={this.state.name}
                        className="browser-default"
                        type="text"
                        id="name"
                        placeholder="Enter Full Name"
                        />
                        {/* input for email */}
                        <input
                        onChange={this.onChangeHandler}
                        value={this.state.email}
                        className="browser-default"
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        />
                        {/* input for password */}
                        <input
                        onChange={this.onChangeHandler}
                        value={this.state.password}
                        style={{marginBottom: "0px"}}
                        className="browser-default"
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        />
                        <p id="passwordlength" style={{margin: "0px 0px 15px 0px"}}>Select password with at least 8 characters</p>
                        {/* <NavLink to="/whoyouare"> */}
                            <button type="submit" onClick={this.onSubmitHandler}>
                                JOIN THE COMUINTY
                            </button>
                        {/* </NavLink> */}
                    {/* </form> */}
                    {/* <h6 className="center-align">Or</h6>
                    <div id="googleRegister">
                        <p className="center-align">
                            <img style={{padding: "0px 7px 0px 0px"}} src={google2} alt=""/>
                            START WITH GOOGLE
                        </p>
                    </div> */}
                </div>
            </div>
        );
    }
}
 
export default withRouter(Register);