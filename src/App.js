import React from 'react';
import './App.css';
import AxiosPost from './R062_AxiosPost'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="app">
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <AxiosPost/>
    </div>
  );
}

export default App;