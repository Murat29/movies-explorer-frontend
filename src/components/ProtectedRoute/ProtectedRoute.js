import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={`.${props.urlRedirects}`} />
        )
      }
    </Route>
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  loggedIn: PropTypes.bool,
  urlRedirects: PropTypes.string,
};

export default ProtectedRoute;
