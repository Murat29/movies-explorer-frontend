import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';
function Title(props) {
  return <h2 className="title">{props.children}</h2>;
}

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
