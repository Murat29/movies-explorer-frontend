import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './ApplicationLink.css';
function ApplicationLink(props) {
  return (
    <Link
      className={`application-link ${props.className || ''}`}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
}

ApplicationLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ApplicationLink;
