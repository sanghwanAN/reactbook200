import React, { Component } from 'react';
import { Route } from "react-router-dom";
import reactRouter from './R089_reactRouter'
import reactRouter2 from './R089_reactRouter2'

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 

    
        <Route exact path='/' component={reactRouter} />
        <Route exact path='/reactRouter2' component={reactRouter2} />
        <Footer/>
      </div>
    );
  }
}

export default App;