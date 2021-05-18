import React from 'react';
import ApplicationLink from '../ApplicationLink/ApplicationLink';
import PropTypes from 'prop-types';

import './Form.css';
function Form({ params }) {
  return (
    <form onSubmit={params.onSubmit} className="form">
      <h2 className="form__title">{params.title}</h2>
      <fieldset className="form__inputs">
        {params.inputs.map((inputData, i) => (
          <div key={i} className="form__input-container">
            <p className="form__input-placeholder">{inputData.placeholder}</p>
            <input
              value={inputData.value}
              onChange={inputData.onChange}
              className="form__input"
              type={inputData.type}
            />
            <p className="form__input-error">Текст ошибки</p>
          </div>
        ))}
      </fieldset>
      <p className="form__registration-error">
        {params.isRegistrationError && 'Что то пошло не так'}
      </p>
      <button className="form__submit">{params.submitButtonText}</button>
      <div className="form__container-toggle">
        <p className="form__question-toggle">{params.questionText}</p>
        <ApplicationLink
          className="form__link-toggle"
          to={params.toggleButtonUrl}
        >
          {params.toggleButtonText}
        </ApplicationLink>
      </div>
    </form>
  );
}

Form.propTypes = {
  params: PropTypes.object,
};

export default Form;
