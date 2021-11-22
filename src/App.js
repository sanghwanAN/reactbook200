import React from 'react';
import './App.css';
import ReactHoc from './Hoc/R075_ReactHoc'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="app">
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactHoc name="reassssct200"/>
    </div>
  );
}

export default App;