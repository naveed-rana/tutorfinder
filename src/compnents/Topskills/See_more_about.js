import React, { Component } from 'react';


class See_more_about_gig extends Component{
render(){
    return(
      <div  className="row">
      <div className="col m9 s8" >
         <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">account</i>Name</div>
      <div class="collapsible-body"><span>Muhammad Umair naeem</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>city</div>
      <div class="collapsible-body"><span>kamalia.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">info</i>About me</div>
      <div class="collapsible-body"><span>My name is Muhammad umair naeem.i am student of Uaf </span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">info</i>About Gig</div>
      <div class="collapsible-body"><span>I am developer.i design logo. </span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">monetization_on</i>Price of per hour</div>
      <div class="collapsible-body"><span>100$</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">Timer</i>Average Respone time</div>
      <div class="collapsible-body"><span>20 hours</span></div>
    </li>
  </ul>
          
      </div>
      </div>
    );

}
}

export default See_more_about_gig;