import React from "react";
import { connect } from "react-redux";
import { startGetCurrentUser } from "./redux/actions/userActions";
import App from './App'
<<<<<<< HEAD
import CircularProgress from "@material-ui/core/CircularProgress";
=======
// import CircularProgress from "@material-ui/core/CircularProgress";
>>>>>>> 776825aa933e27b5261944887961b2b7809093a4


class CheckingUser extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loader: true
    };
  }
  componentWillMount() {
    this.props.startGetCurrentUser();
  }

  componentWillReceiveProps(nextProps) {
    console.log('=========nextProps===========================')
    console.log(nextProps.userStatus)
    console.log('====================================')
    this.setState({ loader: false });
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        {this.state.loader ? (
<<<<<<< HEAD
          <div className="loader">
=======
          <div className="loader" style={{height:'80vh'}}>
>>>>>>> 776825aa933e27b5261944887961b2b7809093a4
            <svg className="circular" viewBox="25 25 50 50">
              <circle
                className="path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke-width="2"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
        ) : (
         <App />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userStatus: state.userReducer.userStatus,
    getuserErr: state.userReducer.getuserErr,

  };
};
    export default connect(
  mapStateToProps,
  { startGetCurrentUser }
)(CheckingUser);

