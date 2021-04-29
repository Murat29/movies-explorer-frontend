import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
function App() {
  return (
    <div className="App">
      <Route path="/" component={Header}></Route>
    </div>
  );
}

export default App;
