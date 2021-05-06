import React from 'react';
import { useHistory } from 'react-router-dom';
import Section from '../Section/Section';
import ApplicationLink from '../ApplicationLink/ApplicationLink';
import './PageNotFound.css';
function PageNotFound() {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <Section className="page-not-found" tablet="s" phone="s">
      <div className="page-not-found__container">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__subtitle">Страница не найдена</p>
        <ApplicationLink
          onClick={goBack}
          className="page-not-found__button-back"
        >
          Назад
        </ApplicationLink>
      </div>
    </Section>
  );
}

export default PageNotFound;
