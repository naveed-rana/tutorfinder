import React, { Component } from 'react';
import mobile from '../images/mobile.png';
import { Link } from "react-router-dom";

class Post extends Component{
render(){
    return(
        <div>
        <div className="row blue lighten-4">
        <div id="space"  className="card col s12 m3  light-blue lighten-3 ">
            <div className="card-image waves-effect waves-block waves-light  ">
            <img src={mobile}  alt="pic here"/>
            </div>
            <div className="card-content ">
              <span className="card-title activator "> Title <i className="material-icons right">more_vert</i></span>
              <p>
                  <li><Link to="/See_more_about_gig" className="waves-effect btn light-blue darken-3">See More</Link></li>
                  {/* <a href="content.js" className="waves-effect btn light-blue darken-3">See More</a></p> */}
            
</p>            </div>
            <div className="card-reveal  light-blue lighten-3">
              <span className="card-title grey-text text-darken-4 ">Title <i className="material-icons right">close</i></span>
              <p>show about me <br/>
              i am Muhammad uamir naeem and i am developer.</p>
             <p>    Average repsones time: <i class="material-icons prefix">timer</i>20 mint</p>
              <p>price of per hour :<i class="material-icons prefix">monetization_on</i>100$</p>
            </div>
          </div>
          </div>
          </div>


);

}
}

export default Post;