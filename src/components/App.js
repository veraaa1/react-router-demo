import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './Static/global.css'
import './app.css'
import './Header/Header.js'
import Header from './Header/Header.js';
import './Main/Main'
import Main from './Main/Main';
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />
          <Main />
        </>
      </Router>
    );
  }
}

export default App;