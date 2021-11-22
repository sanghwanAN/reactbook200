import React, { Component } from 'react';
import {Consumer} from "./R076_ContextApi";

class contextChildren2 extends Component {
  render () {
   return (
     <Consumer>
       {contextValue => <h3>{`contextValue : ${contextValue}`}</h3> }
     </Consumer>
   )
  }
}
export default contextChildren2