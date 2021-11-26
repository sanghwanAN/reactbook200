import React, { Component } from 'react';
import { Route } from "react-router-dom";

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
        <Footer></Footer>
      </div>
    );
  }
}

export default App;