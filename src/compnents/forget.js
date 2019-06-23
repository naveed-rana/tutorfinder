import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './signup.css'
import {Link } from 'react-router-dom'

class Forget extends Component{
    render(){
        return(
<div class="row mar">
    <div class="col s12 m8  ">
      <div class="card blue accent-3">
        <div class="card-content white-text">
          <span class="card-title center">Forgrt Password</span>
    <form class="col s12">

    <div class="input-field col s12 m6 white-text">
          <i class="material-icons prefix">account_circle</i>
          <input placeholder="User Name" id="first_name" type="text" class="validate" />
           {/* <label for="first_name">User Name</label> */}
           
</div>

<div class="input-field col s12 m6 white-text">
          <i class="material-icons prefix">fingerprint</i>
          <input placeholder="Old Password" id="first_name" type="text" class="validate" />
           {/* <label for="first_name">User Name</label> */}
           
</div>

<div class="input-field col s12 m6 white-text">
          <i class="material-icons prefix">fingerprint</i>
          <input placeholder="New Password" id="first_name" type="text" class="validate" />
           {/* <label for="first_name">User Name</label> */}
           
</div>

<div class="input-field col s12 m6 white-text">
          <i class="material-icons prefix">fingerprint</i>
          <input placeholder="Conform New Password" id="first_name" type="text" class="validate" />
           {/* <label for="first_name">User Name</label> */}
           
</div>

       <div class="input-field col s12 m6 ">
       <i class="material-icons prefix">email</i>
       <input placeholder="Email Address" id="first_name" type="text" class="validate" />
     {/* <label for="first_name">Email</label> */}
        </div>
            
    </form>
  
        
        {/* <div className="algin center"> */}
        <ul>
  <li className="waves-effect white-text blue waves-light btn-small center-align bt"><Link className="white-text" to="./" >Forget Password</Link></li>
  <li  className="waves-effect blue waves-light btn-small center-align bt"><Link className="white-text" to="./signup">SIGN UP</Link></li>
  </ul>
  </div>
          
        </div>
  </div>
  </div>
 
  );
    }
}

export default Forget;