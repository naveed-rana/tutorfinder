import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// import 'material-icons/css/material-icons.min.css'
import "./signup.css";
import { Link } from "react-router-dom";
import toastr from "toastr";
import { createUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      fName: "",
      lName: "",
      fatherName: "",
      rNo: "",
      phone: "",
      email: "",
      password: "",
      cPassword: "",
      city: "",
      address: "",
      skill: "",
      loader: false
    };
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll("select");
      M.FormSelect.init(elems);
    });
  }
  signup = () => {
    if (this.state.password !== this.state.cPassword) {
      toastr.error("password does not matched");
    } else {
      this.setState({
        loader: true
      });
      let data = {
        uname: this.state.uname,
        fName: this.state.fName,
        lName: this.state.lName,
        fatherName: this.state.fatherName,
        rNo: this.state.rNo,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
        cPassword: this.state.cPassword,
        city: this.state.city,
        address: this.state.address,
        skill: this.state.skill
      };
      console.log(data);
      this.props.createUser(data);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.signUpStatus === "done") {
      this.setState({
        loader: false
      });
      this.props.history.push("/");
    } else {
      if (nextProps.signUpStatus === "error") {
        this.setState({
          loader: false
        });
      }
    }
  }
  render() {
    const { loader } = this.state;
    return (
      <div className="light-blue lighten-5">
        <div class="row mar">
          <div class="col s12 m8  ">
            <div class="card blue accent-3">
              <div class="card-content white-text">
                <span class="card-title center">REGISTRATION FORM </span>
                <form class="col s12">
                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      placeholder="User Name"
                      id="first_name"
                      type="text"
                      class="validate"
                      onChange={e => {
                        this.setState({
                          uname: e.target.value
                        });
                      }}
                    />
                  </div>

                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      placeholder="First Name"
                      id="first_name"
                      type="text"
                      class="validate"
                      onChange={e => {
                        this.setState({
                          fName: e.target.value
                        });
                      }}
                    />
                  </div>

                  <div class="input-field col s12 m6 white-text">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      placeholder="Last Name"
                      id="first_name"
                      type="text"
                      class="validate"
                      onChange={e => {
                        this.setState({
                          lName: e.target.value
                        });
                      }}
                    />
                    {/* <label for="first_name">Last Name</label> */}
                  </div>

                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      placeholder="Father Name"
                      id="first_name"
                      type="text"
                      class="validate"
                      onChange={e => {
                        this.setState({
                          fatherName: e.target.value
                        });
                      }}
                    />
                    {/* <label for="first_name">Father Name</label> */}
                  </div>

                  <div class="input-field col s12 m6 white-text">
                    <i class="material-icons prefix">info</i>
                    <input
                      placeholder="Reg No"
                      id="first_name"
                      type="text"
                      class="validate"
                      onChange={e => {
                        this.setState({
                          rNo: e.target.value
                        });
                      }}
                    />
                    {/* <label for="first_name">Reg No</label> */}
                  </div>

                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">phone</i>
                    <input
                      placeholder="Phone"
                      id="first_name"
                      type="text"
                      class="validate"
                      onChange={e => {
                        this.setState({
                          phone: e.target.value
                        });
                      }}
                    />
                  </div>

                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">email</i>
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
                    {/* <label for="first_name">Email</label> */}
                  </div>

                  <div class="input-field col s12 m6 white-text">
                    <i class="material-icons prefix">fingerprint</i>
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
                    {/* <label for="first_name">Password</label> */}
                  </div>
                  <div class="input-field col s12 m6 white-text">
                    <i class="material-icons prefix">fingerprint</i>
                    <input
                      placeholder="Conform Password"
                      id="first_name"
                      type="password"
                      class="validate"
                      onChange={e => {
                        this.setState({
                          cPassword: e.target.value
                        });
                      }}
                    />
                    {/* <label for="first_name">Conform Password</label> */}
                  </div>
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">home</i>
                    <input
                      placeholder="City"
                      id="first_name"
                      type="text"
                      class="validate"
                      onChange={e => {
                        this.setState({
                          city: e.target.value
                        });
                      }}
                    />
                    {/* <label for="first_name">City</label> */}
                  </div>


                  <div class="input-field col s12">
                    <i class="material-icons prefix">contact_mail</i>
                    <input
                      placeholder="Address"
                      id="first_name"
                      type="text"
                      class="validate"
                      onChange={e => {
                        this.setState({
                          address: e.target.value
                        });
                      }}
                    />
                    {/* <label for="first_name">Address</label> */}
                  </div>
                  <div className="col s12 text-white">
                    <label>
                      <input type="checkbox" />
                      <span className="white-text">
                        I agree all statements in Terms of Service
                      </span>
                    </label>
                  </div>

                  {/* </div> */}
                </form>
                <ul>
                  <button
                    onClick={this.signup}
                    disabled={loader}
                    className="waves-effect blue  btn-small bt"
                  >
                    sign up
                  </button>
                  <li className="waves-effect blue waves-light btn-small center-align bt">
                    <Link className="white-text" to="./login">
                      Log in{" "}
                    </Link>
                  </li>
                </ul>
                {loader ? <CircularProgress /> : <p />}

                {/* <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p> */}
              </div>
              {/* <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    signUpStatus: state.userReducer.signUpStatus,
    loader: state.userReducer.loader,
    userStatus: state.userReducer.userStatus
  };
};
export default connect(
  mapStateToProps,
  { createUser }
)(Signup);
