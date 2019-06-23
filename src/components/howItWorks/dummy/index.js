import React, { Component } from 'react';

class Dummy extends Component {
    
    render() {
        const {label, details, image} = this.props;
        return (
            <div className="col l6 offset-l3 m8 offset-m2 s12" style={{marginTop: "30px"}}>
                <div className="col s3">
                    <img src={image} alt="signup"/>
                </div>
                <div className="col s9">
                    <h5 style={{color: "#343f4b", fontSize: "1.4rem", fontWeight: "600", margin: "0px 0px 10px 0px"}}>{label}</h5>
                    <p style={{color: "#5B6777", fontSize: "1.0rem", fontFamily: "proxima-nova, Helvetica Neue, Helvetica, arial, sans-serif"}}>
                        {details}
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Dummy;