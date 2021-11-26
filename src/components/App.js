import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ReactDebounce from './R094_reactDebounce';
// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

import LoginForm from './LoginForm';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin />
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/Debounce' component={ReactDebounce} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;