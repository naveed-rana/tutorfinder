import React, { Component } from 'react';
import './style.css';
import completedtask from './completedtask.png';

class Completeinstituteprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            headTeacherName: "",
            location: "",
            institutebuilding: "rented"
        }
    }
    onChangeHandler = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        const newInstitute ={
            name: this.state.name,
            headTeacherName: this.state.headTeacherName,
            location: this.state.location,
            institutebuilding: this.state.institutebuilding
        }
        console.log(newInstitute);
    }
    render() {
        return (
            <div className="row" id="completeinstituteprofile">
                <div className="col s12">
                    <h4 className="center-align"><img src={completedtask} alt="After Sign up"/></h4>
                </div>
                <div className="col s12">
                    <h5 className="center-align" style={{marginBottom: "35px"}}>Complete your Profile</h5>
                </div>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="col l8 offset-l2 m10 offset-m1 s12">
                        <div className="col l7 m7 s8">
                            <h6>Personal:</h6>
                            {/* input for name of the academy */}
                            <input
                            onChange={this.onChangeHandler}
                            value={this.state.name}
                            ref="name"
                            className="browser-default"
                            type="text"
                            id="name"
                            placeholder="Enter Name of the Academy e.g. Panacloud"
                            />
                            {/* input for name of the Heada Teacher */}
                            <input
                            onChange={this.onChangeHandler}
                            value={this.state.headTeacherName}
                            ref="headTeacherName"
                            className="browser-default"
                            type="text"
                            id="headTeacherName"
                            placeholder="Enter Name of the Head Teacher"
                            />
                            <h6>Location:</h6>
                            {/* input for location of the Acadmey */}
                            <input
                            onChange={this.onChangeHandler}
                            value={this.state.location}
                            ref="location"
                            className="browser-default"
                            type="text"
                            id="location"
                            placeholder="Enter location e.g. Jail road, Faisalabad."
                            />
                            <h6>Choose Building Status:</h6>
                            {/* input for building status */}
                            <select
                            onChange={this.onChangeHandler}
                            ref="institutebuilding"
                            className="browser-default"
                            name="institutebuilding"
                            id="institutebuilding"
                            >
                                <option value="buildingstatus" disabled>Choose Building Status</option>
                                <option value="rented">Rented</option>
                                <option value="owned">Owned</option>
                            </select>
                            <div className="row" style={{paddingRight: "11.250px"}}>
                                <button type="submit" className="right">
                                    <p>Submit</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Completeinstituteprofile;