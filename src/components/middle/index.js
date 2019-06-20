import React, { Component } from 'react';
import Whatistutors from '../whatIsTutors/index';
import Howitworks from '../howItWorks/index';
import Linktoportals from '../linktoportals/index';

class Middle extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" style={{margin: "0px"}}>
                <Whatistutors />
                <Howitworks />
                <Linktoportals />
            </div>
        );
    }
}
 
export default Middle;