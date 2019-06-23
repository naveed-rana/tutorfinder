import React , {Component} from 'React';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


class Nav extends Component{
render(){
    return(
        <div className="Nav">
            <nav>
<div className="nav-content blue">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a href="#">Web Dev</a></li>
        <li className="tab"><a className="active" href="#test2">Mobile Dev</a></li>
        <li className="tab disabled"><a href="#test3">Design</a></li>
        <li className="tab"><a href="#test4">Admin Support</a></li>
        <li className="tab"><a href="#test4">Customer Service</a></li>
        <li className="tab"><a href="#test4">Marketing</a></li>
        <li className="tab"><a href="#test4">Accounting</a></li>
        <li className="tab"><a href="#test4">See All Categories</a></li>
      </ul>
    </div>
        
        </nav>
        </div>
    );

}
}

export default Nav;