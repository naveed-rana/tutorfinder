import React, { Component } from "react";
import Navbar from "./compnents/Navbar";
import Footer from "./compnents/Footer";
import Signup from "./compnents/Signup";
import Home from "./compnents/Home";
import Login from "./compnents/Login";
import Forget from "./compnents/forget";
import How_its_works from "./compnents/how_its_works";
import PostGig from "./compnents/Postgig";
import { connect } from "react-redux";
import addPost from "./compnents/addPost";
import ShowPost from './compnents/ShowPost';
import findFreelancer from './compnents/finderFreelancer';
import See_more_about_gig from './compnents/Topskills/See_more_about';
import Android_Developer from './compnents/Topskills/Android_Developer';
import Apple_UIKit from './compnents/Topskills/Apple_UIKit';
import Articulate_storyline from './compnents/Topskills/Articulate_storyline';
import Apple_Xcode from './compnents/Topskills/Apple_Xcode';
import Atlassian_Confluence from './compnents/Topskills/Atlassian_Confluence';
import Blockchain from './compnents/Topskills/Blockchain';
import Bookkeeper from './compnents/Topskills/Bookkeeper';
import Copywriter from './compnents/Topskills/Copywriter';
import Customer_retention from './compnents/Topskills/Customer_retention';
import Content_Writer from './compnents/Topskills/Content_Writer';
import Customer_Service_Representative from './compnents/Topskills/Customer_Service_Representative';
import Data_Scientist from './compnents/Topskills/Data_Scientist';
import Database_Administrator from './compnents/Topskills/Database_Administrator';
import eLearning from './compnents/Topskills/eLearning';
import Enterprise_architecture from './compnents/Topskills/Enterprise_architecture';
import Facebook_Developer from './compnents/Topskills/Facebook_Developer';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { getPost } from "./redux/actions/postAction";

const RestrictedRoute = ({ component: Component, userStatus, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userStatus ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/Login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

// import './App.css';
class App extends Component {
  componentWillMount = () => {
   this.props.getPost();
  };
  
  render() {
    const { userStatus } = this.props;
    console.log("=======================userStatus=============");
    console.log(userStatus);
    console.log("====================================");
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/forget" component={Forget} />
            <Route path="/Login" component={Login} />
            See_more_about_gig
            <Route path="/See_more_about_gig" component={See_more_about_gig} />
            <Route path="/how_its_works" component={How_its_works} />
            {/* <Route path="/Postgig" component={PostGig} /> */}
            <Route path="/Android_Developer" component={Android_Developer} />
            <Route path="/Apple_UIKit" component={Apple_UIKit} />
            <Route path="/Apple_Xcode" component={Apple_Xcode} />
            <Route path="/Articulate_storyline" component={Articulate_storyline} />
            <Route path="/Atlassian_Confluence" component={Atlassian_Confluence} />
            <Route path="/Blockchain" component={Blockchain} />
            <Route path="/Bookkeeper" component={Bookkeeper} />
            <Route path="/Customer_retention" component={Customer_retention} />
            <Route path="/Customer_Service_Representative" component={Customer_Service_Representative} />
            <Route path="/Data_Scientist" component={Data_Scientist} />
            <Route path="/Database_Administrator" component={Database_Administrator} />
            <Route path="/eLearning" component={eLearning} />
            <Route path="/Enterprise_architecture" component={Enterprise_architecture} />
            <Route path="/Facebook_Developer" component={Facebook_Developer} />
            <Route path="/Copywriter" component={Copywriter} />
            <Route path="/Content_Writer" component={Content_Writer} />
            <Route path="/findFreelancer" component={findFreelancer} />

            <Route
              exact
              path="/"
              component={Home}
              // userStatus={userStatus}
            />
            <RestrictedRoute
              exact
              path="/PostGig"
              component={PostGig}
              userStatus={userStatus}
            />
            <Route
              exact
              path="/showpost"
              component={ShowPost}
              // userStatus={userStatus}
            />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    userStatus: state.userReducer.userStatus
  };
};
export default connect(mapStateToProps,    { getPost }
  )(App);
