import React, { Component } from 'react';
import student2 from './student2.png';
import institute2 from './institute2.png';
import tutor2 from './tutor2.png';

class Whatistutors extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="whatistutor">
                <div className="col s12" style={{height: "20px"}}></div>
                <div className="col s12" style={{height: "20px"}}></div>
                <div className="col s12 hide-on-med-and-down" style={{height: "20px"}}></div>
                <div className="col s12" style={{height: "20px"}}></div>
                <div className="col s12 hide-on-small-only" style={{height: "20px"}}></div>
                <div className="col s12">
                    <h4 className="center-align" style={{color: "black", fontSize: "2.0rem"}}>What is <b>Tutors.edu.pk</b></h4>
                </div>
                <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
                    <p className="center-align" style={{color: "#798697", fontFamily: "proxima-nova, Helvetica Neue, Helvetica, arial, sans-serif"}}>
                        This is a place where you can choose one of the finest tutors in Pakistan, 
                        Find plenty of students for you and publish your cources and coaching classes etc.
                    </p>
                </div>
                <div className="container" style={{width:"85%"}}>
                    <div className="col s10 offset-s1 m4 l4" style={{marginTop: "84px"}}>
                        <div className="col s2 offset-s4">
                            <img src={student2} alt="student"/>
                        </div>
                        <div className="col s10 offset-s1">
                            <h5 className="center-align" style={{color: "#343f4b", fontSize: "1.4rem", fontWeight: "600"}}>Find The Best Tutor</h5>
                            <p className="center-align" style={{color: "#798697", fontSize: "1.0rem", fontFamily: "proxima-nova, Helvetica Neue, Helvetica, arial, sans-serif"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolorem accusantium animi quod maiores adipisci quaerat eaque dolores nam sint id.</p>
                        </div>
                    </div>
                    <div className="col s10 offset-s1 m4 l4" style={{marginTop: "84px"}}>
                        <div className="col s2 offset-s4">
                            <img src={tutor2} alt="student"/>
                        </div>
                        <div className="col s10 offset-s1">
                            <h5 className="center-align" style={{color: "#343f4b", fontSize: "1.4rem", fontWeight: "600"}}>Find Students For You</h5>
                            <p className="center-align" style={{color: "#798697", fontSize: "1.0rem", fontFamily: "proxima-nova, Helvetica Neue, Helvetica, arial, sans-serif"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolorem accusantium animi quod maiores adipisci quaerat eaque dolores nam sint id.</p>
                        </div>
                    </div>
                    <div className="col s10 offset-s1 m4 l4" style={{marginTop: "84px"}}>
                        <div className="col s2 offset-s4">
                            <img src={institute2} alt="student"/>
                        </div>
                        <div className="col s10 offset-s1">
                            <h5 className="center-align" style={{color: "#343f4b", fontSize: "1.4rem", fontWeight: "600"}}>Publish Your Cources</h5>
                            <p className="center-align" style={{color: "#798697", fontSize: "1.0rem", fontFamily: "proxima-nova, Helvetica Neue, Helvetica, arial, sans-serif"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Dolorem accusantium animi quod maiores adipisci quaerat eaque dolores nam sint id.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Whatistutors;