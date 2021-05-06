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
        <a
          className="footer__link"
          href="https://praktikum.yandex.ru/"
          target="_blank"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a
          className="footer__link"
          href="https://github.com/Murat29"
          target="_blank"
          rel="noreferrer"
        >
          Githab
        </a>
        <a
          className="footer__link"
          href="https://t.me/SPB_Akmurat_Khodzhatovtov"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
