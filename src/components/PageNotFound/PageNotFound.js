import React from 'react';
import './PageNotFound.css';
function PageNotFound() {
  return (
    <section className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <button className="page-not-found__button-back">Назад</button>
    </section>
  );
}

export default PageNotFound;
