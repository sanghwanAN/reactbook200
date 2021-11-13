import React, { Component } from 'react';

class R022_PropsDefault extends Component {
  render() {
    let {
      ReactString,
      ReactNumber
    } = this.props

    return (
      <div style={{padding : "0px"}}>
        {ReactString}{ReactNumber}
      </div>
    );
  }
}
R022_PropsDefault.defaultProps = {
  ReactString: "리엑트",
  ReactNumber: 400
}
export default R022_PropsDefault;