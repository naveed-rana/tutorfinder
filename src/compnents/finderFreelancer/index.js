import React, { Component } from "react";
import Post from "../Topskills/Post";
import { connect } from "react-redux";

class Android_Developer extends Component {
  render() {
  
    // console.log("gigfilter", gigfilter);

    return (
      <div>
        <Post data={this.props.allPosts} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("userid" ,state.userReducer.user.uid,);
  
  
  return {
    userid : state.userReducer.user.uid,
    allPosts: state.postReducer.allPosts
    //   loader: state.postReducer.loader
  };
}

export default connect(mapStateToProps)(Android_Developer);
