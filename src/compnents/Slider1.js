import React, { Component } from 'react';
import '../App.css';
import M from 'materialize-css/dist/js/materialize.min.js';
// import  Slider1 from '../images/Slider1.jpg';
// import  Slider7 from '../images/Slider7.jpg';
// import  Slider5 from '../images/Slider5.jpg';
// import  Slider3 from '../images/Slider3.jpg';
import umair from '../images/umair.jpg';
import free2 from '../images/free2.jpg';
import free3 from '../images/free3.png';
import free4 from '../images/free4.png';
class Slider extends Component {

    componentDidMount() {
             M.Slider.init(this.refs.slider);
    }

    state = {  }
    render() { 
        return ( 
            <div className="App">
                <div ref="slider" className="slider">
                    <ul className="slides">
                        <li>
                            <img src={umair} />
                            <div class="caption center-align">
                                <h2 className="blue-text">Hire freelancers.<br/>Make things<br/> happen.</h2>
                                <h4 className="blue-text ">Grow your business through the top freelancing website.<br/> Hire talent nearby or worldwide.</h4>
                            </div>
                        </li>
                        <li>
                            <img src={free2} />
                            <div class="caption center-align">
                                <h2>Hire freelancers.<br/>Make things<br/> happen.</h2>
                                <h4 className="light grey-text text-lighten-3">Grow your business through the top freelancing website.<br/> Hire talent nearby or worldwide.</h4>
                            </div>
                        </li>
                        <li>
                            <img src={free3} />
                            <div class="caption center-align">
                                <h3>Grow your business<br/> through the top freelancing website.</h3>
                                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </li>
                        <li>
                            <img src={free4} />
                            {/* <div class="caption center-align">
                                <h3>This is our big Tagline!</h3>
                                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div> */}
                        </li>
                    </ul>
                </div>  
            </div>
         );
    }
}
 
export default Slider;