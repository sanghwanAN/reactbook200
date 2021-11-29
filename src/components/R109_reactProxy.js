import React, { Component } from 'react';

class R109_reactProxy extends Component {
  componentDidMount = async () => {
    const response = await fetch('/users');
    const body = await response.text();
    console.log("body : "+body)
  }
  
  render() {
    return (
      <><h1>Proxy Call Node Api</h1></>
    )
  }
}

export default R109_reactProxy;