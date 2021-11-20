import React from 'react';
import './App.css';
import AxiosGet from './R060_FetchPost'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="app">
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <AxiosGet/>
    </div>
  );
}

export default App;