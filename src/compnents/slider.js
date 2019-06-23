import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import umair from '../images/umair.jpg';
import free2 from '../images/free2.jpg';


class Slider extends Component {

    componentDidMount = (  ) => {

            var instances = M.Slider.init(this.refs.slider);
    
    }

    render() {
      return (
        <div ref="slider" className="slider">
           <ul className="slides">
           <li>
         <img  src={free2} alt="pic here" /> 
         <div className="caption center-align">
           <h3>Hire freelancers. Make things happen.</h3>
           <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
         </div>
         </li>
         <li>
         <img src={umair} alt="pic here" /> 
        <div className="caption left-align">
          <h3>Left Aligned Caption</h3>
          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
         </div>
      </li>
         </ul>
           </div>
        
      );
    }
  }
  
  export default Slider;


// class slider extends compnent{
//     render(){
//         return(
//             <div className="slider">

//          <div className="slider">
//           <ul className="slides">
//           <li>
//         <img src={um} /> 
//         <div className="caption center-align">
//           <h3>This is our big Tagline!</h3>
//           <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
//         </div>
//       </li>
//       <li>
//         <img src="https://lorempixel.com/580/250/nature/2"> <!-- random image -->
//         <div className="caption left-align">
//           <h3>Left Aligned Caption</h3>
//           <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
//         </div>
//       </li>
//       <li>
//         <img src="https://lorempixel.com/580/250/nature/3"> <!-- random image -->
//         <div className="caption right-align">
//           <h3>Right Aligned Caption</h3>
//           <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
//         </div>
//       </li>
//       <li>
//         <img src="https://lorempixel.com/580/250/nature/4"> <!-- random image -->
//         <div className="caption center-align">
//           <h3>This is our big Tagline!</h3>
//           <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
//         </div>
//       </li>
//     </ul>
//   </div>
//             </div>
//         )
//     }
// }
