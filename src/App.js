import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import Navbar from './components/Nav.js'
import Home from './components/Home.js'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
