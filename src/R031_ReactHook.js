import React, {useState, useEffect} from 'react';

function R031_ReactHook(props) {
  const [contents, setContents] = useState('[This is React]');
  useEffect( () => {
    console.log('useEffect');
  });
  return (
    <div style={{padding: "0px"}}>
      <h2>{contents}</h2>
      <button onClick={() =>setContents('[THIS IS HOOK]')}>버튼</button>
    </div>
  );
}

export default R031_ReactHook;