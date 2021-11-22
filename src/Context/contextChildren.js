//R076
// import React, { Component } from 'react';
// import Children2 from "./contextChildren2";

// class contextChildren extends Component {
//   render () {
//     return(
//       <Children2 />
//     )
//   }
// }
// export default contextChildren

//R077
import React, { Component } from 'react';
import {Consumer} from "./R077_ContextApi";
class contextChildren extends Component {
  render () {
    return(
      <Consumer>
        { contextValue => 
          <button onClick={e => contextValue.setStateFunc("react200")}>
            {contextValue.name}_button
          </button>
        }
      </Consumer>
    )
  }
}
export default contextChildren