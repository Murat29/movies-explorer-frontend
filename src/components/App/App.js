import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
function App() {
  const urlHeader = ['/', '/movies', '/saved-movies', '/profile', '/signup'];
  const urlFooter = ['/', '/movies', '/saved-movies'];

  return (
    <>
      <Route exact path={urlHeader} component={Header} />
      <Route exact path="/" component={Main} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/saved-movies" component={SavedMovies} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/signin" component={Login} />
      <Route exact path={urlFooter} component={Footer} />
    </>
  );
}

export default App;
