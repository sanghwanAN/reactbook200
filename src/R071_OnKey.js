import React, { Component } from 'react';

class R071_OnKey extends Component {
    OnKey(event, e) {
        var val = e.target.value;
        console.log('event: ' + event + ", value: " + val);
    }
    render() {
        return (
            <>
               onkeyDown : <input type="text" onKeyDown={e => this.OnKey("OnKeyDown",e)}/> <br/> 
               onkeyPress : <input type="text" onKeyPress={e => this.OnKey("onKeyPress",e)}/> <br/> 
               onkeyUp : <input type="text" onKeyUp={e => this.OnKey("onKeyUp",e)}/> 
            </>
        );
    }
}

export default R071_OnKey;