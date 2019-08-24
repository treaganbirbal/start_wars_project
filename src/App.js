import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Nav.js'
import Home from './components/Home.js'
import Films from './components/Films.js'
import People from './components/People.js'
import SinglePerson from './components/singlePerson.js'
import Planets from './components/Planets.js'
import SinglePlanet from './components/SinglePlanet.js'

function App() {

  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route path='/planets' component={Planets}/>
        <Route exact path="/planets/:id" component={SinglePlanet}/>
        <Route exact path='/people' component={People}/>
        <Route  path='/people/:id' component={SinglePerson}/>
        <Route path='/films' component={Films}/>
        <Route exact path='/' component={Home}/>

      </Switch>
    </div>
  );
}

export default App;
