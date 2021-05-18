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
  const [loggedIn, setLoggedIn] = React.useState(false);
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
          history.push('/movies');
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  function registration(name, email, password) {
    return mainApi
      .register(name, email, password)
      .then(() => {
        return mainApi.authorize(email, password);
      })
      .then((res) => {
        localStorage.setItem('token', res.token);
        return mainApi.checkToken(res.token);
      })
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        history.push('/movies');
      });
  }

  return (
    <>
      <Route exact path={urlHeader} component={Header} />
      <Switch>
        <Route exact path="/" component={Main} />
        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} />
        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
        />
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
        />
        <Route path="/signup">
          <Register registration={registration} />
        </Route>
        <Route path="/signin" component={Login} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Route exact path={urlFooter} component={Footer} />
    </>
  );
}

export default App;
