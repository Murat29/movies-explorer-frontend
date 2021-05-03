import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
function Footer(props) {
  return (
    <footer
      className={`footer ${props.location.pathname === '/' && 'footer__grey'}`}
    >
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <p className="footer__copyright">&copy; 2021</p>
      <div className="footer__links">
        <a href="#" className="footer__link">
          Яндекс.Практикум
        </a>
        <a href="#" className="footer__link">
          Githab
        </a>
        <a href="#" className="footer__link">
          Facebook
        </a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  location: PropTypes.object,
};

export default Footer;
