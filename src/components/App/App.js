import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
function App() {
  const urlHeader = [
    '/',
    '/movies',
    '/saved-movies',
    '/profile',
    '/signup',
    '/signin',
  ];
  const urlFooter = ['/', '/movies', '/saved-movies'];

  return (
    <>
      <Route exact path={urlHeader} component={Header} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/movies" component={Movies} />
        <Route path="/saved-movies" component={SavedMovies} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Register} />
        <Route path="/signin" component={Login} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Route exact path={urlFooter} component={Footer} />
    </>
  );
}

export default App;
