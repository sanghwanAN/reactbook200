import React, { Component } from 'react';
import axios from "axios";

class R061_AxiosGet extends Component {
  componentDidMount() {
    axios.get('http://date.jsontest.com/')
    .then(respone => {alert(respone.data.date)})
  }
  render() {
    return (
      <div>
        <h1>axios get</h1>
      </div>
    );
  }
}

export default R061_AxiosGet;