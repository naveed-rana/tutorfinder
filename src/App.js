import React,{Component} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
// import  M from 'materialize-css/dist/js/materialize.min.js';
import Header from './components/Header/header';
import Middle from './components/middle/index';
import Login from './components/Registration/login';
import Portal from './components/Portals/index';
import TutorPortal from './components/tutorPortal/Tutors';
import ForgotPassword from './components/Registration/forgotPassword';
import Navbar from './components/Header';
import Footer from './components/Footer/index';
import Aftersignup from './components/completeYourProfile/afterSignup/index';
import Completetutorprofile from './components/completeYourProfile/completeTutorProfile/index';
import Completeinstituteprofile from './components/completeYourProfile/completeInstituteProfile/index';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import {getPost} from './redux/actions/postAction';

const RestrictedRoute = ({ component: Component, userStatus, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userStatus ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
class App extends Component {
  componentDidMount() {
    this.props.getPost();
  }
  
  render() {
    const { userStatus } = this.props;
    console.log("=======================userStatus=============");
    console.log(userStatus);
    console.log("====================================");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <div className="App">
            <Route exact path="/" component={Header} />
            <Route exact path="/" component={Middle} />
            <Route exact path="/" component={Footer} />
            <Route path="/signin" component={Login} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/portal" component={Portal} />
            <RestrictedRoute
              exact
              path="/tutorportal"
              component={TutorPortal}
              userStatus={userStatus}
            />

            <Route path="/whoyouare" component={Aftersignup} />
            <Route path="/completetutorprofile" component={Completetutorprofile} />
            <Route path="/completeinstituteprofile" component={Completeinstituteprofile} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
}
const mapStateToProps = state => {
  return {
    userStatus: state.userReducer.userStatus
  };
};
export default connect(mapStateToProps,{getPost})(App);
