import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Nav.js'
import Home from './components/Home.js'
import Films from './components/Films.js'
import People from './components/People.js'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/people' component={People}/>
        <Route path='/films' component={Films}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
