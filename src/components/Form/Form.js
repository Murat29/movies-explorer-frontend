import React from 'react';
import ApplicationLink from '../ApplicationLink/ApplicationLink';
import PropTypes from 'prop-types';

import './Form.css';
function Form({ params, formDisabled }) {
  return (
    <form onSubmit={params.onSubmit} className="form" noValidate>
      <h2 className="form__title">{params.title}</h2>
      <fieldset className="form__fieldset" disabled={formDisabled}>
        {params.inputs.map((inputData, i) => (
          <div key={i} className="form__input-container">
            <p className="form__input-placeholder">{inputData.placeholder}</p>
            <input
              name={inputData.name}
              value={inputData.value}
              onChange={inputData.onChange}
              className={`form__input ${
                inputData.error && 'form__input_error'
              }`}
              type={inputData.type}
              minLength={inputData.minLength}
              pattern={inputData.pattern}
              required
            />
            <p className="form__input-error">{inputData.error}</p>
          </div>
        ))}
        <p className="form__registration-error">{params.isRegistrationError}</p>
        <button disabled={!params.isValid} className="form__submit">
          {params.submitButtonText}
        </button>
      </fieldset>

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
  formDisabled: PropTypes.bool,
};

export default Form;
