import React, { Component } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import Registration from '../Registration/index';
import { connect } from 'react-redux';
import {startLogout} from '../../redux/actions/userActions';
import {withRouter} from 'react-router-dom'

// class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() { 
//         return (
//             <div className="row" id="wrapper">
//                 <Registration />
//                 <Explore />
//             </div>
//         );
//     }
// }

class Navbar extends Component {
    state = {  }
    onLogout =() =>{
        this.props.startLogout();
        this.props.history.push('/');
    }
    render() { 
        return (
            <nav className="row z-depth-0" style={{backgroundColor: "#644141", marginBottom: "0px"}}>
                <div className="nav-wrapper col l10 offset-l1 m10 offset-m1 s12" id="navwrapper">
                    <div className="col l5 m4 s8" id="logo">
                        <NavLink to="/"><h4>Home</h4></NavLink>
                    </div>
                    <div className="col l7 m8 s4">
                        <div className="col l4 m3 s4"  style={{padding: "13px 0px 0px 0px"}}>
                            <input className="browser-default right" placeholder="Search Tutor" type="text" id="searchInput"/>
                        </div>
                        <div className="col l8 hide-on-small-only" style={{padding: "0px"}}>
                            <div className="col l4 m2" style={{padding: "0px"}}>
                            {this.props.userStatus ? 
                                <NavLink to="/tutorportal"><p className="center-align" style={{margin: "0px"}}>Tutors portal</p></NavLink>
                           :""
                            }
                                </div>
                            <div className="col l4 m2 s4" style={{padding: "0px"}}>
                                <NavLink to="/portal"><p className="center-align" style={{margin: "0px"}}>Academies Portal</p></NavLink>
                            </div>
                            <div className="col l4 m2 s4" style={{padding: "0px"}}>
                                {this.props.userStatus ? 
                                 <NavLink ><p onClick={this.onLogout} className="center-align" style={{margin: "0px"}}>Logout</p></NavLink>
                                    
                                    : 
                                    <NavLink to="/signin"><p className="center-align" style={{margin: "0px"}}>Sign in</p></NavLink>
                                    }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}


const mapStateToProps = state => {
    return {
        userStatus: state.userReducer.userStatus
    };
  };
  export default connect(mapStateToProps,{startLogout})(withRouter(Navbar));

// class Explore extends Component {
//     state = {  }
//     render() { 
//         return (
//             <div>
//                 <div className="col s2 offset-s5 hide-on-med-and-down" style={{marginTop: "-44px"}}>
//                     <a href="#whatistutor" className="col s4 offset-s4" style={{color: "black", backgroundColor: "#C59E9E", borderRadius: "50%", height: "67px", width: "67px"}}>
//                         <p style={{marginBottom: "0px"}}>Explore</p>
//                         <i className="material-icons" style={{color: "black", padding: "0px 0px 0px 11px"}}>arrow_drop_down</i>
//                     </a>
//                 </div>
//                 <div className="col s2 offset-s4 hide-on-large-only" style={{marginTop: "24px"}}>
//                     <a href="#whatistutor" className="col s4 offset-s6" style={{color: "black", backgroundColor: "#C59E9E", borderRadius: "50%", height: "67px", width: "67px"}}>
//                         <p style={{marginBottom: "0px"}}>Explore</p>
//                         <i className="material-icons" style={{color: "black", padding: "0px 0px 0px 11px"}}>arrow_drop_down</i>
//                     </a>
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default Explore;
 
// export default Navbar;
 
// export{ Header, Navbar};