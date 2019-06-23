import React from "react";
import { connect } from "react-redux";
import { startGetCurrentUser } from "./redux/actions/userActions";
import App from './App'
import CircularProgress from "@material-ui/core/CircularProgress";


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
          <div className="loader">
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

