import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
function App() {
  return (
    <div className="App">
      <Route path="/" component={Header}></Route>
      <Route exact path="/" component={Main}></Route>
      <Route path="/" component={Footer}></Route>
    </div>
  );
}

export default App;
