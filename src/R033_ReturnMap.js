import React, { Component } from 'react';

class R033_ReturnMap extends Component {
  render() {
    const element_Array = [
      <li>react</li>,
      <li>200</li>,
      <li>Array map</li>
    ]
    return (
      <div>
        {element_Array.map((array_val) => array_val)}
      </div>
    );
  }
}


export default R033_ReturnMap;