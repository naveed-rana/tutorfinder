import React, { Component } from 'react';
import login from './login.png';
import google2 from './google2.png';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogin } from "../../redux/actions/userActions";
import toastr from "toastr"

class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          loader: false
        };
      }
      logIn = () => {
        if (this.state.email === "" || this.state.password === "") {
          toastr.error("invalid data");
        } else {
          this.setState({
            loader: true
          });
          let data = {
            email: this.state.email,
            password: this.state.password
          };
          console.log(data);
          this.props.startLogin(data);
        }
      };
      componentWillReceiveProps(nextProps) {
        this.setState({
          loader: false
        });
        if (nextProps.isLoading === "move") {
          this.props.history.push("/tutorportal");
        }
      }

    render() { 
        const { loader } = this.state;
        return (
            <div className="row" id="login">
                <div className="col s12">
                    <h4 className="center-align"><img src={login} alt="login"/></h4>
                </div>
                <div className="col s12">
                    <h5 className="center-align">Login using your email and password</h5>
                </div>
                <div className="col l6 m6 s12" id="loginwithemail">
                    <div className="col l6 offset-l5 m8 offset-m3 s10 offset-s1">
          
                            <input className="browser-default" onChange={e => {
                      this.setState({
                        email: e.target.value
                      });
                    }} type="email" id="email" placeholder="Email"/>
                            <input  
                            onChange={e => {
                                this.setState({
                                  password: e.target.value
                                });
                              }}
                            className="browser-default" type="password" id="password" placeholder="Password"/>
                            <button  disabled={loader}
                  onClick={this.logIn} type="submit">LOG IN</button>
                      
                        <NavLink to="/forgot"><p style={{marginBottom: "10px", cursor: "pointer"}}>Forgot your password?</p></NavLink>
                        {/* <p style={{color: "black", marginBottom: "10px"}} className="center-align hide-on-med-and-up">Or</p>
                        <div className="hide-on-med-and-up" id="googlelogin">
                            <p className="center-align">
                                <img style={{padding: "0px 7px 0px 0px"}} src={google2} alt=""/>
                                CONNECT WITH GOOGLE
                            </p>
                        </div> */}
                    </div>
                </div>
                {/* <div className="col l6 m6 s12">
                    <div className="col l6 offset-l1 m8 offset-m1 hide-on-small-only" id="loginwithgoogle">
                        <p className="center-align" style={{color: "black", paddingBottom: "10px"}}>Or</p>
                        <div id="googlelogin">
                            <p className="center-align">
                                <img style={{padding: "0px 7px 0px 0px"}} src={google2} alt=""/>
                                CONNECT WITH GOOGLE
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      isLoading: state.userReducer.isLoading,
      hasErrored: state.userReducer.hasErrored
    };
  };
  
  export default connect(
    mapStateToProps,
    { startLogin }
  )(Login);
  