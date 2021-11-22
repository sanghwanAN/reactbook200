import React, { Component } from 'react';
import withHocComponent from "./withHocComponent";
class R075_ReactHoc extends Component {
  render() {
    console.log('2.HocComponent')
    return (
      <div>
        <h2>props.name : {this.props.name}</h2>
      </div>
    );
  }
}

export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc');