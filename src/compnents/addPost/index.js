import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/postAction";
import { withRouter } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";


import "./style.css";
import { CircularProgress } from "@material-ui/core";
// import SideBar from "../SideBar";

// import { addToDo } from "../Redux/actions/AddToDoActions";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      done: false,
      loading: false
    };
  }

  onChangeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  //////////
  // 1: "saveTodo" is a arrow function to save the record of todo item into record Object
  // 2: Then "record" Object pass to the add todo action to save the data into store of redux throuhg reducer
  //////////
  saveTodo = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const record = {
      title: this.state.title,
      desc: this.state.desc,
      createdAt: new Date().toString()
    };
    console.log("==============record======================");
    console.log(record);
    console.log("====================================");
    this.props.addPost(record);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if (nextProps.addPostStatus === "done") {
      this.props.history.push("/");
    }
  }

  render() {
    /* Desktop Design Starts */
    const { loading } = this.state;
    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Grid item xs={12} sm={12} md={12}>
            <div className="addHead-bg">
              <Typography variant="display3" gutterBottom className="title">
                Add New Post
              </Typography>
            </div>
          </Grid>
          <form
            onSubmit={this.saveTodo}
            ref={el => (this.addToDoForm = el)}
            noValidate
            autoComplete="off"
          >
            <div className="headDiv-fields">
              <strong>Title:</strong>
              <Grid item xs={11} sm={10}>
                <input
                  type="text"
                  name="title"
                  onChange={this.onChangeHandler}
                  className="myInput-field"
                />
              </Grid>
              <br />
              <strong>Description:</strong>
              <Grid item xs={11} sm={10}>
                <textarea
                  name="desc"
                  onChange={this.onChangeHandler}
                  className="myTextarea-field"
                  rows={8}
                />{" "}
              </Grid>

              <Grid item sm={12}>
                <button disabled={loading} type="submit" className="addBtn">
                  {" "}
                  Add Your Thing
                </button>
                {loading ? <CircularProgress /> : <p />}
              </Grid>
            </div>
          </form>
        </Grid>
      </Grid>
    );
  }
}

AddPost.propTypes = {
  classes: PropTypes.object.isRequired
};

//////////
// Export this component with the style.js file
//////////

const mapStateToProps = state => {
  return {
    addPostStatus: state.postReducer.addPostStatus,
    loader: state.postReducer.loader
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { addPost }
  )(AddPost)
);
