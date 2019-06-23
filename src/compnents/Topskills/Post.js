import React, { Component } from "react";
import mobile from "../images/mobile.png";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {deletePost} from '../../redux/actions/postAction'
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    console.log("data at post",this.props.data);
    
    if (this.props.data) {
      if (this.props.data.length > 0) {
        this.props.data.map((item, index) => {
          this.setState({
            [item.id]: false
          });
        });
      }
    }
  };

  changeStatus = id => {
    let val = this.state[id];
    this.setState({ [id]: !val });
  };

  render() {
    return (
      <div>
        <div className="row blue lighten-4">
          {this.props.data.length > 0 ? (
            this.props.data.map((item, index) => {
              return (
                <div
                  key={index}
                  id="space"
                  className="card col s12 m3  light-blue lighten-3 "
                >
                  <div className="card-image waves-effect waves-block waves-light  ">
                    <img src={mobile} alt="pic here" />
                  </div>
                  <div className="card-content ">
                    <span className="card-title activator ">
                      {item.gigtitle}{" "}
                      <i className="material-icons right">more_vert</i>
                    </span>
                    <p>
                      {/* <li> */}
                      {this.state[item.id] ? (
                        <button
                          onClick={() => this.changeStatus(item.id)}
                          className="waves-effect btn light-blue darken-3"
                        >
                          see less
                        </button>
                      ) : (
                        <button
                          onClick={() => this.changeStatus(item.id)}
                          className="waves-effect btn light-blue darken-3"
                        >
                          See More
                        </button>
                      )}
                      {/* </li> */}
                      {/* <a href="content.js" className="waves-effect btn light-blue darken-3">See More</a></p> */}
                    </p>{" "}
                  </div>
                  <div className="card-reveal  light-blue lighten-3">
                    <span className="card-title grey-text text-darken-4 ">
                      {item.gigtitle}{" "}
                      <i className="material-icons right">close</i>
                    </span>
                    <p>
                      show about me <br /> {item.aboutuser}
                    </p>
                    <p>
                      {" "}
                      Average repsones time:{" "}
                      <i class="material-icons prefix">timer</i>{" "}
                      {item.responsetime}
                    </p>
                    <p>
                      price of per hour :
                      <i class="material-icons prefix">monetization_on</i>{" "}
                      {item.price}$
                    </p>
                  </div>
                  <div>
                    {this.state[item.id] ? (
                      <ul class="collection with-header">
                        <li class="collection-header">
                          <h4> Gig Details</h4>
                        </li>
                        <li class="collection-item">About: {item.aboutgig}</li>
                        <li class="collection-item">Price: {item.price}$</li>
                        <li class="collection-item">
                          Time:{item.responsetime}
                        </li>
                        <li class="collection-item">
                          Freelancer: {item.uname}
                        </li>
                        <li class="collection-item">Email: {item.useremail}</li>
                        <li class="collection-item">City: {item.usercity}</li>
                        <li class="collection-item">
                          Adress: {item.useraddress}
                        </li>
                        <li class="collection-item">Phone#: {item.phone}</li>
                         {this.props.id && 
                        <li class="collection-item">
                          <button onClick={()=>this.props.deletePost(item.id)}> DeleteNow </button>
                        </li>
                        }
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Gig, Available yet!</p>
          )}
        </div>
      </div>
    );
  }
}

export default connect(null,{deletePost})(Post);
