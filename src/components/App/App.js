import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/mainApi';
import moviesApi from '../../utils/moviesApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
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
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(
    Boolean(localStorage.getItem('token'))
  );
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi
        .checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
          return updateSavedMovies();
        })
        .catch((err) => {
          setLoggedIn(false);
          console.log(err);
        });
    }
    moviesApi
      .getMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleRegistration(name, email, password) {
    return mainApi
      .register(name, email, password)
      .then(() => {
        return mainApi.authorize(email, password);
      })
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
        return mainApi.checkToken(res.token);
      })
      .then((userData) => {
        setLoggedIn(true);
        setCurrentUser(userData);
        return updateSavedMovies();
      })
      .then(() => {
        history.push('/movies');
      });
  }

  function handleLogin(email, password) {
    return mainApi
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
        return mainApi.checkToken(res.token);
      })
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        history.push('/movies');
      });
  }

  function updateSavedMovies() {
    return mainApi
      .getMovies(localStorage.getItem('token'))
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Route exact path={urlHeader}>
        <Header loggedIn={loggedIn} />
      </Route>
      <Switch>
        <Route exact path="/" component={Main} />
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          urlRedirects="/signin"
          indexesOfSavedMovies={savedMovies.map((data) => data.id)}
          movies={movies}
        />
        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          urlRedirects="/signin"
          savedMovies={savedMovies}
          updateSavedMovies={updateSavedMovies}
          setSavedMovies={setSavedMovies}
        />
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          urlRedirects="/signin"
          setCurrentUser={setCurrentUser}
          setLoggedIn={setLoggedIn}
        />
        <ProtectedRoute
          path="/signup"
          component={Register}
          urlRedirects="/"
          loggedIn={!loggedIn}
          handleRegistration={handleRegistration}
        />
        <ProtectedRoute
          path="/signin"
          component={Login}
          loggedIn={!loggedIn}
          urlRedirects="/"
          handleLogin={handleLogin}
        />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Route exact path={urlFooter} component={Footer} />
    </CurrentUserContext.Provider>
  );
}

export default App;
