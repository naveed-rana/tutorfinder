import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// import 'material-icons/css/material-icons.min.css'
import "./signup.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addPost } from "../redux/actions/postAction";

class PostGig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gigtitle :'',
      aboutgig :'',
      aboutuser : '',
      price : '',
      responsetime :'',
      skill : '',
      done: false,
      loading: false
    };
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll("select");
      M.FormSelect.init(elems);
    });
  }

  saveTodo = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const record = {
      gigtitle: this.state.gigtitle,
      aboutgig: this.state.aboutgig,
      aboutuser: this.state.aboutuser,
      price : this.state.price,
      responsetime :this.state.responsetime,
      skill : this.state.skill,
    useraddress: this.props.user.address,
    usercity: this.props.user.city,
    useremail:this.props.user.email,
    fName: this.props.user.city,
    fatherName: this.props.user.fatherName,
    lName: this.props.user.lName,
    phone: this.props.user.phone,
    uid: this.props.user.uid,
    uname: this.props.user.uname,
      createdAt: new Date().toString()
    };
    console.log("==============record======================");
    console.log(record);
    console.log("====================================");
    this.props.addPost(record);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if (nextProps.addPostStatus === "done") {
      this.props.history.push("/");
      window.location.reload();
    }
  }

  render() {
    console.log("user", this.props.user);
    const { loading } = this.state;
    const { user } = this.props;

    //     address: "naveed"
    // cPassword: "somesome"
    // city: "naveed"
    // docid: "hXAhvPUeYhTF8bsAyK63"
    // email: "hr.codeframe@gmail.com"
    // fName: "naveed"
    // fatherName: "naveed"
    // lName: "naveed"
    // password: "somesome"
    // phone: "naveed"
    // rNo: "naveed"
    // skill: ""
    // uid: "Fz6ZrLETq8ekUwZJ8tnUW3ojAx52"
    // uname: "naveed"

    return (
      <div className="light-blue lighten-5">
        <div class="row mar">
          <div class="col s12 m8  ">
            <div class="card blue accent-3">
              <div class="card-content white-text">
                <span class="card-title center">Post Gig </span>
                <form class="col s12" onSubmit={this.saveTodo}>
                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      // placeholder="User Name"
                      readOnly
                      value={user.uname}
                      id="first_name"
                      type="text"
                      class="validate"
                    />
                  </div>

                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      readOnly
                      value={user.fName}
                      id="first_name"
                      type="text"
                      class="validate"
                    />
                  </div>

                  <div class="input-field col s12 m6 white-text">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      readOnly
                      value={user.lName}
                      id="first_name"
                      type="text"
                      class="validate"
                    />
                    {/* <label for="first_name">Last Name</label> */}
                  </div>

                  {/* <div class="input-field col s12 m6 ">
        <i class="material-icons prefix">account_circle</i>
        <input placeholder="Father Name" id="first_name" type="text" class="validate" />
        <label for="first_name">Father Name</label>
       </div>                   */}
                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">phone</i>
                    <input
                      readOnly
                      value={user.phone}
                      id="first_name"
                      type="text"
                      class="validate"
                    />
                  </div>
                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">contact_mail</i>
                    <input
                      readOnly
                      value={user.email}
                      id="mail"
                      type="email"
                      class="validate"
                    />
                  </div>
                  <div class="input-field col s12 m6">
                    <i class="material-icons prefix">home</i>
                    <input
                      readOnly
                      value={user.city}
                      id="city"
                      type="text"
                      class="validate"
                    />
                    {/* <label for="first_name">City</label> */}
                  </div>

                  <div class="input-field col s12">
                    <i class="material-icons prefix">contact_mail</i>
                    <input
                      readOnly
                      value={user.address}
                      id="first_name"
                      type="text"
                      class="validate"
                    />
                    {/* <label for="first_name">Address</label> */}
                  </div>
                  <div class="input-field col s12 m12 white-text">
                    <i class="material-icons prefix">info</i>
                    <input
                    onChange={(e)=>this.setState({gigtitle:e.target.value})}
                      placeholder="Title of th Gig"
                      id="Gig"
                      type="text"
                      class="validate"
                    />
                    {/* <label for="first_name">Reg No</label> */}
                  </div>

                  <div class="row">
                    <div class="input-field col s6 m12">
                      <i class="material-icons prefix">mode_edit</i>
                      <textarea
                      onChange={(e)=>this.setState({aboutgig:e.target.value})}
                        id="icon_prefix2"
                        class="materialize-textarea"
                      />
                      <label for="icon_prefix2">Full detail of a Gig</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s6 m12">
                      <i class="material-icons prefix">mode_edit</i>
                      <textarea
                      onChange={(e)=>this.setState({aboutuser:e.target.value})}
                        id="icon_prefix2"
                        class="materialize-textarea"
                      />
                      <label for="icon_prefix2">Abou me</label>
                    </div>
                  </div>

                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">monetization_on</i>
                    <input
                    onChange={(e)=>this.setState({price:e.target.value})}
                      placeholder="starting price"
                      id="starting_price"
                      type="text"
                      class="validate"
                    />
                  </div>

                  <div class="input-field col s12 m6 ">
                    <i class="material-icons prefix">timer</i>
                    <input
                    onChange={(e)=>this.setState({responsetime:e.target.value})}
                      placeholder="Avg Response time"
                      id="avg_time"
                      type="text"
                      class="validate"
                    />
                  </div>

                  {/* <div class="input-field col s12 m6 ">
       <i class="material-icons prefix">email</i>
                                              <input placeholder="Email" id="first_name" type="text" class="validate" />
                                               {/* <label for="first_name">Email</label> */}
                  {/* </div> */}

                  <div className="input-field col s12 m12 blue">
                    <select onChange={(e)=>this.setState({skill:e.target.value})} className=" browser-default">
                      <option value="" disabled selected>
                        Choose your Skill
                      </option>
                      <option className="white-text" value="" disabled selected>
                        Choose Your Skill{" "}
                      </option>
                      <option value="1">Android Developer</option>
                      <option value="2">Book Keeper</option>
                      <option value="3">Content Writer</option>
                      <option value="4">Customer Service Representative</option>
                      <option value="5">CopyWriter</option>
                      <option value="6">Database Administrator</option>
                      <option value="7">Data Scientist</option>
                      <option value="8">Facebook Developer</option>
                      <option value="9">Apple UIKit</option>
                      <option value="10">Apple Xcode</option>
                      <option value="11">Articulate storyline</option>
                      <option value="12">Atlassian Confluence</option>
                      <option value="13">Blockchain</option>
                      <option value="14">Customer retention</option>
                      <option value="15">eLearning</option>
                      <option value="16">Enterprise architecture</option>
                    </select>
                  </div>

                  <div className="col s12 text-white">
                    <label>
                      <input type="checkbox" />
                      <span className="white-text">
                        I agree all statements in Terms of Service
                      </span>
                    </label>
                  </div>
                  <ul>
                    {loading ? (
                        <li className="waves-effect blue  btn-small bt">
                       Loading ...
                      </li>
                    ) : (
                      <li className="waves-effect blue  btn-small bt">
                        <input className="white-text" type="submit" />
                      </li>
                    )}
                  </ul>
                  {/* </div> */}
                </form>

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
function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    addPostStatus: state.postReducer.addPostStatus,
    loader: state.postReducer.loader
  };
}

export default connect(
  mapStateToProps,
  { addPost }
)(PostGig);
