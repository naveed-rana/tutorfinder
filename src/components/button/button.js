import React, { Component } from 'react';
import './style.css';

class Button extends Component {
    
    render() {
        const {dimensions, title, icon} = this.props;
        return (
            <div className="row" id="button">
                <button className={dimensions} type="submit">
                    <div className="col s9">
                        <h6 className="center-align" style={{margin: "0px"}}>{title}</h6>
                    </div>
                    <div className="col s2">
                        <i className="tiny material-icons">{icon}</i>
                    </div>
                </button>
            </div>
        );
    }
}
 
export default Button;