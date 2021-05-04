import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
function App() {
  return (
    <>
      <Route path="/" component={Header}></Route>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/movies" component={Movies}></Route>
      <Route exact path="/saved-movies" component={SavedMovies}></Route>
      <Route path="/" component={Footer}></Route>
    </>
  );
}

export default App;
