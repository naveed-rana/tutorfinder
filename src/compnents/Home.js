import React, { Component } from "react";

import Slider1 from "./Slider1";
import Content from "./content";

class Home extends Component {
  render() {
    return (
      <div>
        <Slider1 />
        <Content />
      </div>
    );
  }
}

export default Home;
