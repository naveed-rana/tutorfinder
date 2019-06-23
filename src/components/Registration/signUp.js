import React, { Component } from 'react';
import './styles.css';
import Button from '../button/button';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpFirstNameInput: "",
            signUpLastNameInput: "",
            signUpEmailInput: "",
            signUpPasswordInput: "",
            signUoQualificationInput: "Matric"
        }
    }
    onChangeForSelect = (e) => {
        this.setState({signUoQualificationInput: e.target.value});
    }
    onChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: this.state.signUpFirstNameInput,
            lastName: this.state.signUpLastNameInput,
            email: this.state.signUpEmailInput,
            password: this.state.signUpPasswordInput,
            qualification: this.setState.signUoQualificationInput
        }
        console.log(newUser);
    }
    render() {
        return (
            <div className="row hide-on-med-and-down">
                <div className="col l6 m12 s12" id="signUp">
                    <div className="col l0 offset-l2 m8 offset-m2 s10 offset-s1">
                        <h4 className="center-align"><b>Get started today</b></h4>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="col l6 m12 s12" style={{padding: "0px 5px 0px 0px"}}>
                                <label htmlFor="signUpFirstNameInput">First Name</label>
                                <input
                                onChange={this.onChange}
                                value={this.state.signUpFirstNameInput}
                                className="browser-default"
                                id="signUpFirstNameInput"
                                type="text" name="name"
                                /><br/><br/>
                            </div>
                            <div className="col l6 m12 s12" style={{padding: "0px 0px 0px 5px"}}>
                                <label htmlFor="signUpLastNameInput">Last Name</label>
                                <input
                                onChange={this.onChange}
                                value={this.state.signUpLastNameInput}
                                className="browser-default"
                                id="signUpLastNameInput"
                                name="password" type="text"/>
                            </div>
                            <div className="col s12" style={{padding: "0px"}}>
                                <label htmlFor="signUpEmailInput">Email</label>
                                <input
                                onChange={this.onChange}
                                value={this.state.signUpEmailInput}
                                className="browser-default"
                                id="signUpEmailInput"
                                name="password"
                                type="text"
                                /><br/><br/>
                            </div>
                            <div className="col s12" style={{padding: "0px"}}>
                                <label htmlFor="signUpPasswordInput">Password</label>
                                <input
                                onChange={this.onChange}
                                value={this.state.signUpPasswordInput}
                                className="browser-default"
                                id="signUpPasswordInput"
                                name="password" type="password"/><br/><br/>
                            </div>
                            <div className="col s12" style={{padding: "0px"}}>
                                <label htmlFor="signUpEmailInput">Qualification</label>
                                <select
                                onChange={this.onChangeForSelect}
                                value={this.state.signUoQualificationInput}
                                className="browser-default"
                                name="qualification"
                                id="signUoQualificationInput">
                                    <option value="Matric">Matric</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Bachcont">Bachelor continued...</option>
                                </select><br/><br/>
                            </div>
                            <Button
                                dimensions = "col s6 offset-s3 m4 offset-m4 l4 offset-l4"
                                title = "Sign up"
                                icon = "arrow_forward"
                            /><br/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

 
export default Signup;