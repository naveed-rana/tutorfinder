import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./signup.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogin } from "../redux/actions/userActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import toastr from "toastr";
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
      this.props.history.push("/");
    }
  }

  render() {
    const { loader } = this.state;
    return (
      <div class="row mar">
        <div class="col s6 m8  ">
          <div class="card xp">
            <div style={{textAlign:'center'}} class="card-content white-text">
              <div><img src={require('../images/loginpage.png')}/></div>
              <form class="col s12">
                <div class="input-field col s12 m6 ">
                  <i class="material-icons prefix">account_circle</i>
                  <input
                    placeholder="Email"
                    id="first_name"
                    type="text"
                    class="validate"
                    onChange={e => {
                      this.setState({
                        email: e.target.value
                      });
                    }}
                  />
                </div>

                <div class="input-field col s12 m6 white-text">
                  <i class="material-icons prefix">account_circle</i>
                  <input
                    placeholder="Password"
                    id="first_name"
                    type="password"
                    class="validate"
                    onChange={e => {
                      this.setState({
                        password: e.target.value
                      });
                    }}
                  />
                </div>
              </form>

              {/* <div class="card-action"> */}
              {/* <div className="algin center"> */}
              <ul>
                <button
                  disabled={loader}
                  onClick={this.logIn}
                  className="waves-effect blue  btn-small center-align bt"
                >
                  {/* <button type="submit" className="white-text"> */}
                  SIGN IN
                  {/* </button> */}
                </button>
                <li className="waves-effect blue  btn-small center-align bt">
                  <Link className="white-text" to="./forget">
                    forget_password
                  </Link>
                </li>
                <li className="waves-effect blue  btn-small center-align bt">
                  <Link className="white-text" to="./signup">
                    SIGN UP
                  </Link>
                </li>
              </ul>
              {loader ? <CircularProgress /> : <p />}
            </div>
          </div>
        </div>
      </div>
      // </div>
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
