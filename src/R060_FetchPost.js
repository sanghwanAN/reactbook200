import React, { Component } from 'react';

class R060_FetchPost extends Component {
  componentDidMount = async () => {
    const reponse = await fetch('http://date.jsontest.com/', {
      method: 'POST',
      header: {
        'Content-Type' : 'application/json',
      },
      boyd: {a : 'react', b: 200},
    });
    const body = await reponse.json();
    alert(body.date)
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default R060_FetchPost;