import React, { Component } from 'react';
import Childern from "./contextChildren"
const {Provider , Consumer} = React.createContext()
export {Consumer}

class R077_ContextApi extends Component {
  constructor (props) {
    super(props);
    this.setStateFunc = this.setStateFunc.bind(this)
  }  
  setStateFunc(value) {
    this.setState({name : value});
  }
  
  render() {
    const content = {
      ...this.state,
      setStateFunc: this.setStateFunc
    }
    return (
      <Provider value={content}>
        <Childern/>
      </Provider>
    );
  }
}

export default R077_ContextApi;