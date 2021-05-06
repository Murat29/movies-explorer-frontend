import React from 'react';
import Section from '../Section/Section';
import './PageNotFound.css';
function PageNotFound() {
  return (
    <Section className="page-not-found" tablet="s" phone="s">
      <div className="page-not-found__container">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__subtitle">Страница не найдена</p>
        <button className="page-not-found__button-back">Назад</button>
      </div>
    </Section>
  );
}

export default PageNotFound;
