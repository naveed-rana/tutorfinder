import React, { Component } from "react";
import Post from "../Topskills/Post";
import { connect } from "react-redux";

class Android_Developer extends Component {
  render() {
    var gigfilter = [];
    if(this.props.allPosts.length > 0 ) {
    gigfilter = this.props.allPosts.filter(item => item.uid === this.props.userid);
    }
    console.log("gigfilter", gigfilter);

    // console.log("gigfilter", gigfilter);

    return (
      <div>
        <Post data={gigfilter} id={this.props.userid} />
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
