import React, { Component } from "react";
import Post from "./Post.js";
import { connect } from "react-redux";

class Android_Developer extends Component {
  render() {
    console.log("allpost at a",this.props.allPosts);
    
    var gigfilter = [];
    if(this.props.allPosts.length > 0 ) {
      gigfilter = this.props.allPosts.filter(item => item.skill == "1");
      }

    return (
      <div>
        <Post data={gigfilter} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    //   getAllPostStatus: state.postReducer.getAllPostStatus,
    allPosts: state.postReducer.allPosts
    //   loader: state.postReducer.loader
  };
}

export default connect(mapStateToProps)(Android_Developer);
