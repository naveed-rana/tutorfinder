import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserGraduate,
    faMapMarkerAlt,
    faQuestionCircle,
    faBriefcase,
    faPhoneAlt,
    faMailBulk
} from '@fortawesome/free-solid-svg-icons';
import man from './man.png';
import './style.css';
import { connect } from 'react-redux';



class TutorProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery:''}
           
    }


//     currentResidence: "fsd"
// degreeInstitute: "uaf"
// degreeTitle: "bsse"
// email: "hatasipi@averdov.com"
// id: "wbAMV2chcZcCacmshV0v"
// mblNumber: "0303"
// name: "naveed-rana"
// password: "hatasipi@averdov.com"
// tagName: "math"

    render() {
        const {tutors,searchQuery} = this.state;
        const {tutor} = this.props;
        console.log('data from db',this.props.data);
        
        return (
            <div>
                
           
                        <div style={{width:'80%'}}  className="row z-depth-1 hoverable" id="tutorprofile">
                            <div className="col l12 m12 s12" id="tutordp">
                                <h6 className="center-align">
                                    <img src={man} style={{width: "25%"}} alt=""/>
                                </h6>
                            </div>

                            <div className="col l12 m12 s12" id="tutordata" style={{padding: "15px"}}>
                                <h5 className="center-align">{tutor.name}</h5>
                                <p className="center-align" style={{fontSize: "0.7rem", color: "#8A8A8A"}}>{tutor.tagNameOfTutor}</p>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p>Tutor</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faUserGraduate} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p>{tutor.degreeTitle}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faBriefcase} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p>{tutor.degreeInstitute}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p>{tutor.currentResidence}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p>{tutor.mblNumber}</p>
                                    </div>
                                </div>
                                <div className="row myrow">
                                    <div className="col l1 m1 s1" style={{padding: "0px"}}>
                                        <FontAwesomeIcon icon={faMailBulk} size="lg" />
                                    </div>
                                    <div className="l11 m11 s11" style={{padding: "0px"}}>
                                        <p>{tutor.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                
            </div>
        );
    }
}
 


 const mapStateToProps = state => {
    return {
        tutor: state.userReducer.user
    };
  };
  export default connect(mapStateToProps)(TutorProfile);