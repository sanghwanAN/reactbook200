import React, { Component } from 'react';
import { Route } from "react-router-dom";
// import ReactDebounce from './R094_reactDebounce';
import reactThrottle from './R095_reactThrottle';


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
          <Route exact path='/reactThrottle' component={reactThrottle} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;