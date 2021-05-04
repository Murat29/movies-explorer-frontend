import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
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

export default Footer;
