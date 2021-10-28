import React, { Component } from 'react';

class R006_LifecycleEx extends Component {
 static getDerivedStateFromProps(props, state) {
  console.log('2.getDerivedStateFromProps Call :' + props.prop_value ) 
 }

 constructor(props) {
   super(props);
   this.state = {};
   console.log('1. constructor Call : '  + props.prop_value );
 }

  render() {
    console.log('3. render Call');
    return (
     <h2>[this is constructor function]</h2>
    )
  }
}

export default R006_LifecycleEx;