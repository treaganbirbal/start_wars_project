import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Nav.js'
import Home from './components/Home.js'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>

      </Switch>
    </div>
  );
}

export default App;
