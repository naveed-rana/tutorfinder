import React,{Component} from 'react';

import {link} from 'react-router-dom';

class forget_password extends Component{
    render (){
        return(
            <div>
<div class="row mar">
    <div class="col s12 m8  ">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title center">Forgrt Password</span>
    <form class="col s12">

    <div class="input-field col s12 m6 white-text">
          <i class="material-icons prefix">fingerprint</i>
          <input placeholder="Password" id="first_name" type="text" class="validate" />
           <label for="first_name">User Name</label>
           
</div>
</form>
</div>
</div>
</div>
</div>
</div>
        );
    }
}
 export default forget_password;