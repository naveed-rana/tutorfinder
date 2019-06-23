import React, { Component } from 'react';
import './style.css';
import completedtask from './completedtask.png';
import graduation from './graduation.png';
import location from './location.png';
import toastr from "toastr";
import { createUser } from "../../../redux/actions/userActions";
import { connect } from "react-redux";

class Completetutorprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tagName: "",
            qualification: [
                
            ],
            currentResidence: "",
            mblNumber: ""
        }
    }
    onClick = (e) => {
        const newQualification = {
            degreeTitle: this.refs.degreeTitle.value,
            degreeInstitute: this.refs.degreeInstitute.value
        }

        let data = this.state.qualification;
        data.concat(newQualification);
        this.setState({qualification:data});

        console.log(newQualification);
        
    }
    onChangeHandler = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    onSubmithandler = (e) => {
        e.preventDefault();
        let data = localStorage.getItem("data");
        data = JSON.parse(data);
        console.log('data,',data);
        if(data !=null){
        const newTutor = {
            email : data.email,
            password:data.password,
            name: this.state.name,
            tagName: this.state.tagName,
            currentResidence: this.state.currentResidence,
            mblNumber: this.state.mblNumber,
            degreeTitle: this.refs.degreeTitle.value,
            degreeInstitute: this.refs.degreeInstitute.value
        }
        console.log("newTutor",newTutor);
        this.props.createUser(newTutor);
    }
    }

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
            <div className="row" id="completetutorprofile">
                <div className="col s12">
                    <h4 className="center-align"><img src={completedtask} alt="After Sign up"/></h4>
                </div>
                <div className="col s12">
                    <h5 className="center-align" style={{marginBottom: "35px"}}>Complete your Profile</h5>
                </div>
                <div className="col l8 offset-l2 m10 offset-m1 s12">
                    <form noValidate onSubmit={this.onSubmithandler}>
                        <div className="col l7 m7 s8">
                            <h6>Personal:</h6>
                            {/* input for name */}
                            <input
                            onChange={this.onChangeHandler}
                            value={this.state.name}
                            ref="name"
                            className="browser-default"
                            type="text"
                            id="name"
                            placeholder="Enter Full Name"
                            />
                            {/* input for tagName */}
                            <input
                            onChange={this.onChangeHandler}
                            value={this.state.tagName}
                            ref="tagName"
                            className="browser-default"
                            type="text"
                            id="tagName"
                            placeholder="Enter tagname e.g. @mathExpert"
                            />
                            {/* input for mblNumber */}
                            <input
                            onChange={this.onChangeHandler}
                            value={this.state.mblNumber}
                            ref="mblNumber"
                            className="browser-default"
                            type="number"
                            id="mblNumber"
                            placeholder="Enter your Phone Number"
                            />
                            <h6>Qualification:</h6>
                            <div className="row" id="addqualification">
                                {this.state.qualification.map((key) => {
                                    return (
                                        <div key={key.id} className="row" style={{margin: "0px", padding: "0px"}}>
                                            <div className="row" style={{paddingLeft: "12px"}}>
                                                <div className="col l1 m2 s2">
                                                    <img style={{width: "110%"}} src={graduation} alt=""/>
                                                </div>
                                                <div className="col l11 m10 s10">
                                                    <p>{key.degreeTitle}</p>
                                                </div>
                                            </div>
                                            <div className="row" style={{paddingLeft: "12px", marginBottom: "0px"}}>
                                                <div className="col l1 m2 s2">
                                                    <img style={{width: "110%"}} src={location} alt=""/>
                                                </div>
                                                <div className="col l11 m10 s10">
                                                    <p>{key.degreeInstitute}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* input for degreeTitle */}
                            <input
                            ref="degreeTitle"
                            className="browser-default"
                            type="text"
                            id="degreeTitle"
                            placeholder="Enter Degree title"
                            />
                            {/* input for degreeinstitute */}
                            <input
                            ref="degreeInstitute"
                            className="browser-default"
                            type="text"
                            id="degreeInstitute"
                            placeholder="Enter Institute from where you earned the degree"
                            />
                            <div className="row" style={{paddingRight: "11.250px"}}>
                                <div className="right addqualification" onClick={this.onClick}>
                                    <p className="center-align">Add Qualification</p>
                                </div>
                            </div>
                            <h6>Residence:</h6>
                            {/* input for currentResidence */}
                            <input
                            onChange={this.onChangeHandler}
                            value={this.state.currentResidence}
                            ref="currentResidence"
                            className="browser-default"
                            type="text"
                            id="currentResidence"
                            placeholder="Enter your current residence"
                            />
                            <div className="row" style={{paddingRight: "11.250px"}}>
                                <button
                                disabled={loader}
                                type="submit" className="right">
                                    <p>Submit</p>
                                </button>
                            </div>
                        </div>
                        <div className="col l4 offset-l1 m4 offset-m1 s4">
                            <h6 className="center-align" style={{marginTop: "39px"}}>
                                <img style={{width: "60%", marginBottom: "10px"}} src={completedtask} alt=""/>
                                <input type="file" name="pic" accept="image/*" />
                            </h6>
                        </div>
                    </form>
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
  )(Completetutorprofile);